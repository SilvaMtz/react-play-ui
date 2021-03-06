import {
  useEffect,
  useRef,
  useReducer,
  cloneElement,
  isValidElement
} from 'react';
import {
  Direction,
  Default
} from '../../utils/toast';
import {
  parseClassName,
  canBeRendered,
  isBool,
  isFn,
  isNum,
  isStr,
  isToastIdValid,
  getAutoCloseDelay,
} from '../../utils';
import { toastEventManager, ToastEvent } from '../../services/toast';

import {
  Id,
  ToastContainerProps,
  ToastProps,
  ToastContent,
  ToastInterface,
  ToastPosition,
  ClearWaitingQueueParams,
  NotValidatedToastProps,
  ToastTransition
} from '../../utils/toast/types';
import { useKeeper } from './useKeeper';
import { ToastActionType, reducer } from './toastContainerReducer';

type CollectionItem = Record<Id, ToastInterface>;
type ToastToRender = Partial<Record<ToastPosition, ToastInterface[]>>;

interface QueuedToast {
  toastContent: ToastContent;
  toastProps: ToastProps;
  staleId?: Id;
}

export interface ToastContainerInstance {
  toastKey: number;
  displayedToast: number;
  props: ToastContainerProps;
  containerId?: Id | null;
  isToastActive: (toastId: Id) => boolean;
  getToast: (id: Id) => ToastInterface | null;
}

export function useToastContainer(props: ToastContainerProps) {
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const [toast, dispatch] = useReducer(reducer, []);
  const containerRef = useRef(null);
  let toastCount = useKeeper(0);
  let queue = useKeeper<QueuedToast[]>([]);
  const collection = useKeeper<CollectionItem>({});
  const instance = useKeeper<ToastContainerInstance>({
    toastKey: 1,
    displayedToast: 0,
    props,
    containerId: null,
    isToastActive: isToastActive,
    getToast: id => collection[id] || null
  });

  useEffect(() => {
    instance.containerId = props.containerId;
    toastEventManager
      .cancelEmit(ToastEvent.WillUnmount)
      .on(ToastEvent.Show, buildToast)
      .on(ToastEvent.Clear, toastId => containerRef.current && removeToast(toastId))
      .on(ToastEvent.ClearWaitingQueue, clearWaitingQueue)
      .emit(ToastEvent.DidMount, instance);

    return () => toastEventManager.emit(ToastEvent.WillUnmount, instance);
  }, []);

  useEffect(() => {
    instance.isToastActive = isToastActive;
    instance.displayedToast = toast.length;
    toastEventManager.emit(ToastEvent.Change, toast.length, props.containerId);
  }, [toast]);

  useEffect(() => {
    instance.props = props;
  });

  function isToastActive(id: Id) {
    return toast.indexOf(id) !== -1;
  }

  function clearWaitingQueue({ containerId }: ClearWaitingQueueParams) {
    const { limit } = instance.props;
    if (limit && (!containerId || instance.containerId === containerId)) {
      toastCount -= queue.length;
      queue = [];
    }
  }

  function removeToast(toastId?: Id) {
    dispatch({ type: ToastActionType.REMOVE, toastId });
  }

  function dequeueToast() {
    const { toastContent, toastProps, staleId } = queue.shift() as QueuedToast;
    appendToast(toastContent, toastProps, staleId);
  }

  /**
   * check if a container is attached to the dom
   * check for multi-container, build only if associated
   * check for duplicate toastId if no update
   */
  function isNotValid({
    containerId,
    toastId,
    updateId
  }: NotValidatedToastProps) {
    return !containerRef.current ||
      (instance.props.enableMultiContainer &&
        containerId !== instance.props.containerId) ||
      (collection[toastId] && updateId == null)
      ? true
      : false;
  }

  // this function and all the function called inside needs to rely on ref(`useKeeper`)
  function buildToast(
    content: ToastContent,
    { delay, staleId, ...options }: NotValidatedToastProps
  ) {
    if (!canBeRendered(content) || isNotValid(options)) return;

    const { toastId, updateId } = options;
    const { props } = instance;
    const closeToast = () => removeToast(toastId);
    const isNotAnUpdate = options.updateId == null;

    if (isNotAnUpdate) toastCount++;

    const toastProps: ToastProps = {
      toastId,
      updateId,
      isIn: false,
      key: options.key || instance.toastKey++,
      type: options.type,
      fill: options.fill,
      closeToast: closeToast,
      closeButton: options.closeButton,
      rtl: props.rtl,
      position: options.position || (props.position as ToastPosition),
      transition: options.transition || (props.transition as ToastTransition),
      className: parseClassName(options.className || props.toastClassName),
      bodyClassName: parseClassName(
        options.bodyClassName || props.bodyClassName
      ),
      style: options.style || props.toastStyle,
      bodyStyle: options.bodyStyle || props.bodyStyle,
      onClick: options.onClick || props.onClick,
      pauseOnHover: isBool(options.pauseOnHover)
        ? options.pauseOnHover
        : props.pauseOnHover,
      pauseOnFocusLoss: isBool(options.pauseOnFocusLoss)
        ? options.pauseOnFocusLoss
        : props.pauseOnFocusLoss,
      draggable: isBool(options.draggable)
        ? options.draggable
        : props.draggable,
      draggablePercent: isNum(options.draggablePercent)
        ? options.draggablePercent
        : (props.draggablePercent as number),
      draggableDirection:
        options.draggableDirection || props.draggableDirection,
      closeOnClick: isBool(options.closeOnClick)
        ? options.closeOnClick
        : props.closeOnClick,
      progressClassName: parseClassName(
        options.progressClassName || props.progressClassName
      ),
      progressStyle: options.progressStyle || props.progressStyle,
      autoClose: getAutoCloseDelay(options.autoClose, props.autoClose),
      hideProgressBar: isBool(options.hideProgressBar)
        ? options.hideProgressBar
        : props.hideProgressBar,
      progress: options.progress,
      role: isStr(options.role) ? options.role : props.role,
      deleteToast() {
        removeFromCollection(toastId);
      }
    };

    if (isFn(options.onOpen)) toastProps.onOpen = options.onOpen;
    if (isFn(options.onClose)) toastProps.onClose = options.onClose;

    //  tweak for vertical dragging
    if (
      toastProps.draggableDirection === Direction.Y &&
      toastProps.draggablePercent === Default.DRAGGABLE_PERCENT
    ) {
      (toastProps.draggablePercent as number) *= 1.5;
    }

    let closeButton = props.closeButton;

    if (options.closeButton === false || canBeRendered(options.closeButton)) {
      closeButton = options.closeButton;
    } else if (options.closeButton === true) {
      closeButton = canBeRendered(props.closeButton) ? props.closeButton : true;
    }

    toastProps.closeButton = closeButton;

    let toastContent = content;

    if (isValidElement(content) && !isStr(content.type)) {
      toastContent = cloneElement(content, {
        closeToast,
        toastProps
      });
    } else if (isFn(content)) {
      toastContent = content({ closeToast, toastProps });
    }

    // not handling limit + delay by design. Waiting for user feedback first
    if (
      props.limit &&
      props.limit > 0 &&
      toastCount > props.limit &&
      isNotAnUpdate
    ) {
      queue.push({ toastContent, toastProps, staleId });
    } else if (isNum(delay) && (delay as number) > 0) {
      setTimeout(() => {
        appendToast(toastContent, toastProps, staleId);
      }, delay);
    } else {
      appendToast(toastContent, toastProps, staleId);
    }
  }

  function appendToast(
    content: ToastContent,
    toastProps: ToastProps,
    staleId?: Id
  ) {
    const { toastId } = toastProps;

    if (staleId) delete collection[staleId];

    collection[toastId] = {
      content,
      props: toastProps
    };
    dispatch({
      type: ToastActionType.ADD,
      toastId,
      staleId
    });
  }

  function removeFromCollection(toastId: Id) {
    delete collection[toastId];
    const queueLen = queue.length;
    toastCount = isToastIdValid(toastId)
      ? toastCount - 1
      : toastCount - instance.displayedToast;

    if (toastCount < 0) toastCount = 0;

    if (queueLen > 0) {
      const freeSlot = isToastIdValid(toastId) ? 1 : instance.props.limit!;

      if (queueLen === 1 || freeSlot === 1) {
        instance.displayedToast++;
        dequeueToast();
      } else {
        const toDequeue = freeSlot > queueLen ? queueLen : freeSlot;
        instance.displayedToast = toDequeue;

        for (let i = 0; i < toDequeue; i++) dequeueToast();
      }
    } else {
      forceUpdate();
    }
  }

  function getToastToRender<T>(
    cb: (position: ToastPosition, toastList: ToastInterface[]) => T
  ) {
    const toastToRender: ToastToRender = {};
    const toastList = props.newestOnTop
      ? Object.keys(collection).reverse()
      : Object.keys(collection);

    for (let i = 0; i < toastList.length; i++) {
      const toast = collection[toastList[i]];
      const { position } = toast.props;
      toastToRender[position] || (toastToRender[position] = []);

      toastToRender[position]!.push(toast);
    }

    return (Object.keys(toastToRender) as Array<ToastPosition>).map(p =>
      cb(p, toastToRender[p]!)
    );
  }

  return {
    getToastToRender,
    collection,
    containerRef,
    isToastActive
  };
}
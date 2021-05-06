import * as React from 'react';
import { render } from 'react-dom';
import { POSITION, TYPE } from '../../utils/toast';
import { canUseDom, isStr, isNum, isFn } from '../../utils';
import { toastEventManager, ToastOnChangeCallback, ToastEvent } from './toastEventManager';
import {
  ToastContent,
  ToastOptions,
  ToastProps,
  Id,
  ToastContainerProps,
  UpdateOptions,
  ClearWaitingQueueParams,
  NotValidatedToastProps
} from '../../utils/toast/types';
import { ToastContainerInstance } from '../../hooks/toast';
import { ToastContainer } from '../../components';

interface EnqueuedToast {
  content: ToastContent;
  options: NotValidatedToastProps;
}

let containers = new Map<ToastContainerInstance | Id, ToastContainerInstance>();
let latestInstance: ToastContainerInstance | Id;
let containerDomNode: HTMLElement;
let containerConfig: ToastContainerProps;
let queue: EnqueuedToast[] = [];
let lazy = false;

/**
 * Check whether any container is currently mounted in the DOM
 */
function isAnyContainerMounted() {
  return containers.size > 0;
}

/**
 * Get the toast by id, given it's in the DOM, otherwise returns null
 */
function getToast(toastId: Id, { containerId }: ToastOptions) {
  const container = containers.get(containerId || latestInstance);
  if (!container) return null;

  return container.getToast(toastId);
}

/**
 * Generate a random toastId
 */
function generateToastId() {
  return Math.random()
    .toString(36)
    .substr(2, 9);
}

/**
 * Generate a toastId or use the one provided
 */
function getToastId(options?: ToastOptions) {
  if (options && (isStr(options.toastId) || isNum(options.toastId))) {
    return options.toastId;
  }

  return generateToastId();
}

/**
 * If the container is not mounted, the toast is enqueued and
 * the container lazy mounted
 */
function dispatchToast(
  content: ToastContent,
  options: NotValidatedToastProps
): Id {
  if (isAnyContainerMounted()) {
    toastEventManager.emit(ToastEvent.Show, content, options);
  } else {
    queue.push({ content, options });
    if (lazy && canUseDom) {
      lazy = false;
      containerDomNode = document.createElement('div');
      document.body.appendChild(containerDomNode);
      render(<ToastContainer {...containerConfig} />, containerDomNode);
    }
  }

  return options.toastId;
}

/**
 * Merge provided options with the defaults settings and generate the toastId
 */
function mergeOptions(type: string, options?: ToastOptions) {
  return {
    ...options,
    type: (options && options.type) || type,
    toastId: getToastId(options)
  } as NotValidatedToastProps;
}

const createToastByType = (type: string) => (
  content: ToastContent,
  options?: ToastOptions
) => dispatchToast(content, mergeOptions(type, options));

const toast = (content: ToastContent, options?: ToastOptions) =>
  dispatchToast(content, mergeOptions(TYPE.DEFAULT, options));

toast.default = createToastByType(TYPE.DEFAULT);
toast.primary = createToastByType(TYPE.PRIMARY);
toast.accent = createToastByType(TYPE.ACCENT);
toast.success = createToastByType(TYPE.SUCCESS);
toast.warning = createToastByType(TYPE.WARNING);
toast.danger = createToastByType(TYPE.DANGER);

/**
 * Remove toast programmaticaly
 */
toast.dismiss = (id?: Id) => toastEventManager.emit(ToastEvent.Clear, id);

/**
 * Clear waiting queue when limit is used
 */
toast.clearWaitingQueue = (params: ClearWaitingQueueParams = {}) =>
  toastEventManager.emit(ToastEvent.ClearWaitingQueue, params);

/**
 * return true if one container is displaying the toast
 */
toast.isActive = (id: Id) => {
  let isToastActive = false;

  containers.forEach(container => {
    if (container.isToastActive && container.isToastActive(id)) {
      isToastActive = true;
    }
  });

  return isToastActive;
};

toast.update = (toastId: Id, options: UpdateOptions = {}) => {
  // if you call toast and toast.update directly nothing will be displayed
  // this is why I defered the update
  setTimeout(() => {
    const toast = getToast(toastId, options as ToastOptions);
    if (toast) {
      const { props: oldOptions, content: oldContent } = toast;

      const nextOptions = {
        ...oldOptions,
        ...options,
        toastId: options.toastId || toastId,
        updateId: generateToastId()
      } as ToastProps & UpdateOptions;

      if (nextOptions.toastId !== toastId) nextOptions.staleId = toastId;

      const content = nextOptions.render || oldContent;
      delete nextOptions.render;

      dispatchToast(content, nextOptions);
    }
  }, 0);
};

/**
 * Used for controlled progress bar.
 */
toast.done = (id: Id) => {
  toast.update(id, {
    progress: 1
  });
};

/**
 * Track changes. The callback get the number of toast displayed
 *
 */
toast.onChange = (callback: ToastOnChangeCallback) => {
  if (isFn(callback)) {
    toastEventManager.on(ToastEvent.Change, callback);
  }
  return () => {
    isFn(callback) && toastEventManager.off(ToastEvent.Change, callback);
  };
};

/**
 * Configure the ToastContainer when lazy mounted
 */
toast.configure = (config: ToastContainerProps = {}) => {
  lazy = true;
  containerConfig = config;
};

toast.POSITION = POSITION;
toast.TYPE = TYPE;

/**
 * Wait until the ToastContainer is mounted to dispatch the toast
 * and attach isActive method
 */
toastEventManager
  .on(ToastEvent.DidMount, (containerInstance: ToastContainerInstance) => {
    latestInstance = containerInstance.containerId || containerInstance;
    containers.set(latestInstance, containerInstance);

    queue.forEach(item => {
      toastEventManager.emit(ToastEvent.Show, item.content, item.options);
    });

    queue = [];
  })
  .on(ToastEvent.WillUnmount, (containerInstance: ToastContainerInstance) => {
    containers.delete(containerInstance.containerId || containerInstance);

    if (containers.size === 0) {
      toastEventManager
        .off(ToastEvent.Show)
        .off(ToastEvent.Clear)
        .off(ToastEvent.ClearWaitingQueue);
    }

    if (canUseDom && containerDomNode) {
      document.body.removeChild(containerDomNode);
    }
  });

export { toast };
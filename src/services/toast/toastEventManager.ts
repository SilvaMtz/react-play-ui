import {
  Id,
  ToastContent,
  ClearWaitingQueueParams,
  NotValidatedToastProps
} from '../../utils/toast/types';
import { ToastContainerInstance } from '../../hooks/toast';

export const enum ToastEvent {
  Show,
  Clear,
  DidMount,
  WillUnmount,
  Change,
  ClearWaitingQueue
}

type OnShowCallback = (
  content: ToastContent,
  options: NotValidatedToastProps
) => void;
type OnClearCallback = (id?: Id) => void;
type OnClearWaitingQueue = (params: ClearWaitingQueueParams) => void;
type OnDidMountCallback = (containerInstance: ToastContainerInstance) => void;
type OnWillUnmountCallback = OnDidMountCallback;
export type ToastOnChangeCallback = (
  toast: number,
  containerId?: number | string
) => void;
type Callback =
  | OnShowCallback
  | OnClearCallback
  | OnClearWaitingQueue
  | OnDidMountCallback
  | OnWillUnmountCallback
  | ToastOnChangeCallback;
type TimeoutId = ReturnType<typeof window.setTimeout>;

export interface ToastEventManager {
  list: Map<ToastEvent, Callback[]>;
  emitQueue: Map<ToastEvent, TimeoutId[]>;
  on(event: ToastEvent.Show, callback: OnShowCallback): ToastEventManager;
  on(event: ToastEvent.Clear, callback: OnClearCallback): ToastEventManager;
  on(
    event: ToastEvent.ClearWaitingQueue,
    callback: OnClearWaitingQueue
  ): ToastEventManager;
  on(event: ToastEvent.DidMount, callback: OnDidMountCallback): ToastEventManager;
  on(event: ToastEvent.WillUnmount, callback: OnWillUnmountCallback): ToastEventManager;
  on(event: ToastEvent.Change, callback: ToastOnChangeCallback): ToastEventManager;
  off(event: ToastEvent, callback?: Callback): ToastEventManager;
  cancelEmit(event: ToastEvent): ToastEventManager;
  emit(
    event: ToastEvent.Show,
    content: React.ReactNode,
    options: NotValidatedToastProps
  ): void;
  emit(event: ToastEvent.Clear, id?: string | number): void;
  emit(event: ToastEvent.ClearWaitingQueue, params: ClearWaitingQueueParams): void;
  emit(event: ToastEvent.DidMount, containerInstance: ToastContainerInstance): void;
  emit(event: ToastEvent.WillUnmount, containerInstance: ToastContainerInstance): void;
  emit(event: ToastEvent.Change, toast: number, containerId?: number | string): void;
}

export const toastEventManager: ToastEventManager = {
  list: new Map(),
  emitQueue: new Map(),

  on(event: ToastEvent, callback: Callback) {
    this.list.has(event) || this.list.set(event, []);
    this.list.get(event)!.push(callback);
    return this;
  },

  off(event, callback) {
    if (callback) {
      const cb = this.list.get(event)!.filter(cb => cb !== callback);
      this.list.set(event, cb);
      return this;
    }
    this.list.delete(event);
    return this;
  },

  cancelEmit(event) {
    const timers = this.emitQueue.get(event);
    if (timers) {
      timers.forEach(clearTimeout);
      this.emitQueue.delete(event);
    }

    return this;
  },

  /**
   * Enqueue the event at the end of the call stack
   * Doing so let the user call toast as follow:
   * toast('1')
   * toast('2')
   * toast('3')
   * Without setTimemout the code above will not work
   */
  emit(event: ToastEvent, ...args: any[]) {
    this.list.has(event) &&
      this.list.get(event)!.forEach((callback: Callback) => {
        const timer = setTimeout(() => {
          // @ts-ignore
          callback(...args);
        }, 0);

        this.emitQueue.has(event) || this.emitQueue.set(event, []);
        this.emitQueue.get(event)!.push(timer);
      });
  }
};
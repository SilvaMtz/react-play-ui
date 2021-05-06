import { Id } from '../../utils';

import { isToastIdValid } from '../../utils';

export const enum ToastActionType {
  ADD,
  REMOVE
}
export type ToastState = Array<Id>;
export type ToastStateAction =
  | { type: ToastActionType.ADD; toastId: Id; staleId?: Id }
  | { type: ToastActionType.REMOVE; toastId?: Id };

export function reducer(state: ToastState, action: ToastStateAction) {
  switch (action.type) {
    case ToastActionType.ADD:
      return [...state, action.toastId].filter(id => id !== action.staleId);
    case ToastActionType.REMOVE:
      return isToastIdValid(action.toastId)
        ? state.filter(id => id !== action.toastId)
        : [];
  }
}
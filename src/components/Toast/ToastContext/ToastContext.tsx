import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
  createContext,
} from "react";
import { Toast, ToastProps } from "../Toast";
import { ToastWrapper } from "../ToastWrapper";

export const ToastContext = createContext({});

export interface ToastContextProviderInterface {
  /**
   * ClassName for the Toast Wrapper
   */
  toastContainerClassName?: string;
  /**
   * Array that determines the screen corner in which the Toast Wrapper will position itself
   */
  position?: ["top" | "bottom", "right" | "left"];
  /**
   * Duration of the Toasts in miliseconds. Defaults to 5000
   * The duration will affect all the toasts in the wrapper.
   * As of this version, individual duration for each Toast cannot be adjuster
   */
  duration?: number;
}

export const ToastContextProvider: FunctionComponent<ToastContextProviderInterface> = ({
  position,
  toastContainerClassName,
  duration = 5000,
  children,
}) => {
  const [toasts, setToasts] = useState([] as ToastProps[]);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts((toasts) => toasts.slice(1));
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  const addToast = useCallback(
    (toast) => {
      setToasts((toasts) => [...toasts, toast]);
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <ToastWrapper position={position} className={toastContainerClassName}>
        {toasts.map((t: ToastProps, index) => {
          const toastProps = {...t, duration: duration}
          return (
            <Toast key={index} {...toastProps} />
          )
        })}
      </ToastWrapper>
    </ToastContext.Provider>
  );
};

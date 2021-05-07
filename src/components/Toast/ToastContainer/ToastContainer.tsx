import React, { FunctionComponent } from 'react';
import { ToastComponent } from '../ToastComponent';
import classNames from 'classnames';
import classes from './ToastContainer.module.css';
import { parseClassName, isFn } from '../../../utils';
import { CloseButton } from '../CloseButton/CloseButton';
import { useToastContainer } from '../../../hooks/toast';
import { Bounce } from '../../../utils/toast/toastTransitions';
import { POSITION, Direction, Default, } from '../../../utils/toast';
import { ToastContainerProps, ToastPosition } from '../../../utils/toast/types';

export const ToastContainer: FunctionComponent<ToastContainerProps> = ({
  position = POSITION.TOP_RIGHT as ToastPosition,
  transition = Bounce,
  rtl = false,
  autoClose = 5000,
  hideProgressBar = false,
  closeButton = CloseButton,
  pauseOnHover = true,
  pauseOnFocusLoss = true,
  closeOnClick = true,
  newestOnTop = false,
  draggable = true,
  draggablePercent = Default.DRAGGABLE_PERCENT as number,
  draggableDirection = Direction.X,
  role = 'alert',
  className,
  style,
  containerId
}) => {
  const { getToastToRender, containerRef, isToastActive } = useToastContainer(
    {
      position,
      transition,
      autoClose,
      hideProgressBar,
      closeButton,
      pauseOnHover,
      pauseOnFocusLoss,
      closeOnClick,
      newestOnTop,
      draggable,
      draggablePercent,
      draggableDirection,
      role
    }
  );

  function getClassName(position: ToastPosition) {
    const defaultClassName = classNames(
      classes[`${Default.CSS_NAMESPACE}__toast-container`],
      classes[`${Default.CSS_NAMESPACE}__toast-container--${position}`],
      rtl ? classes[`${Default.CSS_NAMESPACE}__toast-container--rtl`] : null
    );
    return isFn(className)
      ? className({
          position,
          rtl,
          defaultClassName
        })
      : classNames(defaultClassName, parseClassName(className));
  }

  return (
    <div
      ref={containerRef}
      className={classes[Default.CSS_NAMESPACE as string]}
      id={containerId as string}
    >
      {getToastToRender((position, toastList) => {
        const containerStyle: React.CSSProperties =
          toastList.length === 0
            ? { ...style, pointerEvents: 'none' }
            : { ...style };

        return (
          <div
            className={getClassName(position)}
            style={containerStyle}
            key={`container-${position}`}
          >
            {toastList.map(({ content, props: toastProps }) => {
              return (
                <ToastComponent
                  {...toastProps}
                  isIn={isToastActive(toastProps.toastId)}
                  key={`toast-${toastProps.key}`}
                  closeButton={
                    toastProps.closeButton === true
                      ? CloseButton
                      : toastProps.closeButton
                  }
                >
                  {content}
                </ToastComponent>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
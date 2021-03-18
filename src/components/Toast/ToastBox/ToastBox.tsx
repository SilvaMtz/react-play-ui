import React, { FunctionComponent, HTMLAttributes, useEffect, useState } from "react";
import { FlexGrid } from "../../FlexGrid";
import { FlexItem } from "../../FlexItem";
import { Toast } from "../Toast";
import classes from "./ToastBox.module.css";
import { ToastPropTypes } from "../Toast";

export interface ToastBoxProps {
  toasts?: Array<ToastPropTypes>;
  position?: "topRight" | "topLeft" | "bottomRight" | "bottomLeft";
}

export const ToastBox: FunctionComponent<
  ToastBoxProps & HTMLAttributes<HTMLDivElement>
> = ({ toasts, position = "topRight", children, ...rest }) => {

  const [toastList, setToastList] = useState(toasts);

  useEffect(() => {
    setToastList(toastList);
  }, [toasts])

  const positionToClassMap = {
    topLeft: "position--topLeft",
    topRight: "position--topRight",
    bottomRight: "position--bottomRight",
    bottomLeft: "position--bottomLeft",
  };

  let classList = [
    classes["ToastBox"],
    position && positionToClassMap[position]
      ? classes[positionToClassMap[position]]
      : classes[positionToClassMap["topRight"]],
  ];

  const closeAction = (index) => {
    const list = [...toastList];
    list.splice(index, 1);
    setToastList(list);
  }

  // const deleteToast = toastId => {
  //   const index = toastList.findIndex(e => e.id === toastId);
  //   toastList.splice(index, 1);
  //   setToastList([...toastList]);
  // }

  // TODO: Pass rest of ToastProps
  // TODO: Fix scroll when overflowing in bottom position
  return (
    <FlexGrid
      gutterSize="l"
      direction="column"
      className={classList.join(" ")}
      {...rest}
    >
      {children
        ? children
        : toastList
        ? toastList.map((toast, index) => {
            return (
              <FlexItem key={index}>
                <Toast
                  color={toast.color}
                  title={toast.title}
                  icon={toast.icon}
                  iconSize={toast.iconSize}
                  iconColor={toast.iconColor}
                  iconOutline={toast.iconOutline}
                  className={toast.className}
                  fill={toast.fill}
                  duration={toast.duration}
                  showProgressBar={toast.showProgressBar}
                  body={toast.body}
                  showCloseButton={toast.showCloseButton}
                  closeAction={() => closeAction(index)}
                  // onClose={toast.onClose}
                  // {...toast.rest}
                />
              </FlexItem>
            );
          })
        : null}
    </FlexGrid>
  );
};

import React, { FunctionComponent, HTMLAttributes } from "react";
import { CommonProps } from "../../types";
import classNames from "classnames";
import classes from "./ToastWrapper.module.css";

export const ToastWrapper: FunctionComponent<
  CommonProps &
    HTMLAttributes<HTMLDivElement> & {
      position?: ["top" | "bottom", "right" | "left"]
      aboveToolbar?: boolean;
    }
> = ({ position = ["top", "right"], children, aboveToolbar = false, className }) => {
  const positionMapToClass = {
    top: "PositionTop",
    left: "PositionLeft",
    right: "PositionRight",
    bottom: "PositionBottom",
  };

  const wrapperSideMap = {
    right: 'twRight',
    left: 'twLeft'
  }

  const classList = classNames(
    classes["ToastWrapper"],
    classes[positionMapToClass[position[0]]],
    classes[positionMapToClass[position[1]]],
    wrapperSideMap[position[1]],
    aboveToolbar && document.body.classList.contains("body--hasFixedToolbar__Compact")
      ? classes["belowHeader__Compact"]
      : aboveToolbar
      ? classes["belowHeader"]
      : null,
    className
  );

  return <div className={classList}>{children}</div>;
};

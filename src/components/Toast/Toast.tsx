import React, { FunctionComponent, HTMLAttributes, ReactNode } from "react";
import { IconButton } from "../IconButton";
import { ProgressBar } from "../ProgressBar";
import { SvgIcon } from "../SvgIcon";
import classes from "./Toast.module.css";

export interface ToastProps {
  color?: "primary" | "success" | "accent" | "warning" | "danger" | "default";
  icon?: string;
  iconSize?: "extraSmall" | "small" | "medium" | "large";
  title?: string;
  iconColor?: string;
  iconOutline?: boolean;
  className?: string;
  fill?: boolean;
  duration?: number;
  children?: ReactNode;
  body?: ReactNode;
  onClose?: () => {};
  closeAction?: () => void;
  showCloseButton?: boolean;
  showProgressBar?: boolean;
}

export type ToastPropTypes = ToastProps & HTMLAttributes<HTMLDivElement>;

export const Toast: FunctionComponent<ToastPropTypes> = ({
  color = "default",
  icon,
  iconSize,
  title,
  iconColor = color,
  iconOutline = false,
  className,
  fill = false,
  duration = 10,
  children,
  body,
  closeAction,
  onClose,
  showProgressBar = false,
  showCloseButton = true,
  ...rest
}) => {
  const colorToClassMap = {
    default: "",
    primary: "toast--primaryColor",
    success: "toast--successColor",
    accent: "toast--accentColor",
    warning: "toast--warningColor",
    danger: "toast--dangerColor",
  };

  const handleCloseAction = () => {
    onClose();
    closeAction()
  }

  let iconInstance = icon ? (
    <SvgIcon
      icon={icon}
      size={iconSize}
      color={iconColor === "default" ? "rgba(var(--text-color))" : iconColor}
      outline={iconOutline}
      style={{ marginRight: 6 }}
    />
  ) : null;

  let titleInstance;
  if (iconInstance && title) {
    titleInstance = (
      <span className={classes["icon--title"]}>
        {iconInstance}
        <h4 className={classes["title--withIcon"]}>{title}</h4>
      </span>
    );
  } else if (title) {
    titleInstance = <h4 className={classes["title"]}>{title}</h4>;
  }

  let childrenInstance =
    children || body ? (
      <div className={classes["body"]}>{children || body}</div>
    ) : null;

  let contentInstance =
    titleInstance && childrenInstance ? (
      <React.Fragment>
        {titleInstance}
        {childrenInstance}
      </React.Fragment>
    ) : titleInstance && !childrenInstance ? (
      titleInstance
    ) : childrenInstance && !titleInstance ? (
      childrenInstance
    ) : null;

  let containerInstanceClassList = [
    classes["coloredContainer"],
    color && color != "default" && colorToClassMap[color]
      ? classes[colorToClassMap[color]]
      : null,
    showCloseButton ? classes["container-hasButton"] : null,
    (childrenInstance && !titleInstance) || (titleInstance && !childrenInstance)
      ? classes["centeredContainer"]
      : null,
    fill ? classes["fill"] : null,
  ];

  let containerInstance = (
    <div className={containerInstanceClassList.join(" ")}>
      {contentInstance}
      {showCloseButton ? (
        <IconButton
          style={{ position: "absolute", top: 12, right: 12 }}
          onClick={closeAction}
          icon="x"
          size="small"
          color={
            color && color != "default" && colorToClassMap[color] && fill
              ? color
              : null
          }
          fill={
            !(color && colorToClassMap[color] && color != "default" && fill)
          }
        />
      ) : null}
      {showProgressBar ? (
        <ProgressBar
          style={{ position: "absolute", left: 0, bottom: 0 }}
          duration={duration}
          color="success"
          size="extraSmall"
        />
      ) : null}
    </div>
  );

  let toastClassList = [classes["toast"]];

  return (
    <div className={toastClassList.join(" ")} {...rest}>
      {containerInstance}
    </div>
  );
};

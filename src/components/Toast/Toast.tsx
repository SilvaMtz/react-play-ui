import React, { FunctionComponent, HTMLAttributes } from "react";
import { IconButton } from "../IconButton";
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
  onClose?: () => {};
}

export const Toast: FunctionComponent<
  ToastProps & HTMLAttributes<HTMLDivElement>
> = ({
  color = "default",
  icon,
  iconSize,
  title,
  iconColor = color,
  iconOutline = false,
  className,
  children,
  onClose,
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

  let childrenInstance = children ? (
    <div className={classes["body"]}>{children}</div>
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
    onClose ? classes["container-hasButton"] : null,
    (childrenInstance && !titleInstance) || (titleInstance && !childrenInstance)
      ? classes["centeredContainer"]
      : null,
  ];

  let containerInstance = (
    <div className={containerInstanceClassList.join(" ")}>
      {contentInstance}
      {onClose ? (
        <IconButton
          style={{ position: "absolute", top: 12, right: 12 }}
          onClick={onClose}
          icon="x"
          size="small"
          color={
            color && color != "default" && colorToClassMap[color] ? color : null
          }
          fill={!(color && colorToClassMap[color] && color != "default")}
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

import React, { FunctionComponent, HTMLAttributes } from "react";
import { IconButton } from "../IconButton";
import { ProgressBar } from "../ProgressBar";
import { SvgIcon } from "../SvgIcon";
import { IconSize } from "../SvgIcon/SvgIcon";
import classes from "./Toast.module.css";

export interface ToastProps {
  color?: "primary" | "success" | "accent" | "warning" | "danger" | "default";
  icon?: string;
  iconSize?: IconSize
  title?: string;
  iconColor?: string;
  className?: string;
  fill?: boolean;
  duration?: number;
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
  className,
  fill = false,
  duration,
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
    fill ? classes["fill"] : null
  ];

  let containerInstance = (
    <div className={containerInstanceClassList.join(" ")}>
      {contentInstance}
      {onClose ? (
        <IconButton
          style={{ position: "absolute", top: 15, right: 15 }}
          onClick={onClose}
          icon="x"
          size="extraSmall"
          color={
            color && color != "default" && colorToClassMap[color] && fill ? color : null
          }
          fill={!(color && colorToClassMap[color] && color != "default" && fill)}
        />
      ) : null}
      {duration ? <ProgressBar style={{position: "absolute", left: 0, bottom: 0}} duration={duration} color="success" size="extraSmall" /> : null}
    </div>
  );

  let toastClassList = [classes["toast"]];

  return (
    <div className={toastClassList.join(" ")} {...rest}>
      {containerInstance}
    </div>
  );
};

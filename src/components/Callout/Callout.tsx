import React, { FunctionComponent, ReactNode, HTMLAttributes } from "react";
import classes from "./Callout.module.css";
import { SvgIcon } from "../SvgIcon";

export interface CalloutProps {
  color?: "primary" | "success" | "accent" | "warning" | "danger" | "default";
  icon?: string;
  iconSize?: "extraSmall" | "small" | "medium" | "large";
  title?: string;
  iconColor?: string;
  fill?: boolean;
}

export const Callout: FunctionComponent<
  CalloutProps & HTMLAttributes<HTMLDivElement>
> = ({
  color = "primary",
  iconColor = color,
  icon,
  iconSize = "small",
  title,
  fill = true,
  children,
  ...rest
}) => {
  const colorToClassMap = {
    primary: "callout--primaryColor",
    success: "callout--successColor",
    accent: "callout--accentColor",
    warning: "callout--warningColor",
    danger: "callout--dangerColor",
    default: "callout--defaultColor",
  };

  const colorFillToClassMap = {
    primary: "callout--fill_primaryColor",
    success: "callout--fill_successColor",
    accent: "callout--fill_accentColor",
    warning: "callout--fill_warningColor",
    danger: "callout--fill_dangerColor",
    default: "callout--fill_defaultColor",
  };

  let iconInstance = icon ? (
    <SvgIcon
      icon={icon}
      size={iconSize}
      color={
        iconColor === "default"
          ? "rgba(var(--interactable-shade-1-hover))"
          : iconColor
      }
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

  let bodyInstance = children ? (
    <div className={classes["body"]}>{children}</div>
  ) : null;

  let classList = [
    classes["callout"],
    color && colorToClassMap[color] ? classes[colorToClassMap[color]] : null,
    color && colorToClassMap[color] && fill
      ? classes[colorFillToClassMap[color]]
      : null,
  ];

  return (
    <div className={classList.join(" ")} {...rest}>
      {titleInstance}
      {bodyInstance}
    </div>
  );
};

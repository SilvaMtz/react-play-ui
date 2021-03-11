import { transform } from "@babel/core";
import React, { FunctionComponent, HTMLAttributes } from "react";
import classes from "./ProgressBar.module.css";

export interface ProgressBarProps {
  className?: string;
  size?: "extraSmall" | "small" | "medium" | "large";
  color?: "primary" | "success" | "accent" | "warning" | "danger" | "default";
  duration?: "indefinite" | number;
  value?: number;
}

export const ProgressBar: FunctionComponent<
  HTMLAttributes<HTMLSpanElement> & ProgressBarProps
> = ({
  className,
  size = "small",
  color = "primary",
  value,
  duration = "indefinite",
  ...rest
}) => {
  const sizeToClassMap = {
    extraSmall: "progress-bar--sizeExtraSmall",
    small: "progress-bar--sizeSmall",
    medium: "progress-bar--sizeMedium",
    large: "progress-bar--sizeLarge",
  };

  const colorToClassMap = {
    primary: "progress-bar--primaryColor",
    success: "progress-bar--successColor",
    accent: "progress-bar--accentColor",
    warning: "progress-bar--warningColor",
    danger: "progress-bar--dangerColor",
    default: "progress-bar--defaultColor",
  };

  let wrapperClassList = [
    classes["progress-bar"],
    size && sizeToClassMap[size] ? classes[sizeToClassMap[size]] : null,
    className,
  ];

  let loadingClassList = [
    classes["progress-bar--progress"],
    color && colorToClassMap[color] ? classes[colorToClassMap[color]] : null,
  ];

  let actualValue = value >= 100 ? 100 : value;

  let loadingInstance =
    value >= 0 ? (
      <span className={wrapperClassList.join(" ")} {...rest}>
        <span className={loadingClassList.join(" ")}
          style={{
            width: "100%",
            animation: "none",
            transition: "transform 0.25s ease-in-out",
            transform: `translateX(${actualValue - 100}%)`
          }}
        />
      </span>
    ) : duration && typeof duration === "number" ? (
      <span className={wrapperClassList.join(" ")} {...rest}>
        <span
          className={loadingClassList.join(" ")}
          style={{
            width: "100%",
            animation: `${classes['loadingLimitedProgressAnimation']} ${duration}s linear`,
          }}
        />
      </span>
    ) : (
      <span className={wrapperClassList.join(" ")} {...rest}>
        <span className={loadingClassList.join(" ")}/>
      </span>
    );

  return loadingInstance;
};

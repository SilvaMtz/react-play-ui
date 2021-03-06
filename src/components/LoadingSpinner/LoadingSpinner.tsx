import React, { FunctionComponent, HTMLAttributes } from "react";
import classes from "./LoadingSpinner.module.css";

interface LoadingSpinnerProps {
  color?:
    | "white"
    | "text"
    | "primary"
    | "secondary"
    | "accent"
    | "warning"
    | "danger"
    | "default";
  size?: "mini" | "small" | "medium" | "large" | "extraLarge";
  className?: string;
}

export const LoadingSpinner: FunctionComponent<
  LoadingSpinnerProps & HTMLAttributes<HTMLDivElement>
> = ({ color = "primary", size = "medium", className, ...rest }) => {
  const sizeToClassMap = {
    mini: "spinner--sizeMini",
    small: "spinner--sizeSmall",
    medium: "",
    large: "spinner--sizeLarge",
    extraLarge: "spinner--sizeExtraLarge",
  };

  const colorToClassStyleMap = {
    text: "spinner--colorText",
    primary: "spinner--colorPrimary",
    danger: "spinner--colorDanger",
    warning: "spinner--colorWarning",
    secondary: "spinner--colorSecondary",
    accent: "spinner--colorAccent",
    default: "spinner--colorDefault",
    white: "spinner--colorWhite",
  };

  let classList = [
    classes["sk-chase"],
    colorToClassStyleMap[color] ? classes[colorToClassStyleMap[color]] : null,
    size && sizeToClassMap[size] ? classes[sizeToClassMap[size]] : null,
    className,
  ];

  return (
    <div className={classList.join(" ")} {...rest}>
      <div className={classes["sk-chase-dot"]}></div>
      <div className={classes["sk-chase-dot"]}></div>
      <div className={classes["sk-chase-dot"]}></div>
      <div className={classes["sk-chase-dot"]}></div>
      <div className={classes["sk-chase-dot"]}></div>
      <div className={classes["sk-chase-dot"]}></div>
    </div>
  );
};

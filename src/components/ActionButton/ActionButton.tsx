import React, {
  ButtonHTMLAttributes,
  FunctionComponent,
  ReactNode,
} from "react";
import { SvgIcon } from "../SvgIcon";
import { LoadingSpinner } from '../LoadingSpinner';
import classes from "./ActionButton.module.css";

interface ActionButtonProps {
  className?: string;
  children?: ReactNode;
  color?: string;
  size?: "compact" | "small" | "medium" | "large";
  fill?: boolean;
  isLoading?: boolean;
  restrainWidth?: boolean;
  icon?: string;
  iconSide?: "left" | "right";
  label?: string;
  // href?: string;
  onClick: any;
  disabled?: boolean;
}

export const ActionButton: FunctionComponent<
  ActionButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  children,
  color = "default",
  size = "small",
  fill = true,
  isLoading,
  restrainWidth = true,
  icon,
  iconSide = "left",
  label,
  // href,
  disabled = false,
  onClick,
  className,
  ...rest
}) => {
  const buttonColorMapping = {
    none: "",
    default: "button--default",
    primary: "button--primary",
    danger: "button--danger",
    secondary: "button--secondary",
    warning: "button--warning",
    accent: "button--accent",
  };

  const buttonSizeMapping = {
    compact: "button--compact",
    small: "",
    medium: "button--medium",
    large: "button--large",
  };

  let isDisabled = disabled || isLoading;

  let classList = [
    classes["action-button"],
    color
      ? classes[buttonColorMapping[color]]
      : classes[buttonColorMapping["none"]],
    fill ? classes["fill"] : null,
    size
      ? classes[buttonSizeMapping[size]]
      : classes[buttonSizeMapping["small"]],
    restrainWidth ? classes["restrain-width"] : null,
    isLoading ? classes["button--isLoading"] : null,
    disabled ? classes["button--disabled"] : null,
    className
  ];

  let iconInstance = null;
  if (icon && !isLoading) {
    iconInstance = (
      <SvgIcon
        icon={icon}
        size={size === "compact" ? "extraSmall" : "small"}
        color={
          color === "default" || disabled
            ? "rgb(var(--text-color))"
            : color != "default" &&
              color != "none" &&
              buttonColorMapping[color] &&
              !fill
            ? `rgba(var(--${color}-color))`
            : "white"
        }
      />
    );
  } else if (isLoading) {
    iconInstance = <LoadingSpinner size="mini" color={fill && buttonColorMapping[color] ? "white" : null } />
  }

  let labelChildren = children ? (
    children
  ) : label && iconInstance ? (
    <span
      style={
        iconSide === "left"
          ? { marginLeft: 8, marginRight: 4 }
          : { marginRight: 8, marginLeft: 4 }
      }
    >
      {label}
    </span>
  ) : (
    label
  );

  let buttonContent = (
    <React.Fragment>
      {iconInstance && iconSide === "left" && !children ? iconInstance : null}
      {labelChildren}
      {iconInstance && iconSide === "right" && !children ? iconInstance : null}
    </React.Fragment>
  );

  let colorStyles = {
    backgroundColor: buttonColorMapping[color] ? null : color,
  };

  let button = (
    <button
      onClick={onClick}
      className={classList.join(" ")}
      disabled={isDisabled}
      style={colorStyles}
      {...rest}
    >
      {buttonContent}
    </button>
  );

  return button;
};

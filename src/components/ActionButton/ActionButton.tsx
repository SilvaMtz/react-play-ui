import React, {
  AnchorHTMLAttributes,
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
  size?: "extraSmall" | "small" | "medium" | "large";
  fill?: boolean;
  isLoading?: boolean;
  restrainWidth?: boolean;
  icon?: string;
  iconSide?: "left" | "right";
  label?: string;
  href?: string;
  onClick: any;
  disabled?: boolean;
}

export const ActionButton: FunctionComponent<
  ActionButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
 | AnchorHTMLAttributes<HTMLAnchorElement>> = React.forwardRef<HTMLButtonElement, ActionButtonProps>(({
  children,
  color = "default",
  size = "small",
  fill = true,
  isLoading,
  restrainWidth = true,
  icon,
  iconSide = "left",
  label,
  href,
  disabled = false,
  onClick,
  className,
  ...rest
}, ref) => {
  const buttonColorMapping = {
    none: "",
    default: "button--default",
    primary: "button--primary",
    danger: "button--danger",
    success: "button--success",
    warning: "button--warning",
    accent: "button--accent",
  };

  // TODO: Change sizes to match IconButtons
  const buttonSizeMapping = {
    extraSmall: "button--extraSmall",
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
        size={size === "extraSmall" ? "extraSmall" : "small"}
        color={
          disabled
          ? "rgba(var(--interactable-shade-1-hover))"
          : color === "default"
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

  let button = onClick ? (
    <button
      onClick={onClick}
      className={classList.join(" ")}
      disabled={isDisabled}
      style={colorStyles}
      ref={ref}
      {...rest}
    >
      {buttonContent}
    </button>
  ) : (
    <a
      onClick={onClick}
      className={classList.join(" ")}
      style={colorStyles}
      href={href}
      {...rest}
    >
      {buttonContent}
    </a>
  );

  return button;
});

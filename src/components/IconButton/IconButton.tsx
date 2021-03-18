import React, { ButtonHTMLAttributes, FunctionComponent } from "react";
import classes from "./IconButton.module.css";
import { SvgIcon } from "../SvgIcon";
import { NumberBadge, NumberBadgePropTypes } from "../NumberBadge";

interface IconButtonProps {
  color?: string;
  size?: "extraSmall" | "small" | "medium" | "large";
  fill?: boolean;
  iconFill?: string;
  icon: string;
  popoverRef?: any;
  onClick: any;
  href?: string;
  badge?: NumberBadgePropTypes;
  iconOutline?: boolean;
  disabled?: boolean;
}

export const IconButton: FunctionComponent<
  IconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  color = "default",
  size = "medium",
  fill,
  iconFill,
  icon,
  popoverRef,
  href,
  onClick,
  badge,
  type = "button",
  iconOutline = false,
  disabled,
  ...rest
}) => {
  const buttonColorMapping = {
    none: "",
    default: "button--default",
    primary: "button--primary",
    success: "button--success",
    accent: "button--accent",
    warning: "button--warning",
    danger: "button--danger",
  };

  const buttonSizeMapping = {
    extraSmall: "button--extraSmall",
    small: "button--small",
    medium: "",
    large: "button--large",
  };

  let classList = [
    classes["icon-button"],
    color && buttonColorMapping[color]
      ? classes[buttonColorMapping[color]]
      : classes[buttonColorMapping["none"]],
    fill ? classes["button--fill"] : null,
    size
      ? classes[buttonSizeMapping[size]]
      : classes[buttonSizeMapping["medium"]],
    disabled ? classes["icon-button--isDisabled"] : null
  ];

  let badgeInstance;
  if (badge) {
    badgeInstance = <NumberBadge {...badge} />;
  }

  let bgColorStyles =
    color && !buttonColorMapping[color] && fill ? { backgroundColor: color } : null;

  let button = (
    <button
      className={classList.join(" ")}
      ref={popoverRef}
      onClick={onClick}
      type={type}
      style={bgColorStyles}
      disabled={disabled}
      {...rest}
    >
      {badgeInstance}
      <SvgIcon
        color={
          disabled
          ? "rgba(var(--interactable-shade-1-hover))"
          : iconFill
            ? iconFill
            : color != "default" && buttonColorMapping[color] && !fill
            ? `rgba(var(--${color}-color))`
            : color != "default" && buttonColorMapping[color] && fill
            ? "white"
            : color === "default" && !iconFill && !fill
            ? "rgba(var(--text-color))"
            : color && !iconFill && !fill
            ? color
            : null
        }
        icon={icon}
        outline={iconOutline}
        size={
          size && size === "extraSmall"
            ? "extraSmall"
            : size === "small"
            ? "extraSmall"
            : size && size === "medium"
            ? "small"
            : "medium"
        }
      />
    </button>
  );

  return button;
};

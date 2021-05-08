import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FunctionComponent,
  ReactNode,
} from "react";
import classes from "./IconButton.module.css";
import { SvgIcon } from "../SvgIcon";
import { NumberBadge, NumberBadgePropTypes } from "../NumberBadge";
import { CommonProps } from "../types";
import classNames from "classnames";

interface IconButtonProps extends CommonProps {
  color?: string;
  size?: "extraSmall" | "small" | "medium" | "large";
  fill?: boolean;
  iconColor?: string;
  icon: string;
  onClick: any;
  href?: string;
  badge?: NumberBadgePropTypes;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const IconButton: FunctionComponent<
  | (IconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>)
  | AnchorHTMLAttributes<HTMLAnchorElement>
> = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      color = "default",
      size = "medium",
      fill,
      iconColor,
      icon,
      href,
      onClick,
      badge,
      type = "button",
      disabled,
      className,
      ...rest
    },
    ref
  ) => {
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

    const classList = classNames(
      classes["icon-button"],
      color && buttonColorMapping[color]
        ? classes[buttonColorMapping[color]]
        : classes[buttonColorMapping["none"]],
      fill ? classes["button--fill"] : null,
      size
        ? classes[buttonSizeMapping[size]]
        : classes[buttonSizeMapping["medium"]],
      disabled ? classes["icon-button--isDisabled"] : null,
      className
    );

    let badgeInstance: ReactNode;
    if (badge) {
      badgeInstance = <NumberBadge {...badge} />;
    }

    let bgColorStyles =
      color && !buttonColorMapping[color] && fill
        ? { backgroundColor: color }
        : null;

    let buttonContent = (
      <React.Fragment>
        {badgeInstance}
        <SvgIcon
          color={
            disabled
              ? "rgba(var(--interactable-shade-1-hover))"
              : iconColor
              ? iconColor
              : color != "default" && buttonColorMapping[color] && !fill
              ? `rgba(var(--${color}-color))`
              : color != "default" && buttonColorMapping[color] && fill
              ? "white"
              : color === "default" && !iconColor && !fill
              ? "rgba(var(--text-color))"
              : color && !iconColor && !fill
              ? color
              : null
          }
          icon={icon}
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
      </React.Fragment>
    );

    let button = href ? (
      <a
        className={classList}
        onClick={onClick}
        type={type}
        style={bgColorStyles}
        href={href}
        {...rest}
      >
        {buttonContent}
      </a>
    ) : (
      <button
        className={classList}
        onClick={onClick}
        type={type}
        ref={ref}
        style={bgColorStyles}
        disabled={disabled}
        {...rest}
      >
        {buttonContent}
      </button>
    );

    return button;
  }
);

import classNames from "classnames";
import React, {
  FunctionComponent,
  HTMLAttributes,
  DetailedHTMLProps,
  AnchorHTMLAttributes,
  ReactNode
} from "react";
import { SvgIcon } from "../../SvgIcon";
import { CommonProps } from "../../types";
import classes from "./Chip.module.css";

export interface ChipProps extends CommonProps {
  label?: string;
  onClick?: (() => {}) | (() => void);
  color?: "primary" | "success" | "accent" | "warning" | "danger" | "default";
  href?: string;
  icon?: string;
  iconSide?: "left" | "right";
  iconOnClick?: (() => {}) | (() => void);
}

export const Chip: FunctionComponent<
  ChipProps &
    (
      | DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
      | AnchorHTMLAttributes<HTMLAnchorElement>
    )
> = React.forwardRef(
  (
    {
      className,
      label,
      onClick,
      color = "default",
      href,
      icon,
      iconSide = "right",
      iconOnClick,
      ...rest
    },
    ref
  ) => {
    const colorToClassMap = {
      primary: "Chip--colorPrimary",
      success: "Chip--colorSuccess",
      accent: "Chip--colorAccent",
      warning: "Chip--colorWarning",
      danger: "Chip--colorDanger",
      default: "Chip--colorDefault",
    };

    let isClickable = href || onClick ? true : null;

    const classList = classNames(
      classes["Chip"],
      isClickable || iconOnClick ? classes["Clickable"] : null,
      classes[colorToClassMap[color]],
      className,
    );

    let iconInstance = icon ? (
      <SvgIcon
        className={iconOnClick ? classes["IconClickable"] : null}
        style={{
          marginRight: iconSide === "left" ? 4 : null,
          marginLeft: iconSide === "right" ? 4 : null,
          cursor: iconOnClick ? "pointer" : "default",
        }}
        onClick={iconOnClick}
        size="mini"
        icon={icon}
        color={color === "default" ? "rgba(var(--text-color))" : "white"}
      />
    ) : null;

    let labelInstance: ReactNode =
      isClickable && icon && iconOnClick ? (
        <React.Fragment>
          {href ? (
            <a href={href}>{label}</a>
          ) : (
            <span className={classes["ClickableText"]} onClick={onClick}>
              {label}
            </span>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>{label}</React.Fragment>
      );

    let contentInstance: ReactNode = (
      <React.Fragment>
        {iconInstance && iconSide === "left" ? iconInstance : null}
        {labelInstance}
        {iconInstance && iconSide === "right" ? iconInstance : null}
      </React.Fragment>
    );

    let chipInstance: ReactNode =
      href && !iconOnClick ? (
        <a
          className={classList}
          href={href}
          onClick={onClick && !iconOnClick ? onClick : null}
        >
          {contentInstance}
        </a>
      ) : (
        <span
          ref={ref}
          className={classList}
          onClick={onClick && !iconOnClick ? onClick : null}
          {...rest}
        >
          {contentInstance}
        </span>
      );

    return <React.Fragment>{chipInstance}</React.Fragment>;
  }
);

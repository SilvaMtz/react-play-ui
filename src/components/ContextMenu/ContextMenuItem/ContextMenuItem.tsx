import React, { AnchorHTMLAttributes, Component, Ref, ReactNode } from "react";
import classes from "./ContextMenuItem.module.css";
import { SvgIcon } from "../../SvgIcon/SvgIcon";

export interface ContextMenuItemProps {
  icon?: string;
  iconColor?: string;
  hasPanel?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  buttonRef?: Ref<HTMLButtonElement>;
  href?: string;
  target?: string;
  rel?: string;
  label: string;
  sublabel?: string;
  sublabelColor?: string;
  size?: "extraSmall" | "small" | "medium" | "large";
  isActive?: boolean;
}

type Props = ContextMenuItemProps;

export class ContextMenuItem extends Component<Props> {
  render() {
    const {
      children,
      hasPanel,
      icon,
      iconColor,
      buttonRef,
      disabled: _disabled,
      href,
      target,
      rel,
      label,
      sublabel,
      sublabelColor = "rgba(var(--text-color-shade))",
      size = "small",
      isActive = false,
      ...rest
    } = this.props;

    const sizeToClassMap = {
      extraSmall: "extraSmall-item",
      small: "small-item",
      medium: "medium-item",
      large: "large-item",
    };

    let iconInstance: ReactNode;
    if (icon) {
      iconInstance = (
        <SvgIcon
          icon={icon}
          color={iconColor}
          size={size && sizeToClassMap[size] ? size : "medium"}
        />
      );
    }

    let arrow: ReactNode;
    if (hasPanel) {
      arrow = (
        <SvgIcon
          icon="chevronRight"
          size={size && sizeToClassMap[size] ? size : "medium"}
        />
      );
    }

    const classList = [
      classes["context-menu-item"],
      classes[sizeToClassMap[size]],
      isActive ? classes["item--isActive"] : null,
    ];

    let labelInstance: ReactNode;
    if (sublabel) {
      labelInstance = (
        <div className={classes["sublabel-label-container"]}>
          <p className={classes["label"]}>{label}</p>
          <p className={classes["sublabel"]} style={{ color: sublabelColor }}>
            {sublabel}
          </p>
        </div>
      );
    } else {
      labelInstance = <p className={classes["label"]}>{label}</p>;
    }

    const buttonInner = (
      <div className={classes["label-container"]}>
        {iconInstance}
        {labelInstance}
      </div>
    );

    let button: ReactNode;
    // <a> elements don't respect the `disabled` attribute. So if we're disabled, we'll just pretend
    // this is a button and piggyback off its disabled styles.
    if (href && !_disabled) {
      button = (
        <a
          className={classList.join(" ")}
          href={href}
          target={target}
          ref={(buttonRef as unknown) as Ref<HTMLAnchorElement>}
          {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {buttonInner}
          {arrow}
        </a>
      );
    } else {
      button = (
        <button
          disabled={_disabled}
          className={classList.join(" ")}
          type="button"
          ref={buttonRef}
          {...rest}
        >
          {buttonInner}
          {arrow}
        </button>
      );
    }

    return button;
  }
}

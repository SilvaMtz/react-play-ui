import React, {
  FunctionComponent,
  ButtonHTMLAttributes,
  ReactNode,
  HTMLAttributes,
  useCallback,
} from "react";
import classes from "./SwitchButton.module.css";
import classNames from "classnames";
import { CommonProps } from "../types";

export type SwitchEvent = React.BaseSyntheticEvent<
  React.MouseEvent<HTMLButtonElement>,
  HTMLButtonElement,
  EventTarget & {
    checked: boolean;
  }
>;

export type SwitchButtonProps = CommonProps &
  CommonProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "onChange" | "type" | "disabled"
  > & {
    label?: ReactNode | string;
    /**
     * Determines if the label is to be shown
     */
    showLabel?: boolean;
    checked: boolean;
    onChange: (event: SwitchEvent) => void;
    disabled?: boolean;
    type?: "submit" | "button" | "reset";
    /**
     * This props are passed down to the span element containing the label text
     */
    labelProps?: CommonProps & HTMLAttributes<HTMLSpanElement>;
  };

export const SwitchButton: FunctionComponent<SwitchButtonProps> = ({
  id,
  label,
  checked = false,
  disabled = false,
  showLabel = true,
  onChange,
  type,
  labelProps,
  className,
  ...rest
}) => {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement | HTMLParagraphElement>) => {
      if (disabled) {
        return;
      }

      const event = (e as unknown) as SwitchEvent;
      event.target.checked = !checked;
      onChange(event);
    },
    [checked, disabled, onChange]
  );

  const classList = classNames(
    classes["SwitchButton--wrapper"],
    disabled ? classes["disabled"] : null,
    className
  );

  const labelClasses = classNames(
    classes["SwitchButton--label"],
    labelProps?.className
  );

  const labelInstance = (
    <span
      {...labelProps}
      className={labelClasses}
      id={labelProps?.id}
      onClick={handleClick}
    >
      {label}
    </span>
  );
  if (showLabel === false && typeof label !== "string") {
    console.warn(
      "SwitchButton `label` must be a string when `showLabel` is false."
    );
  }

  return (
    <div className={classList}>
      <button
        id={id}
        aria-checked={checked || false}
        className={classes["SwitchButton--button"]}
        role="switch"
        type={type}
        disabled={disabled}
        onClick={handleClick}
        aria-label={showLabel ? null : (label as string)}
        aria-labelledby={showLabel ? labelProps?.id : null}
        {...rest}
      >
        <span className={classes["SwitchButton--body"]}>
          <span className={classes["SwitchButton--circle"]} />
        </span>
      </button>
      {showLabel ? labelInstance : null}
    </div>
  );
};

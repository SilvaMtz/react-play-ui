import React, {
  FunctionComponent,
  InputHTMLAttributes,
  ChangeEventHandler,
  HTMLAttributes,
} from "react";
import { CommonProps } from "../types";
import classes from "./Checkbox.module.css";

export interface CheckboxProps extends CommonProps {
  value: any;
  label: string;
  checked: boolean;
  id: string;
  onChange?: ChangeEventHandler<any>;
  disabled?: boolean;
  indeterminate?: boolean;
}

export const Checkbox: FunctionComponent<
  CheckboxProps & InputHTMLAttributes<HTMLInputElement>
> = ({
  value,
  label,
  checked = false,
  id,
  onChange,
  disabled = false,
  indeterminate = false,
  className,
  ...rest
}) => {
  const classList = [classes["Checkbox--wrapper"], className];
  const checkboxClassList = [
    classes["Checkbox--display"],
    checked || indeterminate ? classes["Checkbox--displayChecked"] : null,
    disabled ? classes["disabled"] : null,
  ];
  const labelClassList = [
    classes["Checkbox--label"],
    disabled ? classes["disabled"] : null,
  ];

  return (
    <span className={classList.join(" ")}>
      <input
        className={classes["Checkbox"]}
        type="checkbox"
        value={value}
        checked={checked || indeterminate}
        id={id}
        onChange={onChange}
        disabled={disabled}
        {...(rest as Omit<HTMLAttributes<HTMLInputElement>, "className">)}
      />
      <div className={checkboxClassList.join(" ")} onClick={onChange}>
        {checked ? (
          <div className={classes["Checkbox--tick"]} />
        ) : indeterminate ? (
          <div className={classes["Checkbox--indeterminateTick"]} />
        ) : null}
      </div>
      <label className={labelClassList.join(" ")} htmlFor={id}>
        {label}
      </label>
    </span>
  );
};

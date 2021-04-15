import React, {
  ChangeEventHandler,
  FunctionComponent,
  HTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from "react";
import { CommonProps, ExclusiveUnion } from "../types";
import classNames from "classnames";
import classes from "./RadioButton.module.css";

export interface RadioButtonProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  name?: string;
  labelProps?: CommonProps & LabelHTMLAttributes<HTMLLabelElement>;
}

export interface LabelPropTypes {
  id?: string;
  label?: ReactNode;
}

export interface IdPropTypes {
  id?: string;
}

export type RadioButtonType = CommonProps &
  Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "id"> &
  ExclusiveUnion<ExclusiveUnion<RadioButtonProps, LabelPropTypes>, IdPropTypes>;

export const RadioButton: FunctionComponent<RadioButtonType> = ({
  checked = false,
  disabled = false,
  onChange,
  value,
  name,
  labelProps,
  label,
  id,
  className,
  ...rest
}) => {
  const classList = classNames(classes["RadioButton--wrapper"], className);

  let labelClassList = classNames(
    classes["RadioButton--label"],
    disabled ? classes["disabled"] : null,
    labelProps?.className
  );

  let radioClassList = classNames(
    classes["RadioButton--display"],
    checked ? classes["RadioButton--displayChecked"] : null,
    disabled ? classes["disabled"] : null
  );

  let labelInstance = label ? (
    <label {...labelProps} className={labelClassList} htmlFor={id}>
      {label}
    </label>
  ) : null;

  return (
    <div className={classList} {...rest} onClick={() => onChange}>
      <div className={radioClassList}>
        {checked ? <div className={classes["RadioButton--check"]} /> : null}
      </div>
      <input
        id={id}
        name={name}
        type="radio"
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className={classes["RadioButton--input"]}
      />
      {labelInstance}
    </div>
  );
};

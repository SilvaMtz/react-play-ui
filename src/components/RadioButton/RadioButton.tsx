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

export interface RadioProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  name?: string;
  labelProps?: CommonProps & LabelHTMLAttributes<HTMLLabelElement>;
}

interface idWithLabel extends RadioProps{
  label: ReactNode;
  id: string;
}

interface withId extends RadioProps {
  id: string;
}

export type RadioButtonProps = CommonProps &
  Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "id"> &
  ExclusiveUnion<ExclusiveUnion<RadioProps, idWithLabel>, withId>;

export const RadioButton: FunctionComponent<RadioButtonProps> = ({
  id,
  checked,
  disabled,
  onChange,
  value,
  name,
  labelProps,
  label,
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

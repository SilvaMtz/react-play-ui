import React, { ChangeEventHandler, FunctionComponent, TextareaHTMLAttributes, useEffect } from "react";
import classes from "./TextField.module.css";
import { FlexGroup } from "../FlexGroup";
import { FlexItem } from "../FlexItem";

export interface TextFieldProps {
  label?: string;
  disabled?: boolean;
  maxLength?: number;
  value?: string | number;
  isValid?: boolean;
  minLength?: number;
  required?: boolean;
  isTouched?: boolean;
  resizable?: boolean;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
}

export const TextField: FunctionComponent<
  TextFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({
  label,
  disabled = false,
  maxLength,
  value,
  isValid,
  minLength,
  required,
  isTouched,
  className,
  resizable = true,
  onChange,
  ...rest
}) => {
  const inputLabel = label ? <label className={classes["textarea-label"]}>{label}</label> : null;

  let fieldIsValid: boolean;
  if (isValid) {
    fieldIsValid = isValid;
  } else {
    if (minLength && !maxLength) {
      fieldIsValid = minLength <= value.toString().length;
    } else if (maxLength && !minLength) {
      fieldIsValid = maxLength >= value.toString().length;
    } else if (maxLength && minLength) {
      fieldIsValid =
        minLength <= value.toString().length &&
        maxLength >= value.toString().length;
    } else {
      fieldIsValid = false;
    }
  }

  let lengthLabel;
  if (maxLength) {
    lengthLabel = (
      <FlexGroup gutterSize="none" justifyContent="flexEnd">
        <FlexItem grow={false}>
          <p className={classes["length-label"]}>
            {value.toString().length}/{maxLength}
          </p>
        </FlexItem>
      </FlexGroup>
    );
  }

  let wrapperClassList = [
    classes["textarea-wrapper"],
    disabled ? classes["wrapper--disabled"] : null,
    label ? classes["textarea--hasLabel"] : null,
    className,
  ];

  let textareaClassList = [
    classes["textarea"],
    fieldIsValid ? classes["textarea--isValid"] : null,
    !fieldIsValid && isTouched ? classes["textarea--isInvalid"] : null,
    resizable ? classes["textarea--resizable"] : null
  ];

  return (
    <div className={wrapperClassList.join(' ')}>
      {inputLabel}
      <textarea
        className={textareaClassList.join(' ')}
        {...rest}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
      {lengthLabel}
    </div>
  )

};

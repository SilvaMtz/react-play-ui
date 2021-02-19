import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import classes from './InputField.module.css';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { FlexItem } from '../FlexItem';
import { FlexGroup } from '../FlexGroup';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  icon?: string;
  disabled?: boolean
  maxLength?: number;
  value?: string | number;
  isValid?: boolean;
  minLength?: number;
  required?: boolean;
  isTouched?: boolean;
}

export const InputField: FunctionComponent<InputProps> = ({
  label,
  icon,
  disabled = false,
  maxLength,
  minLength,
  isValid,
  value,
  className,
  required,
  isTouched,
  ...rest
}) => {

  let inputLabel = null;

  if (label) {
    inputLabel = (
      <label className={classes['input-label']}>{label}</label>
    );
  }

  let fieldIsValid;
  if (isValid) {
    fieldIsValid = isValid;
  } else {
    if (minLength && !maxLength) {
      fieldIsValid = minLength <= value.toString().length;
    } else if (maxLength && !minLength) {
      fieldIsValid = maxLength >= value.toString().length;
    } else if (maxLength && minLength){
      fieldIsValid = minLength <= value.toString().length && maxLength >= value.toString().length;
    } else {
      fieldIsValid = false;
    }
  }

  let svgIcon = null;
  if (icon) {
    svgIcon = (
      <SvgIcon
        className={classes['input-icon']}
        icon={icon}
        color="rgba(var(--text-color-shade))"
        size="small"
      />
    );
  }

  let statusIcon = null;
  if (fieldIsValid) {
    statusIcon = (
      <SvgIcon
        className={classes['inputValid-icon']}
        icon="check"
        color="rgb(var(--secondary-color))"
        size="small"
      />
    );
  } else if (!fieldIsValid && isTouched) {
    statusIcon = (
      <SvgIcon
        className={classes['inputValid-icon']}
        icon="xCircle"
        color="rgb(var(--danger-color))"
        size="small"
      />
    );
  }

  let lengthLabel;
  if (maxLength) {
    lengthLabel = (
      <FlexGroup gutterSize="none" justifyContent="flexEnd">
        <FlexItem grow={false}>
          <p className={classes['length-label']}>{value.toString().length}/{maxLength}</p>
        </FlexItem>
      </FlexGroup>
    )
  }

  let wrapperClassList = [
    classes['input-wrapper'],
    disabled ? classes['wrapper--disabled'] : null,
    label ? classes['input--hasLabel'] : null,
    className
  ];

  let inputClassList = [
    classes['input'],
    icon ? classes['input--hasIcon'] : null,
    fieldIsValid ? classes['input--isValid'] : null,
    !fieldIsValid && isTouched ? classes['input--isInvalid'] : null,
    statusIcon ? classes['input--hasStatusIcon'] : null
  ];

  return (
    <div className={wrapperClassList.join(' ')}>
      {inputLabel}
      {svgIcon}
      {statusIcon}
      <input
        disabled={disabled}
        className={inputClassList.join(' ')}
        {...rest}
      />
      {lengthLabel}
    </div>
  );
};
import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import classes from './InputField.module.css';
import { SvgIcon } from '../SvgIcon/SvgIcon';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  icon?: string;
}

export const InputField: FunctionComponent<InputProps> = ({
  label,
  icon,
  ...rest
}) => {
  let wrapperClassList = [
    classes['input-wrapper'],
    icon ? classes['wrapper--hasIcon'] : null,
  ];

  let inputClassList = [
    classes['input'],
    icon ? classes['input--hasIcon'] : null,
  ];

  let inputLabel = null;

  if (label) {
    inputLabel = (
      <label className={classes['input-label']}>{label}</label>
    );
  }

  let svgIcon = null;
  if (icon) {
    svgIcon = (
      <SvgIcon
        className={classes['input-icon']}
        icon={icon}
        color="var(--text-color-shade)"
        size="small"
      />
    );
  }

  return (
    <div className={wrapperClassList.join(' ')}>
      {inputLabel}
      {svgIcon}
      <input
        className={inputClassList.join(' ')}
        {...rest}
      />
    </div>
  );
};
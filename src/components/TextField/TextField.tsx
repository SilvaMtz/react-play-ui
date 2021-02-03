import React, { FunctionComponent, TextareaHTMLAttributes } from 'react';
import classes from './TextField.module.css';

export type TextFieldType = TextareaHTMLAttributes<HTMLTextAreaElement>

export const TextField: FunctionComponent<TextFieldType> = ({
  ...rest
}) => {
  let classList = [classes.textarea];

  return (
    <textarea
      className={classList.join(' ')}
      {...rest}
    />
  );
};
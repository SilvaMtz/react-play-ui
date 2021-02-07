import React, { FormHTMLAttributes, FunctionComponent } from 'react';
import classes from './FormFields.module.css';

export const FormFields: FunctionComponent<FormHTMLAttributes<HTMLFormElement>> = ({ children, ...rest }) => {

  return (
    <form className={classes['form']} {...rest}>
      {children}
    </form>
  );
}
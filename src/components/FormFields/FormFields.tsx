import React, { FunctionComponent } from 'react';
import classes from './FormFields.module.css';

export const FormFields: FunctionComponent = ({ children, ...rest }) => {

  return (
    <form className={classes['form']} {...rest}>
      {children}
    </form>
  );
}
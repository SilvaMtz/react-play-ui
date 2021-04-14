import React, { FormHTMLAttributes, FunctionComponent } from "react";
import classNames from "classnames";
import { CommonProps } from "../types";
import classes from "./FormFields.module.css";

export type FormFieldsProps = CommonProps & FormHTMLAttributes<HTMLFormElement>;

export const FormFields: FunctionComponent<FormFieldsProps> = ({
  className,
  children,
  ...rest
}) => {
  const classList = classNames(classes["form"], className);

  return (
    <form className={classList} {...rest}>
      {children}
    </form>
  );
};

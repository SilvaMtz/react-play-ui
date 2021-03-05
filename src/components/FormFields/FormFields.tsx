import React, { FormHTMLAttributes, FunctionComponent } from "react";
import classes from "./FormFields.module.css";

export interface FormFieldsProps {
  className?: string;
}

export const FormFields: FunctionComponent<
  FormFieldsProps & FormHTMLAttributes<HTMLFormElement>
> = ({ className, children, ...rest }) => {
  let classList = [classes["form"], className];

  return (
    <form className={classList.join(" ")} {...rest}>
      {children}
    </form>
  );
};

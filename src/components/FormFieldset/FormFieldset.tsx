import React, { FunctionComponent, ReactNode, HTMLAttributes } from "react";
import { FormLegend, FormLegendProps } from "./FormLegend/FormLegend";
import classNames from "classnames";
import classes from "./FormFieldset.module.css";

export interface FormFieldsetProps {
  children?: ReactNode;
  stretch?: boolean;
  className?: string;
  legend?: FormLegendProps;
}

export const FormFieldset: FunctionComponent<
  FormFieldsetProps & HTMLAttributes<HTMLFieldSetElement>
> = ({ children, className, legend, stretch = true, ...rest }) => {
  const legendInstance = !!legend && <FormLegend {...legend} />;
  const classList = classNames(
    classes["FormFieldset"],
    stretch ? classes["stretch"] : null,
    className
  );
  return (
    <fieldset className={classList} {...rest}>
      {legendInstance}
      {children}
    </fieldset>
  );
};

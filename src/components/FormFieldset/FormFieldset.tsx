import React, { FunctionComponent, ReactNode, HTMLAttributes } from "react";
import { FormLegend, FormLegendProps } from "./FormLegend/FormLegend";

export interface FormFieldsetProps {
  children?: ReactNode;
  className?: string;
  legend?: FormLegendProps;
}

export const FormFieldset: FunctionComponent<
  FormFieldsetProps & HTMLAttributes<HTMLFieldSetElement>
> = ({ children, className, legend, ...rest }) => {
  const legendInstance = !!legend && <FormLegend {...legend} />;

  return (
    <fieldset className={className} {...rest}>
      {legendInstance}
      {children}
    </fieldset>
  );
};

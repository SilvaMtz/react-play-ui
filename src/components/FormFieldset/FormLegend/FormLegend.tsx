import React, { FunctionComponent, ReactNode } from 'react';
import classes from './FormLegend.module.css';

export interface FormLegendProps {
  children?: ReactNode;
  display?: "hidden" | "visible"
  className?: string;
}

export const FormLegend: FunctionComponent<FormLegendProps> = ({
  children,
  display = "visible",
  className,
  ...rest
}) => {

  const classList = [
    classes['FormLegend'],
    display === "hidden" ? classes['FormLegend--hidden'] : null,
    className
  ]

  return (
    <legend className={classList.join(" ")} {...rest}>
      {children}
    </legend>
  )
}
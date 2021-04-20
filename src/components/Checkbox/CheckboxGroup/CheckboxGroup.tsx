import React, { FunctionComponent, HTMLAttributes } from 'react';
import classes from './CheckboxGroup.module.css';
import { Checkbox, CheckboxProps } from '../Checkbox';
import { FormFieldset, FormFieldsetProps } from '../../FormFieldset';
import { FormLegendProps } from '../../FormFieldset/FormLegend/FormLegend';
import { CommonProps, ExclusiveUnion } from '../../types';

export interface CheckboxGroupOption
  extends Omit<CheckboxProps, 'checked' | 'onChange'> {
  id: string;
}

export interface CheckboxGroupIdToSelectedMap {
  [id: string]: boolean;
}

type AsDivProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;
type WithLegendProps = Omit<FormFieldsetProps, 'onChange'> & {
  /**
   * If the individual labels for each radio do not provide a sufficient description, add a legend.
   * Wraps the group in a `FormFieldset` which adds an `FormLegend` for titling the whole group.
   * Accepts an `FormLegendProps` shape.
   */
  legend?: FormLegendProps;
};

export type CheckboxGroupProps = CommonProps & {
  options: CheckboxGroupOption[];
  idToSelectedMap: CheckboxGroupIdToSelectedMap;
  onChange: (optionId: string) => void;
  disabled?: boolean;
} & ExclusiveUnion<AsDivProps, WithLegendProps>;

export const CheckboxGroup: FunctionComponent<CheckboxGroupProps> = ({
  options = [],
  idToSelectedMap = {},
  onChange,
  className,
  disabled,
  legend,
  ...rest
}) => {

  const checkboxes = options.map((option, index) => {
    const {
      className: optionClass,
      disabled: isOptionDisabled,
      ...optionRest
    } = option
    return (
      <Checkbox
        key={index}
        className={[classes['CheckboxGroup--option'], optionClass].join(" ")}
        checked={idToSelectedMap[option.id]}
        disabled={disabled || isOptionDisabled}
        onChange={onChange.bind(null, option.id)}
        {...optionRest}
      />
    )
  })

  if (!!legend) {
    return (
      <FormFieldset
        legend={legend}
        className={className}
        {...(rest as FormFieldsetProps)}
      >
        {checkboxes}
      </FormFieldset>
    )
  }

  return (
    <div
      className={className}
      {...(rest as HTMLAttributes<HTMLDivElement>)}
    >
      {checkboxes}
    </div>
  );
}
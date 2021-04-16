import React, { FunctionComponent, HTMLAttributes } from 'react';
import { FormFieldset, FormFieldsetProps, FormLegendProps } from '../../FormFieldset';
import { RadioButton, RadioButtonProps } from '../index'
import { CommonProps, ExclusiveUnion } from '../../types';
import classes from './RadioGroup.module.css';
import classNames from 'classnames';

export interface RadioGroupOption
  extends Omit<RadioButtonProps, 'checked' | 'onChange'> {
  id: string;
}

export type RadioGroupChangeCallback = (id: string, value?: string) => void;

type AsDivProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;
type WithLegendProps = Omit<FormFieldsetProps, 'onChange'> & {
  legend?: FormLegendProps;
};

export type RadioGroupProps = CommonProps & {
  disabled?: boolean;
  name?: string;
  options: RadioGroupOption[];
  idSelected?: string;
  onChange: RadioGroupChangeCallback;
} & ExclusiveUnion<AsDivProps, WithLegendProps>;

export const RadioGroup: FunctionComponent<RadioGroupProps> = ({
  options = [],
  idSelected,
  disabled = false,
  onChange,
  name,
  legend,
  className,
  ...rest
}) => {

  const radioOptions = options.map((option, index) => {
    const {
      disabled: isOptionDisabled,
      className: optionClass,
      id,
      label,
      ...optionRest
    } = option;
    return (
      <RadioButton
        id={id}
        className={classNames(classes['RadioGroup--option'], optionClass)}
        key={index}
        name={name}
        checked={id === idSelected}
        disabled={disabled || isOptionDisabled}
        onChange={onChange.bind(null, id, option.value)}
        label={label}
        {...optionRest}
      />
    );
  });

  if (!!legend) {
    return (
      <FormFieldset
        className={className}
        legend={legend}
        {...(rest as FormFieldsetProps)}>
        {radioOptions}
      </FormFieldset>
    );
  }

  return (
    <div className={className} {...(rest as HTMLAttributes<HTMLDivElement>)}>
      {radioOptions}
    </div>
  )
}
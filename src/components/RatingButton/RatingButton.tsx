import React, { FunctionComponent, ReactNode, Fragment, HTMLAttributes } from 'react';
import classes from './RatingButton.module.css';
import classNames from 'classnames';
import { CommonProps } from '../types';
import { SvgIcon } from '../SvgIcon';


export type RatingButtonWrapperType = CommonProps & Omit<HTMLAttributes<HTMLDivElement>, 'onClick' | 'value' | 'label'>

export interface RatingButtonInterface extends RatingButtonWrapperType {
  label?: string;
  color?: string;
  value: number;
  icon?: string;
  onClick: (newValue: number, ...options: any) => void;
  onClickOptions?: any;
}

export const RatingButton: FunctionComponent<RatingButtonInterface> = ({
  label,
  value,
  color = 'primary',
  onClick,
  icon,
  className,
  title,
  onClickOptions = null,
  ...rest
}) => {
  const colorToClassMap = {
    primary: 'Dot--primaryColor',
    accent: 'Dot--accentColor',
    success: 'Dot--successColor',
    warning: 'Dot--warningColor',
    danger: 'Dot--dangerColor',
  };

  const classList = classNames(classes['RatingButton'], className);

  const skillDots = [];
  for (let i = 0; i < 10; i++) {
    skillDots.push(i);
  }

  const handleRateClick = (newValue: number, ...options: any) => {
    onClick(newValue + 1, ...options);
  };

  let clickables: ReactNode;
  if (icon) {
    clickables = (
      <Fragment>
        {skillDots.map((i) => {
          const skillClass = classNames(
            classes['Skillbar--Icon'],
            classes['Skillbar--IconClickable'],
            color && colorToClassMap[color]
              ? classes[colorToClassMap[color]]
              : null,
            i + 1 <= value ? classes['Icon--Fill'] : null
          );
          return (
            <SvgIcon
              icon={icon}
              size="small"
              onClick={() => handleRateClick(i, onClickOptions)}
              key={i}
              className={skillClass}
            />
          );
        })}
      </Fragment>
    );
  } else {
    clickables = (
      <Fragment>
        {skillDots.map((i) => {
          const skillClass = classNames(
            classes['Skillbar--dot'],
            classes['Skillbar--Clickable'],
            color && colorToClassMap[color]
              ? classes[colorToClassMap[color]]
              : null,
            i + 1 <= value ? classes['Dot--Fill'] : null
          );
          return (
            <div
              onClick={() => handleRateClick(i, onClickOptions)}
              key={i}
              className={skillClass}
            />
          );
        })}
      </Fragment>
    );
  }

  return (
    <div className={classList} {...rest} title={title}>
      {label ? <h6 className={classes['Label']}>{label}</h6> : null}
      <div className={classes['Skillbar--container']}>{clickables}</div>
    </div>
  );
};

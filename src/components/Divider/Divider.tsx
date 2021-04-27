import classNames from 'classnames';
import React, { FunctionComponent, HTMLAttributes } from 'react';
import { CommonProps } from '../types';
import classes from './Divider.module.css';

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  size?: "small" | "medium" | "large" | "full";
  marginSize?: "none" | "small" | "medium" | "large" | "full";
}

export const Divider: FunctionComponent<DividerProps & CommonProps> = ({
  size = "large",
  marginSize = "large",
  className,
  ...rest
}) => {

  const dividerSizeMap = {
    small: 'divider--small',
    medium: 'divider--medium',
    large: 'divider--large',
    full: 'divider--full',
  }

  const dividerMarginMap = {
    none: 'margin--none',
    small: 'margin--small',
    medium: 'margin--medium',
    large: 'margin--large',
    extraLarge: 'margin--extraLarge',
  }

  const classList = classNames(
    classes['divider'],
    size
      ? classes[dividerSizeMap[size]]
      : classes[dividerSizeMap['large']],
    marginSize
      ? classes[dividerMarginMap[marginSize]]
      : classes[dividerMarginMap['large']],
    className
  );

  return <hr className={classList} {...rest} />;
};
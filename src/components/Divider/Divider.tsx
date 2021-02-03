import React, { FunctionComponent } from 'react';
import classes from './Divider.module.css';

interface DividerProps {
  size?: string;
  marginSize?: string;
}

export const Divider: FunctionComponent<DividerProps> = ({
  size = "large",
  marginSize = "large"
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
    full: 'margin--full',
  }

  let classList = [
    classes['divider'],
    size
      ? classes[dividerSizeMap[size]]
      : classes[dividerSizeMap['large']],
    marginSize
      ? classes[dividerMarginMap[marginSize]]
      : classes[dividerMarginMap['large']],
  ];

  return <hr className={classList.join(' ')} />;
};
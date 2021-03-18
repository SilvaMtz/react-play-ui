import React, { ReactNode, FunctionComponent, HTMLAttributes } from 'react';
import { FlexGroup } from '../FlexGroup';
import { FlexGroupProps } from '../FlexGroup/FlexGroup';
import { FlexItem } from '../FlexItem';
import classes from './PanelCard.module.css';

interface PanelCardProps {
  children?: ReactNode;
  paddingSize?: string;
  maxWidth?: number | string;
  className?: string;
  hasShadow?: boolean
}

export const PanelCard: FunctionComponent<PanelCardProps & FlexGroupProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  paddingSize = "small",
  direction = "column",
  maxWidth,
  className,
  hasShadow = true,
  style,
  ...rest
}) => {
  const panelPaddingSizeMap = {
    none: 'panelPadding--none',
    small: 'panelPadding--small',
    medium: 'panelPadding--medium',
    large: 'panelPadding--large',
  };

  let classList = [
    classes['panel-card'],
    paddingSize
      ? classes[panelPaddingSizeMap[paddingSize]]
      : classes[panelPaddingSizeMap['medium']],
    hasShadow
      ? classes['panel-card--hasShadow']
      : null,
    className
  ];

  let defaultStyles = {
    maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px`
      : typeof maxWidth === 'string' ? maxWidth : null,
    width: maxWidth ? maxWidth : null,
  };

  return (
      <div
        className={classList.join(' ')}
        style={{...defaultStyles, ...style}}
        {...rest}
      >
        {children}
      </div>
  );
};
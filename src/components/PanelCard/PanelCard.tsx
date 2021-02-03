import React, { ReactNode, FunctionComponent } from 'react';
import classes from './PanelCard.module.css';

interface PanelCardProps {
  children?: ReactNode;
  paddingSize?: string;
  flexDirection?: string;
  maxWidth?: any
}

export const PanelCard: FunctionComponent<PanelCardProps> = ({
  children,
  paddingSize = "small",
  flexDirection = "column",
  maxWidth,
  ...rest
}) => {
  const panelPaddingSizeMap = {
    none: 'panelPadding--none',
    small: 'panelPadding--small',
    medium: 'panelPadding--medium',
    large: 'panelPadding--large',
  };

  const flexDirectionMapping = {
    row: 'flex-row',
    column: 'flex-column',
  };

  let classList = [
    classes['panel-card'],
    paddingSize
      ? classes[panelPaddingSizeMap[paddingSize]]
      : classes[panelPaddingSizeMap['medium']],
    flexDirection
      ? classes[flexDirectionMapping[flexDirection]]
      : classes[flexDirectionMapping['row']],
  ];

  let panelStyles = {
    maxWidth: maxWidth ? maxWidth : null,
  };

  return (
    <div
      className={classList.join(' ')}
      style={panelStyles}
      {...rest}
    >
      {children}
    </div>
  );
};
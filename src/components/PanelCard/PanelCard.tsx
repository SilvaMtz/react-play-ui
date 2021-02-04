import React, { ReactNode, FunctionComponent, HTMLAttributes } from 'react';
import classes from './PanelCard.module.css';

interface PanelCardProps {
  children?: ReactNode;
  paddingSize?: string;
  flexDirection?: string;
  maxWidth?: number | string;
  className?: string;
}

export const PanelCard: FunctionComponent<PanelCardProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  paddingSize = "small",
  flexDirection = "column",
  maxWidth,
  className,
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
    className
  ];

  let panelStyles = {
    maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px`
      : typeof maxWidth === 'string' ? maxWidth : null,
    width: maxWidth ? maxWidth : null
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
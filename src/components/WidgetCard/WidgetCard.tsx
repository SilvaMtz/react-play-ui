import React, { FunctionComponent, ReactNode } from 'react';
import classes from './WidgetCard.module.css';

interface WidgetCardProps {
  children?: ReactNode;
  color?: string;
}

export const WidgetCard: FunctionComponent<WidgetCardProps & HTMLDivElement> = ({
  children,
  color = "secondary",
  ...rest
}) => {

  const colorToClassStyleMap = {
    primary: "widget--colorPrimary",
    danger: "widget--colorDanger",
    warning: "widget--colorWarning",
    secondary: "widget--colorSecondary",
    accent: "widget--colorAccent",
  }

  let colorStyle;

  if (!colorToClassStyleMap[color]) {
    colorStyle= { backgroundColor: color }
  }

  let classList = [
    classes['widget-card'],
    !colorStyle ? classes[colorToClassStyleMap[color]] : null
  ]

  return (
    <div className={classList.join(' ')} style={colorStyle}>
      {children}
    </div>
  )
}
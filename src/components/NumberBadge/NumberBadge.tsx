import React, { FunctionComponent } from 'react';
import classes from './NumberBadge.module.css';

export type NumberBadgeAnchorPointPropTypes = {
  vertical?: "top" | "bottom";
  horizontal?: "left" | "right";
}

export type NumberBadgePropTypes = {
  value?: number;
  max?: number
  color?: string;
  anchorPoint?: NumberBadgeAnchorPointPropTypes;
}

export const NumberBadge: FunctionComponent<NumberBadgePropTypes> = ({
  value,
  max,
  color = "danger",
  anchorPoint = { vertical: "top", horizontal: "right" }
}) => {

  const colorToClassStyleMap = {
    primary: "badge--colorPrimary",
    danger: "badge--colorDanger",
    warning: "badge--colorWarning",
    secondary: "badge--colorSecondary",
    accent: "badge--colorAccent",
  };



  let colorStyle;

  // TODO: custom color on hover opacity
  if (!colorToClassStyleMap[color]) {
    colorStyle = { backgroundColor: color }
  }

  let valueInstance;
  if (value && value < max) {
    valueInstance = value;
  } else if (value > max) {
    valueInstance = `${max}+`;
  }

  let classList = [
    classes['number-badge'],
    !value ? classes['dot-badge'] : null,
    !colorStyle ? classes[colorToClassStyleMap[color]] : null,
    anchorPoint.horizontal ? classes[`badge--${anchorPoint.horizontal}`] : null,
    anchorPoint.vertical ? classes[`badge--${anchorPoint.vertical}`] : null,
    valueInstance && valueInstance.toString().length > 1 ? classes['badge--contentPadding'] : null,
  ]

  return (
    <div className={classList.join(' ')}>
      {valueInstance}
    </div>
  )
}
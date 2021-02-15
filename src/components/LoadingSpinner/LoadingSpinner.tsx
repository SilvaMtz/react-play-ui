import React, { FunctionComponent, HTMLAttributes } from 'react';
import classes from './LoadingSpinner.module.css';

interface LoadingSpinnerProps {
  color?: "primary" | "secondary" | "accent" | "warning" | "danger" | "default";
}

export const LoadingSpinner: FunctionComponent<LoadingSpinnerProps & HTMLAttributes<HTMLDivElement>> = ({
  color = "primary",
  ...rest
}) => {


  const colorToClassStyleMap = {
    primary: "spinner--colorPrimary",
    danger: "spinner--colorDanger",
    warning: "spinner--colorWarning",
    secondary: "spinner--colorSecondary",
    accent: "spinner--colorAccent",
    default: "spinner--colorDefault",
  };

  let classList = [
    classes['sk-chase'],
    colorToClassStyleMap[color] ? classes[colorToClassStyleMap[color]] : null
  ]

  return (
    <div className={classList.join(' ')} {...rest}>
      <div className={classes['sk-chase-dot']}></div>
      <div className={classes['sk-chase-dot']}></div>
      <div className={classes['sk-chase-dot']}></div>
      <div className={classes['sk-chase-dot']}></div>
      <div className={classes['sk-chase-dot']}></div>
      <div className={classes['sk-chase-dot']}></div>
    </div>
  )
}
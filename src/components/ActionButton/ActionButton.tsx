import React, { FunctionComponent, ReactNode } from 'react';
import { SvgIcon } from '../SvgIcon';
import classes from './ActionButton.module.css';

interface ActionButtonProps {
  children?: ReactNode;
  color?: string;
  size?: string;
  fill?: boolean;
  isLoading?: boolean;
  restrainWidth?: boolean;
  icon?: string;
  label?: string;
  href?: string;
  onClick: any;
}

export const ActionButton: FunctionComponent<ActionButtonProps> = ({
  children,
  color = 'default',
  size = 'default',
  fill = true,
  isLoading,
  restrainWidth = true,
  icon,
  label,
  href,
  onClick,
  ...rest
}) => {
  const buttonColorMapping = {
    none: '',
    default: 'button--default',
    primary: 'button--primary',
    danger: 'button--danger',
  };

  const buttonSizeMapping = {
    compact: 'button--compact',
    default: '',
    medium: 'button--medium',
    large: 'button--large'
  }

  let classList = [
    classes['action-button'],
    color
      ? classes[buttonColorMapping[color]]
      : classes[buttonColorMapping['none']],
    fill ? classes['fill'] : null,
    size
      ? classes[buttonSizeMapping[size]]
      : classes[buttonSizeMapping['default']],
    restrainWidth ? classes['restrain-width'] : null
  ];

  let iconInstance = null;
  if (icon && !isLoading) {
    iconInstance = <SvgIcon icon={icon} size="small" color="white" />
  }

  let button = (
    <button
      onClick={onClick}
      className={classList.join(' ')}
      type="button"
      {...rest}
    >
      {children ? children : label}
      {iconInstance}
    </button>
  );

  if (href) {
    button = (
      <a className={classList.join(' ')} href={href} type="button">
        {children ? children : label}
        {iconInstance}
      </a>
    );
  }

  return button;
};

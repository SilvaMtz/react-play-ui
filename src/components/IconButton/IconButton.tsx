import React, { FunctionComponent } from 'react';
import classes from './IconButton.module.css';
import { SvgIcon } from '../SvgIcon';
import { NumberBadge, NumberBadgePropTypes } from '../NumberBadge';

interface IconButtonProps {
  color?: string;
  size?: "extraSmall" | "small" | "medium" | "large";
  fill?: boolean;
  iconFill?: string;
  icon: string;
  popoverRef?: any;
  onClick: any;
  href?: string;
  badge?: NumberBadgePropTypes;
}

export const IconButton: FunctionComponent<IconButtonProps> = ({
  color = 'default',
  size = 'medium',
  fill,
  iconFill,
  icon,
  popoverRef,
  href,
  onClick,
  badge,
  ...rest
}) => {
  const buttonColorMapping = {
    none: '',
    default: 'button--default',
    primary: 'button--primary',
    danger: 'button--danger',
  };

  const buttonSizeMapping = {
    medium: '',
    large: 'button--large',
  };

  let classList = [
    classes['icon-button'],
    color
      ? classes[buttonColorMapping[color]]
      : classes[buttonColorMapping['none']],
    fill ? classes['fill'] : null,
    size
      ? classes[buttonSizeMapping[size]]
      : classes[buttonSizeMapping['medium']],
  ];

  let badgeInstance;
  if (badge) {
    badgeInstance = <NumberBadge {...badge} />
  }

  let button = (
    <button
      className={classList.join(' ')}
      type="button"
      ref={popoverRef}
      onClick={onClick}
      {...rest}
    >
      {badgeInstance}
      <SvgIcon color={iconFill} icon={icon} size={size ? size : 'medium'} />
    </button>
  );

  if (href) {
    button = (
      <a className={classList.join(' ')} ref={popoverRef} href={href} type="button" {...rest}>
        {badgeInstance}
        <SvgIcon icon={icon} size={size ? size : 'medium'} />
      </a>
    );
  }

  return button;
};
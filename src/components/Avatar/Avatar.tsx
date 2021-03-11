import React, { HTMLAttributes, FunctionComponent } from 'react';
import classes from './Avatar.module.css';
import { toInitials } from '../../services';
import chroma from 'chroma-js';

const sizeToClassNameMap = {
  none: null,
  small: 'Avatar--s',
  medium: 'Avatar--m',
  large: 'Avatar--l',
  extraLarge: 'Avatar--xl',
};

export type AvatarSize = keyof typeof sizeToClassNameMap;

const typeToClassNameMap = {
  square: 'Avatar--square',
  user: 'Avatar--user',
};

export type AvatarType = keyof typeof typeToClassNameMap;

export type AvatarProps = Omit<HTMLAttributes<HTMLDivElement>, 'color'> & {
  name: string;
  color?: string;
  initials?: string;
  initialsLength?: 1 | 2;
  type?: AvatarType;
  imageUrl?: string;
  size?: AvatarSize;
};

export const isColorDark = (color) => {
  let colorInstance = chroma(color).rgb();
  return (colorInstance[0] < 128 && colorInstance[1] < 128 && colorInstance[2] < 128);
}

export const Avatar: FunctionComponent<AvatarProps> = ({
  className,
  color,
  imageUrl,
  initials,
  initialsLength,
  name,
  size = 'large',
  type = 'user',
  ...rest
}) => {
  const paletteColors = {
    primary: "rgb(var(--primary-color))",
    success: "rgb(var(--success-color))",
    accent: "rgb(var(--accent-color))",
    warning: "rgb(var(--warning-color))",
    danger: "rgb(var(--danger-color))",
  };

  let classList = [
    classes['Avatar'],
    classes[sizeToClassNameMap[size]],
    classes[typeToClassNameMap[type]],
    className
  ];

  checkValidInitials(initials);

  let optionalInitial;
  if (name && !imageUrl) {
    // Create the initials
    const calculatedInitials = toInitials(name, initialsLength, initials);
    optionalInitial = <span aria-hidden="true">{calculatedInitials}</span>;
  }

  const assignedColor = paletteColors[color] || color || paletteColors['accent'];
  const textColor = paletteColors[color] ? '#FFFFFF'
    : isColorDark(color)
      ? '#FFFFFF'
      : '#000000';

  const avatarStyle = {
    backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
    backgroundColor: assignedColor,
    color: textColor,
  };

  return (
    <div
      className={classList.join(' ')}
      style={avatarStyle}
      aria-label={name}
      title={name}
      {...rest}>
      {optionalInitial}
    </div>
  );
};

function checkValidInitials(initials: AvatarProps['initials']) {
  // Must be a string of 1 or 2 characters
  if (initials && initials.length > 2) {
    console.warn(
      'Avatar only accepts a max of 2 characters for the initials as a string. It is displaying only the first 2 characters.'
    );
  }
}
import React, { FunctionComponent } from 'react';
import classes from './SvgIcon.module.css';
import { icons, outlineIcons } from '../../assets/icons';

interface SvgIconProps {
  size?: string;
  color?: string;
  className?: string;
  icon: string;
  outline?: boolean;
}

export const SvgIcon: FunctionComponent<SvgIconProps> = ({
  size,
  color,
  icon,
  outline = false,
  className,
}) => {
  const iconSizeMapping = {
    extraSmall: 'icon--extraSmall',
    small: '',
    medium: 'icon--medium',
    large: 'icon--large',
  }

  let classList = [
    classes['svg-icon'],
    size ? classes[iconSizeMapping[size]] : null,
    className
  ]

  let iconColor = color ? color : 'rgba(var(--text-color))';

  let iconPath = outline ? outlineIcons[icon] : icons[icon];

  return (
    <svg
      className={classList.join(' ')}
      fill={outline ? "none" : iconColor}
      stroke={outline ? iconColor : "none"}
      stroke-width={outline ? "2" : "none"}
      stroke-linecap={outline ? "round" : "none"}
      stroke-linejoin={outline ? "round" : "none"}

      viewBox={outline ? "0 0 24 24" : "0 0 20 20"}
      xmlns="http://www.w3.org/2000/svg"
    >
      {iconPath.map((path:any, index:number) => {
        return (
          <path
            key={index}
            fillRule="evenodd"
            d={path}
            clipRule="evenodd"
          />
        )
      })}
    </svg>
  );
};
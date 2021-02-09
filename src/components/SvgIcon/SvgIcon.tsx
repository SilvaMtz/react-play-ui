import React, { FunctionComponent } from 'react';
import classes from './SvgIcon.module.css';
import icons from '../../assets/icons/icons.js';

interface SvgIconProps {
  size?: string;
  color?: string;
  className?: string;
  icon: string;
}

export const SvgIcon: FunctionComponent<SvgIconProps> = ({
  size,
  color,
  icon,
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

  let iconPath = (
    <path
      fillRule="evenodd"
      d={icons[icon]}
      clipRule="evenodd"
    />
  )
  if (icons[icon].length > 1) {
    iconPath = (
      <React.Fragment>
        {icons[icon].map((path:any, index:number) => {
          return (
            <path
              key={index}
              fillRule="evenodd"
              d={path}
              clipRule="evenodd"
            />
          )
        })}
      </React.Fragment>
    )
  }

  return (
    <svg
      className={classList.join(' ')}
      fill={iconColor}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      {iconPath}
    </svg>
  );
};
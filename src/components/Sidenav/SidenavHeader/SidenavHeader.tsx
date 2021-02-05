import React, { FunctionComponent, ReactNode } from 'react';
import classes from './SidenavHeader.module.css';

interface SidenavHeaderProps {
  children?: ReactNode;
  transparent?: boolean;
}

export const SidenavHeader: FunctionComponent<SidenavHeaderProps> = ({
  children,
  transparent = false,
  ...rest
}) => {

  let classList = [
    classes['sidenav-header'],
    transparent ? classes['header--transparent'] : null
  ]

  return (
    <div className={classList.join(' ')} {...rest}>
      <div className={classes['children-container']}>
        {children}
      </div>
    </div>
  )
}
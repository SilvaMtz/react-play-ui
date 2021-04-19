import React, { FunctionComponent, ReactNode } from 'react';
import classes from './DrawerHeader.module.css';

export interface SideDrawerProps {
  children?: ReactNode;
  transparent?: boolean;
}

export const DrawerHeader: FunctionComponent<SideDrawerProps> = ({
  children,
  transparent = false,
  ...rest
}) => {

  let classList = [
    classes['SideDrawer-header'],
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
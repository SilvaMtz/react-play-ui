import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import classes from './TabPanel.module.css';
import classNames from 'classnames';
import { CommonProps } from '../../types';

interface TabPanelProps extends CommonProps {
  children?: ReactNode;
  tabId: number;
  activeTab: number;
}

export const TabPanel: FunctionComponent<TabPanelProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  tabId,
  activeTab,
  className
}) => {

  const isActive = tabId === activeTab;

  const classList = classNames(
    classes['TabPanel'],
    isActive ? classes['TabPanel--isActive'] : null,
    className
  )

  return (
    <div className={classList}>
      {children}
    </div>
  )
}
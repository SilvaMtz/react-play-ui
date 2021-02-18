import React, { FunctionComponent, ReactNode } from 'react';
import classes from './TabPanel.module.css';

interface TabPanelProps {
  children?: ReactNode;
  tabId: number;
  activeTab: number;
}

export const TabPanel: FunctionComponent<TabPanelProps> = ({
  children,
  tabId,
  activeTab
}) => {

  let isActive = tabId === activeTab;

  let classList = [
    classes['TabPanel'],
    isActive ? classes['TabPanel--isActive'] : null
  ]

  return (
    <div className={classList.join(' ')}>
      {children}
    </div>
  )
}
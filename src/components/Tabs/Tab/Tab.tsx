import React, { FunctionComponent, ReactNode, useState } from 'react';
import classes from './Tab.module.css';

interface TabPropTypes {
  activeTab?: number;
  children?: ReactNode;
  label: string;
  onClick: () => void;
  tabId: number;
};

export const Tab:FunctionComponent<TabPropTypes> = ({
  activeTab,
  children,
  label,
  onClick,
  tabId
}) => {

  let isActive = activeTab === tabId

  let classList = [
    classes['Tab'],
    isActive ? classes['Tab--isActive'] : null
  ];

  return (
    <div
      id={tabId.toString()}
      className={classList.join(' ')}
    >
      <button
        onClick={onClick}
        className={classes['TabButton']}
      >
        {children ? children : label}
      </button>
    </div>
  );
}
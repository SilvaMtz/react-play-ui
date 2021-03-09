import React, { ButtonHTMLAttributes, FunctionComponent, ReactNode, useState } from 'react';
import classes from './Tab.module.css';

interface TabPropTypes {
  activeTab?: number;
  children?: ReactNode;
  label: string;
  onClick: () => void;
  tabId: number;
  wrapperClassName?: string;
  buttonClassName?: string;
};

export const Tab:FunctionComponent<TabPropTypes & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  activeTab,
  children,
  label,
  onClick,
  tabId,
  wrapperClassName,
  buttonClassName,
  ...rest
}) => {

  let isActive = activeTab === tabId

  let classList = [
    classes['Tab'],
    isActive ? classes['Tab--isActive'] : null,
    wrapperClassName
  ];

  let buttonClassList = [
    classes['TabButton'],
    buttonClassName
  ];

  return (
    <div
      id={tabId.toString()}
      className={classList.join(' ')}
    >
      <button
        onClick={onClick}
        className={buttonClassList.join(' ')}
        {...rest}
      >
        {children ? children : label}
      </button>
    </div>
  );
}
import React, {
  ButtonHTMLAttributes,
  FunctionComponent,
  ReactNode,
  useState,
} from "react";
import { SvgIcon } from "../../SvgIcon";
import classes from "./Tab.module.css";

interface TabPropTypes {
  activeTab?: number;
  children?: ReactNode;
  label: string;
  onClick: () => void;
  tabId: number;
  wrapperClassName?: string;
  buttonClassName?: string;
  icon?: string;
}

export const Tab: FunctionComponent<
  TabPropTypes & ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  activeTab,
  children,
  label,
  onClick,
  tabId,
  wrapperClassName,
  buttonClassName,
  icon,
  ...rest
}) => {
  let isActive = activeTab === tabId;

  let classList = [
    classes["Tab"],
    isActive ? classes["Tab--isActive"] : null,
    wrapperClassName,
  ];

  let buttonClassList = [classes["TabButton"], buttonClassName];

  let labelInstance: ReactNode = label ? (
    <p className={classes["tabLabel"]}>{label}</p>
  ) : null;

  let iconInstance: ReactNode = icon ? (
    <SvgIcon
      style={{marginRight: 6}}
      size="extraSmall"
      icon={icon}
      color={isActive ? "primary" : null}
    />
  ) : null;

  let contentInstance = (
    <div className={classes['tabLabelContainer']}>
      {iconInstance}
      <span>{labelInstance}</span>
    </div>
  )

  return (
    <div id={tabId.toString()} className={classList.join(" ")}>
      <button onClick={onClick} className={buttonClassList.join(" ")} {...rest}>
        {children ? children : contentInstance}
      </button>
    </div>
  );
};

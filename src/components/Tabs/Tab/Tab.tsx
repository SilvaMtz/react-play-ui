import classNames from "classnames";
import React, {
  ButtonHTMLAttributes,
  FunctionComponent,
  ReactNode
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

  const classList = classNames(
    classes["Tab"],
    isActive ? classes["Tab--isActive"] : null,
    wrapperClassName,
  );

  const buttonClassList = classNames(classes["TabButton"], buttonClassName);

  const labelInstance: ReactNode = label ? (
    <p className={classes["tabLabel"]}>{label}</p>
  ) : null;

  const iconInstance: ReactNode = icon ? (
    <SvgIcon
      style={{marginRight: 6}}
      size="extraSmall"
      icon={icon}
      color={isActive ? "primary" : null}
    />
  ) : null;

  const contentInstance = (
    <div className={classes['tabLabelContainer']}>
      {iconInstance}
      <span>{labelInstance}</span>
    </div>
  )

  return (
    <div id={tabId.toString()} className={classList}>
      <button onClick={onClick} className={buttonClassList} {...rest}>
        {children ? children : contentInstance}
      </button>
    </div>
  );
};

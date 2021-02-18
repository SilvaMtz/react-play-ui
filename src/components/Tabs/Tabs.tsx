import React, { FunctionComponent, ReactNodeArray } from 'react';
import { FlexGroup } from '../FlexGroup';
import { FlexItem } from '../FlexItem';
import classes from './Tabs.module.css';

interface TabsPropTypes {
  children: ReactNodeArray;
  activeTab: number;
  stretch?: boolean;
  direction?: "row" | "column";
}

export const Tabs: FunctionComponent<TabsPropTypes> = ({
  children,
  stretch = true,
  direction = "row",
  activeTab
}) => {

  let classList = [
    classes["tabs"],
  ]

  const tabsWithActiveTab = React.Children.map(children, child => {
    // checking isValidElement is the safe way and avoids a typescript error too
    if (React.isValidElement(child)) {
      return (
        <FlexItem
          grow={stretch}
        >
          {React.cloneElement(child, { activeTab: activeTab })}
        </FlexItem>
      )
    }
    return child;
  });

  return (
    <FlexGroup
      direction={direction}
      justifyContent="center"
      alignItems="center"
      responsive={false}
      wrap={false}
      gutterSize="xs"
      className={classList.join(' ')}
    >
      {tabsWithActiveTab}
    </FlexGroup>
  );
}


import React, {
  FunctionComponent,
  HTMLAttributes,
  ReactNodeArray,
} from "react";
import { FlexGroup } from "../FlexGroup";
import { FlexItem } from "../FlexItem";
import { CommonProps } from "../types";

interface TabsPropTypes extends CommonProps {
  children: ReactNodeArray;
  activeTab: number;
  stretch?: boolean;
  direction?: "row" | "column";
}

export const Tabs: FunctionComponent<
  TabsPropTypes & HTMLAttributes<HTMLDivElement>
> = ({ children, stretch = true, direction = "row", className, activeTab }) => {
  const tabsWithActiveTab = React.Children.map(children, (child) => {
    // checking isValidElement is the safe way and avoids a typescript error too
    if (React.isValidElement(child)) {
      return (
        <FlexItem grow={stretch}>
          {React.cloneElement(child, { activeTab: activeTab })}
        </FlexItem>
      );
    }
    return child;
  });

  return (
    <FlexGroup
      direction={direction}
      justifyContent="flexStart"
      alignItems="center"
      responsive={false}
      wrap={false}
      gutterSize="xs"
      className={className}
    >
      {tabsWithActiveTab}
    </FlexGroup>
  );
};

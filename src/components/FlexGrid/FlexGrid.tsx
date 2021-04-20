import React, { HTMLAttributes, ReactNode, FunctionComponent } from "react";
import classes from "./FlexGrid.module.css";

export type FlexGridGutterSize = keyof typeof gutterSizeToClassNameMap;
export type FlexGridColumns = 0 | 1 | 2 | 3 | 4;
export type FlexGridDirection = keyof typeof directionToClassNameMap;

export interface FlexGridProps {
  /**
   * ReactNode to render as this component's content
   */
  children?: ReactNode;
  /**
   * Number of columns `1-4`, pass `0` for normal display
   */
  columns?: FlexGridColumns;
  /**
   * Flex layouts default to left-right then top-down (`row`).
   * Change this prop to `column` to create a top-down then left-right display.
   * Only works with column count of `1-4`.
   */
  direction?: FlexGridDirection;
  /**
   * Space between flex items
   */
  gutterSize?: FlexGridGutterSize;
  /**
   * Force each item to be display block on smaller screens
   */
  responsive?: boolean;

  /**
   * The tag to render
   */
  component?: keyof JSX.IntrinsicElements;
}

const gutterSizeToClassNameMap = {
  none: "FlexGrid--gutterNone",
  s: "FlexGrid--gutterSmall",
  m: "FlexGrid--gutterMedium",
  l: "FlexGrid--gutterLarge",
  xl: "FlexGrid--gutterXLarge",
};

const columnsToClassNameMap = {
  0: "FlexGrid--wrap",
  1: "FlexGrid--single",
  2: "FlexGrid--halves",
  3: "FlexGrid--thirds",
  4: "FlexGrid--fourths",
};

const directionToClassNameMap = {
  row: null,
  column: "FlexGrid--directionColumn",
};

export const FlexGrid: FunctionComponent<
  HTMLAttributes<HTMLDivElement> & FlexGridProps
> = ({
  children,
  className,
  gutterSize = "l",
  direction = "row",
  responsive = true,
  columns = 0,
  component: Component = "div",
  ...rest
}) => {

  const classList = [
    "FlexGrid",
    classes["FlexGrid"],
    gutterSize ? classes[gutterSizeToClassNameMap[gutterSize]] : undefined,
    columns != null ? classes[columnsToClassNameMap[columns]] : undefined,
    direction ? classes[directionToClassNameMap[direction]] : undefined,
    responsive ? [classes["FlexGrid--responsive"], "flexGrid--responsive"].join(' ') : null,
    className,
  ];

  return (
    // @ts-ignore difficult to verify `rest` applies to `Component`
    <Component className={classList.join(" ")} {...rest}>
      {children}
    </Component>
  );
};

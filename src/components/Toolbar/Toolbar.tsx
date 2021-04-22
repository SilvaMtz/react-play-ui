import React, { FunctionComponent, HTMLAttributes, useEffect } from "react";
import ReactDOM from "react-dom";
import classes from "./Toolbar.module.css";
import { ToolbarSection } from "./ToolbarSection";
import { CommonProps } from '../types';
import classNames from 'classnames';
import { ToolbarSectionItemType } from "./ToolbarSection/ToolbarSection";

export type ToolbarSectionType = {
  id: string | number;
  items: ToolbarSectionItemType[];
}

export type ToolbarSectionsPropType = ToolbarSectionType[]

export type ToolbarProps = CommonProps & {
  sections: ToolbarSectionsPropType;
  compact?: boolean;
  fixed?: boolean;
} & HTMLAttributes<HTMLDivElement>

export const Toolbar: FunctionComponent<ToolbarProps> = ({
  sections,
  compact = false,
  className,
  fixed = false,
  ...rest
}) => {
  useEffect(() => {
    if (fixed) {
      if (compact) {
        document.body.classList.add("body--hasFixedToolbar__Compact");
      } else {
        document.body.classList.add("body--hasFixedToolbar");
      };

      return () => {
        if (compact) {
          document.body.classList.remove("body--hasFixedToolbar__Compact");
        } else {
          document.body.classList.remove("body--hasFixedToolbar");
        }
      };
    };
  }, [fixed]);

  const classList = classNames(
    classes["Toolbar"],
    sections.length > 1 ? classes["Toolbar--spaceBetween"] : null,
    compact ? classes["Toolbar--compact"] : null,
    fixed ? classes["Toolbar--fixed"] : null,
    className
  );

  return (
    <div className={classList} {...rest}>
      {sections.map((section) => {
        return <ToolbarSection key={section.id} items={section.items} />;
      })}
    </div>
  );
};

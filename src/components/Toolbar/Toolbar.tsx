import React, { FunctionComponent, HTMLAttributes, useEffect } from "react";
import ReactDOM from "react-dom";
import classes from "./Toolbar.module.css";
import { ToolbarSection } from "./ToolbarSection";
import { CommonProps } from '../types';
import classNames from 'classnames';

export type ToolbarProps = CommonProps & {
  sections: Array<any>;
  compact?: boolean;
} & HTMLAttributes<HTMLElement>

export const Toolbar: FunctionComponent<ToolbarProps> = ({
  sections,
  compact = false,
  className,
  ...rest
}) => {
  useEffect(() => {
    if (compact) {
      document.body.classList.add("body--hasFixedToolbar__Compact");
    } else {
      document.body.classList.add("body--hasFixedToolbar");
    }

    return () => {
      if (compact) {
        document.body.classList.remove("body--hasFixedToolbar__Compact");
      } else {
        document.body.classList.remove("body--hasFixedToolbar");
      }
    };
  }, []);

  const classList = classNames(
    classes["Toolbar"],
    sections.length > 1 ? classes["Toolbar--spaceBetween"] : null,
    compact ? classes["Toolbar--compact"] : null,
    className
  );

  return ReactDOM.createPortal(
    <nav className={classList} {...rest}>
      {sections.map((section) => {
        return <ToolbarSection key={section.id} items={section.items} />;
      })}
    </nav>,
    document.body
  );
};

import React, { FunctionComponent, useEffect } from "react";
import ReactDOM from "react-dom";
import classes from "./Toolbar.module.css";
import { ToolbarSection } from "./ToolbarSection";

interface ToolbarProps {
  sections: Array<any>;
}

export const Toolbar: FunctionComponent<ToolbarProps> = ({
  sections,
  ...rest
}) => {
  useEffect(() => {
    document.body.classList.add(classes["body--hasFixedToolbar"]);

    return () => {
      document.body.classList.remove(classes["body--hasFixedToolbar"]);
    };
  }, []);

  let classList = [
    classes["toolbar"],
    sections.length > 1 ? classes["space-between"] : null,
  ];

  return ReactDOM.createPortal(
    <nav className={classList.join(" ")} {...rest}>
      {sections.map((section) => {
        return <ToolbarSection key={section.id} items={section.items} />;
      })}
    </nav>,
    document.body
  );
};

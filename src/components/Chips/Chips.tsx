import React, { FunctionComponent } from "react";
import { Chip, ChipProps } from "./Chip";
import classes from "./Chips.module.css";

export interface ChipsProps {
  chips?: ChipProps[];
  className?: string;
}

export const Chips: FunctionComponent<ChipsProps> = ({ chips, className, children }) => {
  let classList = [classes["ChipsContainer"], className];

  let childrenInstance = chips ? (
    <React.Fragment>
      {chips.map((chip, index) => {
        return <Chip key={index} {...chip} />;
      })}
    </React.Fragment>
  ) : children ? (
    <React.Fragment>{children}</React.Fragment>
  ) : null;

  return <span className={classList.join(" ")}>{childrenInstance}</span>;
};

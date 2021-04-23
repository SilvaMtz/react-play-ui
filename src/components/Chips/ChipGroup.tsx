import React, { FunctionComponent, HTMLAttributes } from "react";
import { CommonProps } from "../types";
import { Chip, ChipProps } from "./Chip";
import classes from "./ChipGroup.module.css";
import classNames from 'classnames';

export type ChipGroupType = CommonProps & {
  chips?: ChipProps[];
} & HTMLAttributes<HTMLSpanElement>

export const ChipGroup: FunctionComponent<ChipGroupType> = ({ chips, className, children, ...rest }) => {
  const classList = classNames(classes["ChipsContainer"], className);

  const childrenInstance = chips ? (
    <React.Fragment>
      {chips.map((chip, index) => {
        return <Chip key={index} {...chip} />;
      })}
    </React.Fragment>
  ) : children ? (
    <React.Fragment>{children}</React.Fragment>
  ) : null;

  return <span className={classList}>{childrenInstance}</span>;
};

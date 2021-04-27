import classNames from "classnames";
import React, { FunctionComponent } from "react";
import { HTMLAttributes } from "react";
import { CommonProps } from "react-play-ui";
import classes from "./PageTitle.module.css";

export type PageTitle = CommonProps & {
  text?: string;
  headingElement?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & HTMLAttributes<HTMLHeadingElement>;

export const PageTitle: FunctionComponent<PageTitle> = ({
  text,
  headingElement = "h1",
  children,
  className,
  ...rest
}) => {

  const classList = classNames(
    classes["PageTitle"],
    className
  )

  const NewElement = React.createElement(
    headingElement,
    {
      className: classList,
      ...rest,
    },
    children || text
  );

  return NewElement;
};

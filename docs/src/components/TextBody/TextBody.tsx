import classNames from "classnames";
import React, { FunctionComponent } from "react";
import { HTMLAttributes } from "react";
import { CommonProps } from "react-play-ui";
import classes from "./TextBody.module.css";

export type TextBodyType = CommonProps & {
  text?: string;
} & HTMLAttributes<HTMLParagraphElement>;

export const TextBody: FunctionComponent<TextBodyType> = ({
  text,
  children,
  className,
  ...rest
}) => {

  const classList = classNames(
    classes["TextBody"],
    className
  )

  return (
    <p className={classList} {...rest}>
      {children || text}
    </p>
  )
};

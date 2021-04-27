import classNames from "classnames";
import { FunctionComponent } from "react";
import classes from "./CodeLine.module.css";

export const CodeLine: FunctionComponent<{
  color?: "default" | "primary" | "danger" | "success" | "warning" | "accent";
}> = ({ color = "default", children }) => {
  const colorToClassMap = {
    default: "",
    primary: "code--primaryColor",
    danger: "code--dangerColor",
    success: "code--successColor",
    warning: "code--warningColor",
    accent: "code--accentColor",
  };

  const classList = classNames(
    classes["CodeLine"],
    color && colorToClassMap[color] ? classes[colorToClassMap[color]] : null
  );

  return <code className={classList}>{children}</code>;
};
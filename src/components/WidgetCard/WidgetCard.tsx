import React, {
  ButtonHTMLAttributes,
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
} from "react";
import classes from "./WidgetCard.module.css";

interface WidgetCardProps {
  children?: ReactNode;
  color?: string;
  onClick?: () => void;
  gradient?: boolean | Array<string> | string;
}

export const WidgetCard: FunctionComponent<
  WidgetCardProps & ButtonHTMLAttributes<HTMLButtonElement & HTMLDivElement>
> = ({ children, onClick, color = "secondary", gradient = true, ...rest }) => {
  const colorToClassStyleMap = {
    primary: "widget--colorPrimary",
    danger: "widget--colorDanger",
    warning: "widget--colorWarning",
    secondary: "widget--colorSecondary",
    accent: "widget--colorAccent",
  };

  let colorStyle;

  if (!colorToClassStyleMap[color]) {
    colorStyle = { backgroundColor: color }
  }

  let classList = [
    classes["widget-card"],
    !colorStyle ? classes[colorToClassStyleMap[color]] : null,
    onClick ? classes["widget--buttonType"] : null,
    gradient ? classes["gradient"] : null,
  ];

  let widgetInstance = (
    <div className={classList.join(" ")} style={colorStyle} {...rest}>
      {children}
    </div>
  );

  if (onClick) {
    widgetInstance = (
      <button
        type="button"
        className={classList.join(" ")}
        style={colorStyle}
        {...rest}
      >
        {children}
      </button>
    );
  }

  return widgetInstance;


};

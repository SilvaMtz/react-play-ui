import React, {
  ButtonHTMLAttributes,
  FunctionComponent,
  ReactNode,
} from "react";
import classes from "./WidgetCard.module.css";
import chroma from "chroma-js";

interface WidgetCardProps {
  children?: ReactNode;
  color?: string;
  onClick?: () => void;
  gradient?: boolean;
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

  // TODO: custom color on hover opacity
  if (!colorToClassStyleMap[color] && gradient) {
    let gradientColor =
      chroma(color).luminance() > 0.5
        ? chroma(color).darken(1)
        : chroma(color).brighten(1);
    colorStyle = {
      background: `linear-gradient(135deg,  ${chroma(color).alpha(
        0.65
      )} 0%, ${chroma(gradientColor).alpha(0.65)} 100%)`
    };
  } else if (!colorToClassStyleMap[color]) {
    colorStyle = {
      backgroundColor: color,
    }
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

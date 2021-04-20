import React, { FunctionComponent, SVGAttributes } from "react";
import classes from "./SvgIcon.module.css";
import { icons } from "../../assets/icons";

export type Heroicons = keyof typeof icons;

export type IconsType = Heroicons & string

export type IconSize = "mini" | "extraSmall" | "small" | "medium" | "large";

export interface SvgIconProps {
  size?: IconSize;
  color?: string;
  className?: string;
  icon: string;
}

export const SvgIcon: FunctionComponent<SVGAttributes<SVGElement> & SvgIconProps> = ({
  size = "small",
  color,
  icon,
  className,
  ...rest
}) => {
  const iconSizeMapping = {
    mini: "icon--mini",
    extraSmall: "icon--extraSmall",
    small: "",
    medium: "icon--medium",
    large: "icon--large",
  };

  const colorPaletteToClassMap = {
    primary: "rgba(var(--primary-color))",
    success: "rgba(var(--success-color))",
    accent: "rgba(var(--accent-color))",
    warning: "rgba(var(--warning-color))",
    danger: "rgba(var(--danger-color))",
  };

  let classList = [
    classes["svg-icon"],
    size ? classes[iconSizeMapping[size]] : null,
    className,
  ];

  let iconColor =
    color && colorPaletteToClassMap[color]
      ? colorPaletteToClassMap[color]
      : color
      ? color
      : "rgba(var(--text-color))";

  let outline: boolean = icon.includes('Outline')

  return (
    <svg
      className={classList.join(" ")}
      fill={outline ? "none" : iconColor}
      stroke={outline ? iconColor : "none"}
      strokeWidth={outline ? "2" : "none"}
      strokeLinecap={outline ? "round" : "inherit"}
      strokeLinejoin={outline ? "round" : "inherit"}
      viewBox={outline ? "0 0 24 24" : "0 0 20 20"}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {icons[icon].map((path: any, index: number) => {
        return (
          <path key={index} fillRule="evenodd" d={path} clipRule="evenodd" />
        );
      })}
    </svg>
  );
};

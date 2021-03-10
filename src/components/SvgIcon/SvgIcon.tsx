import React, { FunctionComponent, SVGAttributes } from "react";
import classes from "./SvgIcon.module.css";
import { icons, outlineIcons } from "../../assets/icons";

const iconKeys = Object.keys(icons);

const tuple = <T extends string[]>(...args: T) => args;
const iconKeysTuple = tuple(...iconKeys);
export type iconNameType = typeof iconKeysTuple[number];

interface SvgIconProps {
  size?: "extraSmall" | "small" | "medium" | "large";
  color?: string;
  className?: string;
  icon: iconNameType;
  outline?: boolean;
}

export const SvgIcon: FunctionComponent<SVGAttributes<SVGElement> & SvgIconProps> = ({
  size = "small",
  color,
  icon,
  outline = false,
  className,
  ...rest
}) => {
  const iconSizeMapping = {
    extraSmall: "icon--extraSmall",
    small: "",
    medium: "icon--medium",
    large: "icon--large",
  };

  const colorPaletteToClassMap = {
    primary: "rgba(var(--primary-color))",
    secondary: "rgba(var(--secondary-color))",
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

  let iconPath = outline ? outlineIcons[icon] : icons[icon];

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
      {iconPath.map((path: any, index: number) => {
        return (
          <path key={index} fillRule="evenodd" d={path} clipRule="evenodd" />
        );
      })}
    </svg>
  );
};

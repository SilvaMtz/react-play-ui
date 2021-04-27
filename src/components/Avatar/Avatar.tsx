import React, { HTMLAttributes, FunctionComponent } from "react";
import classes from "./Avatar.module.css";
import { toInitials } from "../../services";
import chroma from "chroma-js";

// TODO: Change sizes to match IconButton
const sizeToClassNameMap = {
  none: null,
  extraSmall: "Avatar--xs",
  small: "Avatar--s",
  medium: "Avatar--m",
  large: "Avatar--l",
  extraLarge: "Avatar--xl",
};

const clickableSizeToClassMap = {
  none: null,
  extraSmall: "Avatar--clickable--xs",
  small: "Avatar--clickable--s",
  medium: "Avatar--clickable--m",
  large: "Avatar--clickable--l",
  extraLarge: "Avatar--clickable--xl",
};

export type AvatarSize = keyof typeof sizeToClassNameMap;

const typeToClassNameMap = {
  square: "Avatar--square",
  user: "Avatar--user",
};

export type AvatarType = keyof typeof typeToClassNameMap;

export type AvatarProps = Omit<
  HTMLAttributes<HTMLDivElement | HTMLButtonElement>,
  "color"
> & {
  name: string;
  color?: string;
  initials?: string;
  initialsLength?: 1 | 2;
  type?: AvatarType;
  imageUrl?: string;
  size?: AvatarSize;
  onClick?: () => void | {};
};

export const isColorDark = (color) => {
  let colorInstance = chroma(color).rgb();
  return (
    colorInstance[0] < 128 && colorInstance[1] < 128 && colorInstance[2] < 128
  );
};

export const Avatar: FunctionComponent<AvatarProps> = React.forwardRef<
  HTMLButtonElement,
  AvatarProps
>(
  (
    {
      className,
      color = "accent",
      imageUrl,
      initials,
      initialsLength,
      name,
      size = "medium",
      type = "user",
      onClick,
      style,
      ...rest
    },
    ref
  ) => {
    const paletteColors = {
      primary: "rgb(var(--primary-color))",
      success: "rgb(var(--success-color))",
      accent: "rgb(var(--accent-color))",
      warning: "rgb(var(--warning-color))",
      danger: "rgb(var(--danger-color))",
    };

    let classList = [
      classes["Avatar"],
      classes[sizeToClassNameMap[size]],
      classes[typeToClassNameMap[type]],
      className,
    ];

    let clickableClassList = onClick
      ? [
          classes["Avatar--clickable"],
          classes[clickableSizeToClassMap[size]],
          type === "square" ? classes["Avatar--square--clickable"] : null,
        ]
      : null;

    checkValidInitials(initials);

    let optionalInitial;
    if (name && !imageUrl) {
      // Create the initials
      const calculatedInitials = toInitials(name, initialsLength, initials);
      optionalInitial = <span aria-hidden="true">{calculatedInitials}</span>;
    }

    // TODO: Auto generated color depending on 'name' prop
    const assignedColor =
      paletteColors[color] || color || paletteColors["accent"];
    const textColor = paletteColors[color]
      ? "#FFFFFF"
      : isColorDark(color)
      ? "#FFFFFF"
      : "#000000";

    const avatarStyle = {
      backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
      backgroundColor: assignedColor,
      color: textColor,
      ...style
    };

    let avatarInstance = (
      <div
        className={classList.join(" ")}
        style={avatarStyle}
        aria-label={name}
        title={name}
        {...rest}
      >
        {optionalInitial}
      </div>
    );

    if (onClick) {
      avatarInstance = (
        <button
          ref={ref}
          onClick={onClick}
          className={clickableClassList.join(" ")}
          {...rest}
        >
          <div
            className={classList.join(" ")}
            style={avatarStyle}
            aria-label={name}
            title={name}
          >
            {optionalInitial}
          </div>
        </button>
      );
    }

    return avatarInstance;
  }
);

function checkValidInitials(initials: AvatarProps["initials"]) {
  // Must be a string of 1 or 2 characters
  if (initials && initials.length > 2) {
    console.warn(
      "Avatar only accepts a max of 2 characters for the initials as a string. It is displaying only the first 2 characters."
    );
  }
}

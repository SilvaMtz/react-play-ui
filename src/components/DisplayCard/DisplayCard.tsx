import React, {
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
} from "react";
import { ActionButton } from "../ActionButton";
import classes from "./DisplayCard.module.css";

export interface DisplayCardProps {
  title?: string;
  subtitle?: ReactNode;
  image?: string;
  primaryAction?: () => {};
  secondaryAction?: () => {};
  footer?: ReactNode;
  onClick?: () => {};
  imageSize?: "small" | "medium" | "large";
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
}

/*
  TODOS:
  - Add HTMLButtonElement interface once button/div check is corrected
  - Add href functionality
  - Add restrainWidth prop
  ? Add close/remove button on top-right corner
*/
export const DisplayCard: FunctionComponent<
  DisplayCardProps & HTMLAttributes<HTMLDivElement>
> = ({
  title,
  subtitle,
  image,
  imageSize = "small",
  primaryAction,
  primaryActionLabel = "Primary",
  secondaryActionLabel = "Secondary",
  secondaryAction,
  footer,
  children,
  onClick,
  ...rest
}) => {
  const imageSizeToClassMap = {
    small: "",
    medium: "imageContainer--imageMedium",
    large: "imageContainer--imageLarge",
  };

  let imageClassList = [
    classes["imageContainer"],
    imageSize && imageSizeToClassMap[imageSize]
      ? classes[imageSizeToClassMap[imageSize]]
      : null,
  ];

  let imageInstance = image ? (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={imageClassList.join(" ")}
    />
  ) : null;

  let headerInstance =
    title || subtitle ? (
      <div className={classes["headerContainer"]}>
        <h4 className={classes["headerTitle"]}>{title}</h4>
        <span className={classes["headerSubtitle"]}>{subtitle}</span>
      </div>
    ) : null;

  let bodyInstance = (
    <div className={classes["bodyContainer"]}>
      {headerInstance}
      {children}
    </div>
  );

  let footerContent = (
    <React.Fragment>
      {secondaryAction && !footer ? (
        <ActionButton
          onClick={secondaryAction}
          label={secondaryActionLabel}
          color="primary"
          fill={false}
          restrainWidth={false}
          size="extraSmall"
          style={{ marginRight: primaryAction ? 3 : 0 }}
        />
      ) : null}
      {primaryAction && !footer ? (
        <ActionButton
          onClick={primaryAction}
          label={primaryActionLabel}
          color="primary"
          fill
          restrainWidth={false}
          size="extraSmall"
          style={{ marginLeft: secondaryAction ? 3 : 0 }}
        />
      ) : null}
      {footer ? footer : null}
    </React.Fragment>
  );

  let footerInstance =
    (!onClick && footer) || primaryAction || secondaryAction ? (
      <div className={classes["footerContainer"]}>{footerContent}</div>
    ) : null;

  let cardClassList = [
    classes["displayCard"],
    onClick ? classes["displayCard--onClick"] : null,
    rest.className,
  ];

  // TODO: onClick true should be <Button> element, but remain div for now due to styling issues
  let cardInstance = onClick ? (
    <div className={cardClassList.join(" ")} onClick={onClick} {...rest}>
      {imageInstance}
      {bodyInstance}
      {footerInstance}
    </div>
  ) : (
    <div className={cardClassList.join(" ")} {...rest}>
      {imageInstance}
      {bodyInstance}
      {footerInstance}
    </div>
  );

  return cardInstance;
};

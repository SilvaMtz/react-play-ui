import React, { FunctionComponent, ReactNode } from "react";
import classes from "./Modal.module.css";
import { OverlayMask } from "../OverlayMask";
import { PanelCard } from "../PanelCard";
import { SvgIcon } from "../SvgIcon";
import { IconButton } from "../IconButton";
import { CommonProps } from "../types";

interface ModalProps extends CommonProps {
  paddingSize?: string;
  icon?: string;
  onClose?: any;
  title?: string;
  children?: ReactNode;
  maxWidth?: number | string;
  backgroundBlur?: boolean;
  centerTitle?: boolean;
  footer?: ReactNode;
  maxHeight?: number | string;
	bodyClassName?: string;
	headerClassName?: string;
}

export const Modal: FunctionComponent<ModalProps> = ({
  paddingSize = "medium",
  icon,
  onClose,
  title,
  children,
  maxWidth = 600,
  maxHeight,
  backgroundBlur = true,
  centerTitle = false,
  footer,
	className,
	bodyClassName,
	headerClassName,
  ...rest
}) => {
  const bodyPaddingSizeClassMapping = {
    none: "body--paddingNone",
    small: "body--paddingSmall",
    medium: "body--paddingMedium",
    large: "body--paddingLarge",
  };

  let iconInstance: ReactNode = null;
  if (icon) {
    iconInstance = <SvgIcon icon={icon} />;
  }

  const bodyClassList = [
    classes["modal-body"],
    classes[bodyPaddingSizeClassMapping[paddingSize]],
    maxHeight ? classes["modal-body--overflowScroll"] : null,
		bodyClassName
  ];

  const headerClassList = [
    classes["modal-header"],
    centerTitle ? classes["center-header"] : null,
		headerClassName
  ];

  const modalClassList = [classes["modal-panel"], classes["modal-animation"], className];

  let headerInstance: ReactNode;
  if (title) {
    headerInstance = (
      <div className={headerClassList.join(" ")}>
        <div className={classes["modal-title"]}>
          {iconInstance}
          <h2>{title}</h2>
        </div>
      </div>
    );
  }

  let footerInstance = footer ? (
    <div className={classes["modal-footer"]}>{footer}</div>
  ) : null;

  return (
    <OverlayMask backgroundBlur={backgroundBlur} onClick={onClose}>
      <PanelCard
        style={{
          maxWidth: maxWidth ? maxWidth : null,
          width: maxWidth ? maxWidth : null,
          maxHeight: maxHeight ? maxHeight : null
        }}
        className={modalClassList.join(" ")}
        direction="column"
        paddingSize="none"
        {...rest}
      >
        {headerInstance}
        <IconButton
          size="small"
          style={{ position: "absolute", top: 12, right: 12 }}
          icon="x"
          onClick={onClose}
        />
        <div
          className={bodyClassList.join(" ")}
        >
          {children}
        </div>
        {footerInstance}
      </PanelCard>
    </OverlayMask>
  );
};

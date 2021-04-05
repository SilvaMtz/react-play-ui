import React, { FunctionComponent, ReactNode, useEffect } from "react";
import { OverlayMask } from "../OverlayMask";
import classes from "./Sidenav.module.css";
import { ContextMenu } from "../ContextMenu";
import { ContextMenuPanelDescriptor } from "../ContextMenu/ContextMenu";
import { SidenavHeader } from "./SidenavHeader";

interface SidenavProps {
  panels?: ContextMenuPanelDescriptor[];
  transparent?: boolean;
  isDocked?: boolean;
  onClose?: any;
  children?: ReactNode;
  className?: string;
  itemsSize?: "extraSmall" | "small" | "medium" | "large";
  header?: ReactNode;
  transparentHeader?: boolean;
  position?: "left" | "right";
  float?: boolean;
}

export const Sidenav: FunctionComponent<SidenavProps> = ({
  panels,
  transparent = false,
  isDocked = false,
  onClose,
  children,
  header,
  className,
  transparentHeader = false,
  itemsSize = "small",
  position = "left",
  float = false,
  ...rest
}) => {
  const positionToClassMap = {
    left: "sidenav-position--left",
    right: "sidenav-position--right",
  };

  let classList = [
    classes["sidenav"],
    float ? classes["floating-sidenav"] : null,
    !transparent ? classes["sidenav--background"] : null,
    position ? classes[positionToClassMap[position]] : null,
  ];

  // useEffect(() => {
  //   if (isDocked) {
  //     document.body.classList.add(classes['sidenav-docked'])
  //   }

  //   return () => {
  //     document.body.classList.add(classes['sidenav-docked'])
  //   }
  // }, [isDocked])

  let maskInstance: ReactNode = !isDocked ? <OverlayMask onClick={onClose} /> : null;
  let headerInstance: ReactNode;
  if (header) {
    headerInstance = (
      <div className={classes["header-container"]}>
        <SidenavHeader transparent={transparentHeader}>{header}</SidenavHeader>
      </div>
    );
  }

  return (
    <React.Fragment>
      {maskInstance}
      <div className={classList.join(" ")} {...rest}>
        {headerInstance}
        <div className={classes["options-container"]}>
          {children ? (
            children
          ) : panels ? (
            <ContextMenu
              initialPanelId={0}
              itemsSize={itemsSize}
              panels={panels}
              transparent
              width="100%"
            />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

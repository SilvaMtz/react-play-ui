import React, {
  FunctionComponent,
  HTMLAttributes,
  cloneElement,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { OverlayMask } from "../OverlayMask";
import classes from "./SideDrawer.module.css";
import { ContextMenu } from "../ContextMenu";
import { ContextMenuPanelDescriptor } from "../ContextMenu/ContextMenu";
import { DrawerHeader } from "./DrawerHeader";
import { CommonProps } from "../types";
import { OverlayMaskProps } from "../OverlayMask/OverlayMask";
import classNames from "classnames";
import { htmlIdGenerator } from "../../services";
import { throttle } from "../../services";
import { WindowEvent } from "../../hoc";

export type SideDrawerProps = CommonProps &
  HTMLAttributes<HTMLElement> & {
    panels?: ContextMenuPanelDescriptor[];
    isDocked?: boolean;
    dockedBreakpoint?: number;
    isOpen?: boolean;
    button?: ReactNode;
    onClose?: () => void;
    children?: ReactNode;
    showButtonIfDocked?: boolean;
    itemsSize?: "extraSmall" | "small" | "medium" | "large";
    header?: ReactNode;
    transparentHeader?: boolean;
    position?: "left" | "right";
    float?: boolean;
    maskProps?: OverlayMaskProps;
    toolbarZIndexLocation?: "above" | "below";
  };

export const SideDrawer: FunctionComponent<SideDrawerProps> = ({
  panels,
  isDocked = false,
  dockedBreakpoint = 900,
  isOpen = false,
  button,
  onClose,
  children,
  showButtonIfDocked,
  itemsSize = "small",
  header,
  transparentHeader = false,
  position = "left",
  float = false,
  maskProps,
  toolbarZIndexLocation = "below",
  className,
  id,
  ...rest
}) => {
  const [drawerId] = useState(id || htmlIdGenerator()("sideDrawer"));
  const [windowIsLargeEnoughToDock, setWindowIsLargeEnoughToDock] = useState(
    (typeof window === "undefined" ? Infinity : window.innerWidth) >=
      dockedBreakpoint
  );
  const drawerIsDocked = isDocked && windowIsLargeEnoughToDock;

  const functionToCallOnWindowResize = throttle(() => {
    if (window.innerWidth < dockedBreakpoint) {
      setWindowIsLargeEnoughToDock(false);
    } else {
      setWindowIsLargeEnoughToDock(true);
    }
    // reacts every 50ms to resize changes and always gets the final update
  }, 50);

  useEffect(() => {
    window.addEventListener("resize", functionToCallOnWindowResize);

    if (drawerIsDocked) {
      if (position === "left") {
        document.body.classList.add(classes["body--SideDrawer-isDockedLeft"]);
      } else if (position === "right") {
        document.body.classList.add(classes["body--SideDrawer-isDockedRight"]);
      }
    } else if (isOpen) {
      document.body.classList.add(classes["body--SideDrawer-isOpen"]);
    }

    return () => {
      if (position === "left") {
        document.body.classList.remove(
          classes["body--SideDrawer-isDockedLeft"]
        );
      } else if (position === "right") {
        document.body.classList.remove(
          classes["body--SideDrawer-isDockedRight"]
        );
      }
      document.body.classList.remove(classes["body--SideDrawer-isOpen"]);
      window.removeEventListener("resize", functionToCallOnWindowResize);
    };
  }, [drawerIsDocked, isOpen, functionToCallOnWindowResize]);

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ESCAPE") {
      event.preventDefault();
      collapse();
    }
  };

  const collapse = () => {
    // Skip collapsing if it is docked
    if (drawerIsDocked) {
      return;
    } else {
      onClose && onClose();
    }
  };

  let maskInstance: ReactNode = !isDocked ? (
    <OverlayMask
      onClick={onClose}
      {...maskProps}
      toolbarZIndexLocation={toolbarZIndexLocation}
    />
  ) : null;

  let headerInstance: ReactNode;
  if (header) {
    headerInstance = (
      <div className={classes["header-container"]}>
        <DrawerHeader transparent={transparentHeader}>{header}</DrawerHeader>
      </div>
    );
  }

  const trigger =
    drawerIsDocked && !showButtonIfDocked
      ? undefined
      : button &&
        cloneElement(button as ReactElement, {
          "aria-controls": drawerId,
          "aria-expanded": isOpen,
          "aria-pressed": isOpen,
        });

  const positionToClassMap = {
    left: "SideDrawer-position--left",
    right: "SideDrawer-position--right",
  };

  const classList = classNames(
    classes["SideDrawer"],
    float && !isDocked ? classes["floating-SideDrawer"] : null,
    position ? classes[positionToClassMap[position]] : null,
    toolbarZIndexLocation === "below" ? classes["belowHeader"] : null,
    isDocked && position === "left"
      ? classes["SideDrawer--isDockedLeft"]
      : isDocked && position === "right"
      ? classes["SideDrawer--isDockedRight"]
      : null,
    className
  );

  const drawerInstance = (
    <React.Fragment>
      <WindowEvent event="keydown" handler={onKeyDown} />
      {maskInstance}
      <div className={classList} {...rest}>
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

  return (
    <React.Fragment>
      {trigger}
      {(isOpen || drawerIsDocked) && drawerInstance}
    </React.Fragment>
  );
};

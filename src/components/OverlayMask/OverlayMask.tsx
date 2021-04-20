import React, { FunctionComponent, useEffect, ReactNode, HTMLAttributes, useRef, useState } from "react";
import { createPortal } from "react-dom";
import classes from "./OverlayMask.module.css";
import { keysOf, CommonProps } from "../types";
import classNames from 'classnames';

export type OverlayMaskInterface = {
  /**
   * Applies blur to the backdrop.
   * WARNING: It might affect performance.
   */
  backgroundBlur?: boolean;
  /**
   * Function that applies to clicking the mask itself and not the children
   */
  onClick?: () => void;
  /**
   * ReactNode to render as this component's content
   */
  children?: ReactNode;
  /**
   * Should the mask visually sit above or below the Toolbar Component (controlled by z-index)
   */
   toolbarZIndexLocation?: "above" | "below";
};

export type OverlayMaskProps = CommonProps &
  Omit<
    Partial<Record<keyof HTMLAttributes<HTMLDivElement>, string>>,
    keyof OverlayMaskInterface
  > &
  OverlayMaskInterface;


export const OverlayMask: FunctionComponent<OverlayMaskProps> = ({
  backgroundBlur = false,
  className,
  children,
  onClick,
  toolbarZIndexLocation = 'above',
  ...rest
}) => {
  const overlayMaskNode = useRef<HTMLDivElement>(document.createElement('div'));
  const [isPortalTargetReady, setIsPortalTargetReady] = useState(false);

  useEffect(() => {
    document.body.classList.add(classes["body--hasOverlayMask"]);

    return () => {
      document.body.classList.remove(classes["body--hasOverlayMask"]);
    };
  }, []);

  useEffect(() => {
    const portalTarget = overlayMaskNode.current;
    document.body.appendChild(overlayMaskNode.current);
    setIsPortalTargetReady(true);

    return () => {
      if (portalTarget) {
        document.body.removeChild(portalTarget);
      }
    };
  }, []);

  useEffect(() => {
    if (!overlayMaskNode.current) return;
    keysOf(rest).forEach((key) => {
      if (typeof rest[key] !== 'string') {
        throw new Error(
          `Unhandled property type. OverlayMask property ${key} is not a string.`
        );
      }
      overlayMaskNode.current.setAttribute(key, rest[key]!);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!overlayMaskNode.current) return;
    overlayMaskNode.current.className = classNames(
      classes['OverlayMask'],
      classes[`OverlayMask--${toolbarZIndexLocation}Header`],
      backgroundBlur ? classes["backgroundBlur"] : null,
      className
    );
  }, [className, toolbarZIndexLocation]);

  useEffect(() => {
    if (!overlayMaskNode.current || !onClick) return;
    const portalTarget = overlayMaskNode.current;
    overlayMaskNode.current.addEventListener('click', (e) => {
      if (e.target === overlayMaskNode.current) {
        onClick();
      }
    });

    return () => {
      if (portalTarget && onClick) {
        portalTarget.removeEventListener('click', onClick);
      }
    };
  }, [onClick]);

  return isPortalTargetReady ? (
    <>{createPortal(children, overlayMaskNode.current!)}</>
  ) : null;
};

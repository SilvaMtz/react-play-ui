import React, {
  Component,
  HTMLAttributes,
  ReactNode,
} from "react";
import classes from "./Accordion.module.css";
import classNames from "classnames";
import { CommonProps } from "../types";
import { ResizeObserver } from "../Observer";
import { htmlIdGenerator } from "../../services";
import { IconSize, IconsType, SvgIconProps, SvgIcon } from "../SvgIcon/SvgIcon";
import { LoadingSpinner } from "../LoadingSpinner";

const paddingSizeToClassNameMap = {
  none: "",
  xs: "Accordion--padding-xs",
  s: "Accordion--padding-s",
  m: "Accordion--padding-m",
  l: "Accordion--padding-l",
  xl: "Accordion--padding-xl",
};

export type AccordionPaddingSize = keyof typeof paddingSizeToClassNameMap;

export type AccordionProps = CommonProps &
  Omit<HTMLAttributes<HTMLDivElement>, "id"> & {
    /**
     * ID to use in the root element (optional).
     */
    id?: string;

    children?: ReactNode;
    /**
     * Icon to on the left side of the title. Must use a title to display.
     */
    icon?: string;
    /**
     * Size of icon to show beside the title.
     */
    iconSize?: IconSize;
    /**
     * Props to pass down to the SvgIcon Component.
     */
    iconProps?: Omit<SvgIconProps, "size" | "icon">;
    /**
     * className applied to the accordion trigger.
     */
    buttonClassName?: string;
    /**
     * Apply HTML Button Props and CommonProps to the trigger.
     */
    buttonProps?: CommonProps & HTMLAttributes<HTMLButtonElement>;
    /**
     * Button Content className to apply to the content of the trigger.
     */
    buttonContentClassName?: string;
    /**
     * Content of the trigger button
     */
    buttonContent?: ReactNode;
    /**
     * An action to appear at the right side of the Accordion.
     */
    extraAction?: ReactNode;
    /**
     * The Accordion will appear open initially.
     */
    initialIsOpen?: boolean;
    /**
     * Callback method called upon triggering the Accordion
     * @params `isOpen: boolean`
     */
    onToggle?: (isOpen: boolean) => void;
    /**
     * Padding around the Content of the open Accordion
     */
    paddingSize?: AccordionPaddingSize;
    /**
     * Side of the Accordion in which the arrow indicator will appear, if at all.
     * @type `'left' | 'right' | 'none'`
     */
    arrowDisplay?: "left" | "right" | "none";
    /**
     * Control the opening of accordion via prop
     */
    forceState?: "closed" | "open";
    /**
     * Change `extraAction` and children into a loading spinner
     */
    isLoading?: boolean;
    /**
     * Loading Message to display instead of the content when the `isLoading` prop is set to `true`
     */
    isLoadingMessage?: ReactNode;
  };

export class Accordion extends Component<AccordionProps, { isOpen: boolean }> {
  static defaultProps = {
    initialIsOpen: false,
    paddingSize: "none",
    arrowDisplay: "left",
    isLoading: false,
    isLoadingMessage: false,
  };

  childContent: HTMLDivElement | null = null;
  childWrapper: HTMLDivElement | null = null;

  state = {
    isOpen: this.props.forceState
      ? this.props.forceState === "open"
      : this.props.initialIsOpen,
  };

  setChildContentHeight = () => {
    const { forceState } = this.props;
    requestAnimationFrame(() => {
      const height =
        this.childContent &&
        (forceState ? forceState === "open" : this.state.isOpen)
          ? this.childContent.clientHeight
          : 0;
      this.childWrapper &&
        this.childWrapper.setAttribute("style", `height: ${height}px`);
    });
  };

  componentDidMount() {
    this.setChildContentHeight();
  }

  componentDidUpdate() {
    this.setChildContentHeight();
  }

  onToggle = () => {
    const { forceState } = this.props;
    if (forceState) {
      this.props.onToggle &&
        this.props.onToggle(forceState === "open" ? false : true);
    } else {
      this.setState(
        (prevState) => ({
          isOpen: !prevState.isOpen,
        }),
        () => {
          if (this.state.isOpen && this.childWrapper) {
            this.childWrapper.focus();
          }
          this.props.onToggle && this.props.onToggle(this.state.isOpen);
        }
      );
    }
  };

  setChildContentRef = (node: HTMLDivElement | null) => {
    this.childContent = node;
  };

  render() {
    const {
      children,
      buttonContent,
      className,
      id,
      buttonClassName,
      buttonContentClassName,
      extraAction,
      paddingSize,
      initialIsOpen,
      arrowDisplay,
      forceState,
      isLoading,
      isLoadingMessage,
      buttonProps,
      ...rest
    } = this.props;

    const isOpen = forceState ? forceState === "open" : this.state.isOpen;

    const classList = classNames(
      classes["Accordion"],
      isOpen ? classes["Accordion--isOpen"] : null,
      className
    );

    const paddingClassName = paddingSize
      ? classes[paddingSizeToClassNameMap[paddingSize]]
      : null;

    const childrenClassList = classNames(
      paddingClassName,
      isLoading ? classes["Accordion--Children-isLoading"] : null
    );

    const buttonClassList = classNames(
      classes["Accordion--Button"],
      !extraAction && arrowDisplay === "right"
        ? classes["Accordion--buttonReverse"]
        : null,
      buttonClassName,
      buttonProps?.className
    );

    const chevronIconClassList = classNames(
      classes["Accordion--chevronIcon"],
      isOpen ? classes["Accordion--chevronIcon-isOpen"] : null
    );

    const chevronWrapperClassList = classNames(
      classes["Accordion--chevronIconWrapper"],
      extraAction && arrowDisplay === "right"
        ? classes["Accordion--chevronIconButton"]
        : null
    );

    let baseIcon: ReactNode;
    if (arrowDisplay !== "none") {
      baseIcon = (
        <SvgIcon
          className={chevronIconClassList}
          icon="chevronRight"
          size="small"
        />
      );
    }

    let icon: ReactNode;
    let iconButton: ReactNode;
    const buttonId = buttonProps?.id ?? htmlIdGenerator()();
    if (extraAction && arrowDisplay === "right") {
      iconButton = (
        <button
          aria-controls={id}
          aria-expanded={isOpen}
          aria-labelledby={buttonId}
          tabIndex={-1}
          className={chevronWrapperClassList}
          onClick={this.onToggle}
        >
          {baseIcon}
        </button>
      );
    } else if (arrowDisplay !== "none") {
      icon = <span className={chevronWrapperClassList}>{baseIcon}</span>;
    }

    let optionalAction = null;

    if (extraAction && !isLoading) {
      optionalAction = (
        <div className={classes["Accordion--extraAction"]}>{extraAction}</div>
      );
    } else if (isLoading) {
      optionalAction = (
        <div className={classes["Accordion--extraAction"]}>
          <LoadingSpinner color="primary" size="small" />
        </div>
      );
    }

    let childrenContent: any;
    if (isLoading && isLoadingMessage) {
      childrenContent = (
        <>
          <LoadingSpinner
            className={classes["Accordion--loadingSpinner"]}
            color="primary"
            size="medium"
          />
          <span>{isLoadingMessage ? isLoadingMessage : null}</span>
        </>
      );
    } else {
      childrenContent = children;
    }

    return (
      <div className={classList} {...rest}>
        <div className={classes["Accordion--triggerWrapper"]}>
          <button
            {...buttonProps}
            id={buttonId}
            aria-controls={id}
            aria-expanded={isOpen}
            onClick={this.onToggle}
            className={buttonClassList}
            type="button"
          >
            {icon}
            <span className={buttonContentClassName}>{buttonContent}</span>
          </button>
          {optionalAction}
          {iconButton}
        </div>

        <div
          className={classes["Accordion--childrenWrapper"]}
          ref={(node) => {
            this.childWrapper = node;
          }}
          tabIndex={-1}
          role="region"
          aria-labelledby={buttonId}
          id={id}
        >
          <ResizeObserver onResize={this.setChildContentHeight}>
            {(resizeRef) => (
              <div
                ref={(ref) => {
                  this.setChildContentRef(ref);
                  resizeRef(ref);
                }}
              >
                <div className={childrenClassList}>{childrenContent}</div>
              </div>
            )}
          </ResizeObserver>
        </div>
      </div>
    );
  }
}

import React, {
  cloneElement,
  Component,
  ReactElement,
  ReactNode,
} from 'react';

import classes from './ContextMenuPanel.module.css';
import { SvgIcon } from '../../SvgIcon/SvgIcon';
import { ResizeObserver } from '../../Observer/ResizeObserver/ResizeObserver';
import { ContextMenuItem } from '../ContextMenuItem/ContextMenuItem';

export type ContextMenuPanelHeightChangeHandler = (height: number) => void;
export type ContextMenuPanelTransitionType = 'in' | 'out';
export type ContextMenuPanelTransitionDirection = 'next' | 'previous';
export type ContextMenuPanelShowPanelCallback = (
  currentPanelIndex?: number
) => void;

export interface ContextMenuPanelProps {
  initialFocusedItemIndex?: number;
  items?: ReactElement[];
  onClose?: any;
  onHeightChange?: ContextMenuPanelHeightChangeHandler;
  onTransitionComplete?: any;
  onUseKeyboardToNavigate?: any;
  showNextPanel?: ContextMenuPanelShowPanelCallback;
  showPreviousPanel?: any;
  title?: ReactNode;
  transitionDirection?: ContextMenuPanelTransitionDirection;
  transitionType?: ContextMenuPanelTransitionType;
  watchedItemProps?: string[];
  className?: string;
}

type Props = ContextMenuPanelProps;

const transitionDirectionAndTypeToClassNameMap = {
  next: {
    in: 'ContextMenuPanel-txInLeft',
    out: 'ContextMenuPanel-txOutLeft',
  },
  previous: {
    in: 'ContextMenuPanel-txInRight',
    out: 'ContextMenuPanel-txOutRight',
  },
};

interface State {
  prevProps: {
    items: Props['items'];
  };
  menuItems: HTMLElement[];
  currentHeight?: number;
  height?: number;
}

export class ContextMenuPanel extends Component<Props, State> {
  static defaultProps: Partial<Props> = {
    items: [],
  };

  private _isMounted = false;
  private backButton?: HTMLElement | null = null;
  private content?: HTMLElement | null = null;
  private panel?: HTMLElement | null = null;

  constructor(props: Props) {
    super(props);

    this.state = {
      prevProps: {
        items: this.props.items,
      },
      menuItems: [],
      currentHeight: undefined,
    };
  }

  onTransitionComplete = () => {
    if (this.props.onTransitionComplete) {
      this.props.onTransitionComplete();
    }
  };

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  static getDerivedStateFromProps(
    nextProps: Props,
    prevState: State
  ): Partial<State> | null {
    let needsUpdate = false;
    const nextState: Partial<State> = {};

    // Clear refs to menuItems if we're getting new ones.
    if (nextProps.items !== prevState.prevProps.items) {
      needsUpdate = true;
      nextState.menuItems = [];
      nextState.prevProps = { items: nextProps.items };
    }

    if (needsUpdate) {
      return nextState;
    }
    return null;
  }

  getWatchedPropsForItems(items: ReactElement[]) {
    // This lets us compare prevProps and nextProps among items so we can re-render if our items
    // have changed.
    const { watchedItemProps } = this.props;

    // Create fingerprint of all item's watched properties
    if (items.length && watchedItemProps && watchedItemProps.length) {
      return JSON.stringify(
        items.map((item) => {
          // Create object of item properties and values
          const props: any = {
            key: item.key,
          };
          watchedItemProps.forEach((prop: string) => {
            props[prop] = item.props[prop];
          });
          return props;
        })
      );
    }

    return null;
  }

  didItemsChange(prevItems: ReactElement[], nextItems: ReactElement[]) {
    // If the count of items has changed then update
    if (prevItems.length !== nextItems.length) {
      return true;
    }

    // Check if any watched item properties changed by quick string comparison
    if (
      this.getWatchedPropsForItems(nextItems) !==
      this.getWatchedPropsForItems(prevItems)
    ) {
      return true;
    }
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {

    if (nextProps.transitionType !== this.props.transitionType) {
      return true;
    }

    // **
    // this component should have either items or children,
    // if there are items we can determine via `watchedItemProps` if we should update
    // if there are children we can't know if they have changed so return true
    // **

    if (
      (this.props.items && this.props.items.length > 0) ||
      (nextProps.items && nextProps.items.length > 0)
    ) {
      if (this.didItemsChange(this.props.items!, nextProps.items!)) {
        return true;
      }
    }

    // it's not possible (in any good way) to know if `children` has changed, assume they might have
    if (this.props.children != null) {
      return true;
    }

    return false;
  }

  updateHeight() {
    const currentHeight = this.panel ? this.panel.clientHeight : 0;

    if (this.state.height !== currentHeight) {
      if (this.props.onHeightChange) {
        this.props.onHeightChange(currentHeight);

        this.setState({ height: currentHeight });
      }
    }
  }

  menuItemRef = (index: number, node: HTMLElement) => {
    // There's a weird bug where if you navigate to a panel without items, then this callback
    // is still invoked, so we have to do a truthiness check.
    if (node) {
      // Store all menu items.
      this.state.menuItems[index] = node;
    }
  };

  panelRef = (node: HTMLElement | null) => {
    this.panel = node;

    this.updateHeight();
  };

  contentRef = (node: HTMLElement | null) => {
    this.content = node;
  };

  render() {
    const {
      children,
      onClose,
      title,
      onHeightChange,
      transitionType,
      transitionDirection,
      onTransitionComplete,
      items,
      watchedItemProps,
      initialFocusedItemIndex,
      showNextPanel,
      showPreviousPanel,
      className,
      ...rest
    } = this.props;
    let panelTitle;

    if (title) {
      if (Boolean(onClose)) {
        panelTitle = (
          <React.Fragment>
            <button
              className={classes['ContextMenuPanelTitleButton']}
              type="button"
              onClick={onClose}
              ref={(node) => {
                this.backButton = node;
              }}
            >
              <SvgIcon icon="arrowLeft" />
              <p className={classes['ContextMenuPanelTitleText']}>{title}</p>
            </button>
            <hr className={classes['TitleDivider']} />
          </React.Fragment>
        );
      } else {
        panelTitle = (
          <React.Fragment>
            <div className={classes['ContextMenuPanelTitle']}>
              <p className={classes['ContextMenuPanelTitleText']}>{title}</p>
            </div>
            <hr className={classes['TitleDivider']} />
          </React.Fragment>
        );
      }
    }

    const classList = [
      className,
      classes['ContextMenuPanel'],
      transitionDirection &&
        transitionType &&
        transitionDirectionAndTypeToClassNameMap[transitionDirection]
        ? classes[transitionDirectionAndTypeToClassNameMap[transitionDirection][
            transitionType
          ]]
        : undefined
        ];

    const content =
      items && items.length
        ? items.map((MenuItem, index) =>
            MenuItem.type === ContextMenuItem
              ? cloneElement(MenuItem, {
                  buttonRef: this.menuItemRef.bind(this, index),
                })
              : MenuItem
          )
        : children;

    return (
      <div
        ref={this.panelRef}
        className={classList.join(' ')}
        tabIndex={0}
        onAnimationEnd={this.onTransitionComplete}
        {...rest}>
        {panelTitle}

        <div ref={this.contentRef}>
          <ResizeObserver onResize={() => this.updateHeight()}>
            {(resizeRef) => <div className={classes['ItemsContainer']} ref={resizeRef}>{content}</div>}
          </ResizeObserver>
        </div>
      </div>
    );
  }
}
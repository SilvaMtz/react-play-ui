import React, {
  Component,
  ReactElement,
  ReactNode,
} from 'react';

import classes from './ContextMenu.module.css';

import {
  ContextMenuPanel,
  ContextMenuPanelTransitionDirection,
  ContextMenuPanelTransitionType,
} from './ContextMenuPanel/ContextMenuPanel';
import {
  ContextMenuItem,
  ContextMenuItemProps,
} from './ContextMenuItem/ContextMenuItem';

export type ContextMenuPanelId = string | number;

export type ContextMenuPanelItemDescriptorEntry = Omit<
  ContextMenuItemProps,
  'hasPanel'
> & {
  name: React.ReactNode;
  key?: string;
  panel?: ContextMenuPanelId;
};

export type ContextMenuPanelItemDescriptor = ContextMenuPanelItemDescriptorEntry;

export interface ContextMenuPanelDescriptor {
  id: ContextMenuPanelId;
  title?: string;
  items?: ContextMenuPanelItemDescriptor[];
  content?: ReactNode;
  width?: number;
}

export type ContextMenuProps = {
    panels?: ContextMenuPanelDescriptor[];
    initialPanelId?: ContextMenuPanelId;
    transparent?: boolean;
    hasShadow?: boolean;
    width?: number | string;
  };

function mapIdsToPanels(panels: ContextMenuPanelDescriptor[]) {
  const map: { [id: string]: ContextMenuPanelDescriptor } = {};

  panels.forEach((panel) => {
    map[panel.id] = panel;
  });

  return map;
}

function mapIdsToPreviousPanels(panels: ContextMenuPanelDescriptor[]) {
  const idToPreviousPanelIdMap: { [panel: string]: ContextMenuPanelId } = {};

  panels.forEach((panel) => {
    if (Array.isArray(panel.items)) {
      panel.items.forEach((item) => {
        const isCloseable = item.panel !== undefined;
        if (isCloseable) {
          idToPreviousPanelIdMap[item.panel!] = panel.id;
        }
      });
    }
  });

  return idToPreviousPanelIdMap;
}

function mapPanelItemsToPanels(panels: ContextMenuPanelDescriptor[]) {
  const idAndItemIndexToPanelIdMap: {
    [id: string]: { [index: string]: ContextMenuPanelId };
  } = {};

  panels.forEach((panel) => {
    idAndItemIndexToPanelIdMap[panel.id] = {};

    if (panel.items) {
      panel.items.forEach((item, index) => {
        if (item.panel) {
          idAndItemIndexToPanelIdMap[panel.id][index] = item.panel;
        }
      });
    }
  });

  return idAndItemIndexToPanelIdMap;
}

interface State {
  prevProps: {
    panels?: ContextMenuPanelDescriptor[];
  };
  idToPanelMap: { [id: string]: ContextMenuPanelDescriptor };
  idToPreviousPanelIdMap: { [panel: string]: ContextMenuPanelId };
  idAndItemIndexToPanelIdMap: {
    [id: string]: { [index: string]: ContextMenuPanelId };
  };
  idToRenderedItemsMap: { [id: string]: ReactElement[] };

  height?: number;
  outgoingPanelId?: ContextMenuPanelId;
  incomingPanelId?: ContextMenuPanelId;
  transitionDirection?: ContextMenuPanelTransitionDirection;
  isOutgoingPanelVisible: boolean;
  isUsingKeyboardToNavigate: boolean;
}

export class ContextMenu extends Component<ContextMenuProps, State> {
  static defaultProps: Partial<ContextMenuProps> = {
    panels: [],
  };

  static getDerivedStateFromProps(
    nextProps: ContextMenuProps,
    prevState: State
  ): Partial<State> | null {
    const { panels } = nextProps;

    if (panels && prevState.prevProps.panels !== panels) {
      return {
        prevProps: { panels },
        idToPanelMap: mapIdsToPanels(panels),
        idToPreviousPanelIdMap: mapIdsToPreviousPanels(panels),
        idAndItemIndexToPanelIdMap: mapPanelItemsToPanels(panels),
      };
    }

    return null;
  }

  constructor(props: ContextMenuProps) {
    super(props);

    this.state = {
      prevProps: {},
      idToPanelMap: {},
      idToPreviousPanelIdMap: {},
      idAndItemIndexToPanelIdMap: {},
      idToRenderedItemsMap: this.mapIdsToRenderedItems(this.props.panels),

      height: undefined,
      outgoingPanelId: undefined,
      incomingPanelId: props.initialPanelId,
      transitionDirection: undefined,
      isOutgoingPanelVisible: false,
      isUsingKeyboardToNavigate: false,
    };
  }

  componentDidUpdate(prevProps: ContextMenuProps) {
    if (prevProps.panels !== this.props.panels) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        idToRenderedItemsMap: this.mapIdsToRenderedItems(this.props.panels),
      });
    }
  }

  hasPreviousPanel = (panelId: ContextMenuPanelId) => {
    const previousPanelId = this.state.idToPreviousPanelIdMap[panelId];
    return typeof previousPanelId !== 'undefined';
  };

  showPanel(
    panelId: ContextMenuPanelId,
    direction?: ContextMenuPanelTransitionDirection
  ) {
    this.setState({
      outgoingPanelId: this.state.incomingPanelId,
      incomingPanelId: panelId,
      transitionDirection: direction,
      isOutgoingPanelVisible: true,
    });
  }

  showNextPanel = (itemIndex?: number) => {
    if (itemIndex == null) {
      return;
    }

    const nextPanelId = this.state.idAndItemIndexToPanelIdMap[
      this.state.incomingPanelId!
    ][itemIndex];

    if (nextPanelId) {
      this.showPanel(nextPanelId, 'next');
    }
  };

  showPreviousPanel = () => {
    // If there's a previous panel, then we can close the current panel to go back to it.
    if (this.hasPreviousPanel(this.state.incomingPanelId!)) {
      const previousPanelId = this.state.idToPreviousPanelIdMap[
        this.state.incomingPanelId!
      ];

      // Set focus on the item which shows the panel we're leaving.
      // const previousPanel = this.state.idToPanelMap[previousPanelId];

      this.showPanel(previousPanelId, 'previous');
    }
  };

  onIncomingPanelHeightChange = (height: number) => {
    this.setState(({ height: prevHeight }) => {
      if (height === prevHeight) {
        return null;
      }

      return { height };
    });
  };

  onOutGoingPanelTransitionComplete = () => {
    this.setState({
      isOutgoingPanelVisible: false,
    });
  };

  mapIdsToRenderedItems = (panels: ContextMenuPanelDescriptor[] = []) => {
    const idToRenderedItemsMap: { [id: string]: ReactElement[] } = {};

    // Pre-rendering the items lets us check reference equality inside of ContextMenuPanel.
    panels.forEach((panel) => {
      idToRenderedItemsMap[panel.id] = this.renderItems(panel.items);
    });

    return idToRenderedItemsMap;
  };

  renderItems(items: ContextMenuPanelItemDescriptor[] = []) {
    return items.map((item, index) => {

      const {
        panel,
        name,
        key,
        icon,
        iconFill,
        onClick,
        ...rest
      } = item;

      const onClickHandler = panel
        ? (event: React.MouseEvent) => {
            if (onClick && event) {
              event.persist();
            }
            // This component is commonly wrapped in a OutsideClickDetector, which means we'll
            // need to wait for that logic to complete before re-rendering the DOM via showPanel.
            window.requestAnimationFrame(() => {
              if (onClick) {
                onClick(event);
              }
              this.showNextPanel(index);
            });
          }
        : onClick;

      return (
        <ContextMenuItem
          key={key || (typeof name === 'string' ? name : undefined) || index}
          icon={icon}
          iconFill={iconFill}
          onClick={onClickHandler}
          hasPanel={Boolean(panel)}
          {...rest}>
          {name}
        </ContextMenuItem>
      );
    });
  }

  renderPanel(
    panelId: ContextMenuPanelId,
    transitionType: ContextMenuPanelTransitionType
  ) {
    const panel = this.state.idToPanelMap[panelId];

    if (!panel) {
      return;
    }

    // As above, we need to wait for OutsideClickDetector to complete its logic before
    // re-rendering via showPanel.
    let onClose;
    if (this.hasPreviousPanel(panelId)) {
      onClose = () => window.requestAnimationFrame(this.showPreviousPanel);
    }

    return (
      <ContextMenuPanel
        key={panelId}
        className={classes['ContextMenu__panel']}
        onHeightChange={
          transitionType === 'in' ? this.onIncomingPanelHeightChange : undefined
        }
        onTransitionComplete={
          transitionType === 'out'
            ? this.onOutGoingPanelTransitionComplete
            : undefined
        }
        title={panel.title}
        onClose={onClose}
        transitionType={
          this.state.isOutgoingPanelVisible ? transitionType : undefined
        }
        transitionDirection={
          this.state.isOutgoingPanelVisible
            ? this.state.transitionDirection
            : undefined
        }
        items={this.state.idToRenderedItemsMap[panelId]}
        showNextPanel={this.showNextPanel}
        showPreviousPanel={this.showPreviousPanel}>
        {panel.content}
      </ContextMenuPanel>
    );
  }

  render() {
    const {
      panels,
      initialPanelId,
      transparent = false,
      hasShadow = true,
      width = 256,
      ...rest
    } = this.props;

    const incomingPanel = this.renderPanel(this.state.incomingPanelId!, 'in');
    let outgoingPanel;

    if (this.state.isOutgoingPanelVisible) {
      outgoingPanel = this.renderPanel(this.state.outgoingPanelId!, 'out');
    }

    let widthValue;
    if (width) {
      widthValue = width
    } else {
      widthValue =
        this.state.idToPanelMap[this.state.incomingPanelId!] &&
        this.state.idToPanelMap[this.state.incomingPanelId!].width
          ? this.state.idToPanelMap[this.state.incomingPanelId!].width
          : undefined;
    }

    const classList = [
      classes['ContextMenu'],
      transparent ? classes['ContextMenu--transparent'] : null,
      hasShadow ? classes['ContextMenu--hasShadow'] : null
    ]

    return (
      <div
        className={classList.join(' ')}
        style={{ height: this.state.height, width: widthValue }}
        {...rest}>
        {outgoingPanel}
        {incomingPanel}
      </div>
    );
  }
}

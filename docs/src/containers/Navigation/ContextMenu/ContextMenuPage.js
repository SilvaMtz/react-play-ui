import React from 'react';
import { ContextMenu } from 'react-play-ui';

export const ContextMenuPage = (props) => {

  const sidenavPanels = [
    {
      id: 0,
      items: [
        {
          id: 0,
          name: "Home",
          icon: "home",
          label: "Home",
          href: "/",
        },
        {
          id: 1,
          name: "Layout",
          icon: "viewGrid",
          label: "Layout",
          panel: 1,
        },
        {
          id: 2,
          name: "Display",
          icon: "collection",
          label: "Display",
          panel: 2,
        },
        {
          id: 3,
          name: "Navigation",
          icon: "map",
          label: "Navigation",
          panel: 3,
        },
        {
          id: 4,
          name: "Inputs",
          icon: "chatAlt",
          label: "Inputs",
          href: "/inputs",
        },
        {
          id: 5,
          name: "Data",
          icon: "chartPie",
          label: "Data",
          panel: 5,
        },
      ],
    },
    {
      id: 1,
      title: "Layout",
      items: [
        {
          id: 1,
          name: "FlexGroup",
          label: "Flex Group",
          href: "/layout/flex-group",
        },
        {
          id: 2,
          name: "FlexItem",
          label: "Flex Item",
          href: "/layout/flex-item",
        },
        {
          id: 3,
          name: "Divider",
          label: "Divider",
          href: "/layout/divider",
        },
      ],
    },
    {
      id: 2,
      title: "Display",
      items: [
        {
          id: 0,
          name: "PanelCard",
          label: "Panel Card",
          href: "/display/panel-card",
        },
        {
          id: 1,
          name: "Card",
          label: "Card",
          href: "/display/card",
        },
        {
          id: 2,
          name: "Modal",
          label: "Modal",
          href: "/display/modal",
        },
        {
          id: 3,
          name: "Widget",
          label: "Widget",
          href: "/display/widget",
        },
        {
          id: 4,
          name: "Accordion",
          label: "Accordion (WIP)",
          href: "/display/accordion",
        },
        {
          id: 5,
          name: "Tooltip",
          label: "Tooltip (WIP)",
          href: "/display/tooltip",
        },
        {
          id: 6,
          name: "Popover",
          label: "Popover (WIP)",
          href: "/display/popover",
        },
        {
          id: 7,
          name: "Callout",
          label: "Callout",
          href: "/display/callout",
        },
        {
          id: 8,
          name: "Toast",
          label: "Toast",
          href: "/display/toast",
        },
      ],
    },
    {
      id: 3,
      title: "Navigation",
      items: [
        {
          id: 0,
          name: "Sidenav",
          label: "Sidenav",
          href: "/navigation/sidenav",
        },
        {
          id: 1,
          name: "Toolbar",
          label: "Toolbar",
          href: "/navigation/toolbar",
        },
        {
          id: 2,
          name: "BottomNav",
          label: "Bottom Nav (WIP)",
          href: "/navigation/bottom-nav",
        },
        {
          id: 3,
          name: "ContextMenu",
          label: "Context Menu",
          href: "/navigation/context-menu",
        },
        {
          id: 4,
          name: "ActionButton",
          label: "Button",
          href: "/navigation/button",
        },
        {
          id: 5,
          name: "IconButton",
          label: "Icon Button",
          href: "/navigation/icon-button",
        },
        {
          id: 6,
          name: "Tabs",
          label: "Tabs",
          href: "/navigation/tabs",
        },
      ],
    },
    {
      id: 5,
      title: "Data",
      items: [
        {
          id: 0,
          name: "ProgressLoading",
          label: "Progress",
          href: "/data/progress",
        },
        {
          id: 1,
          name: "Avatar",
          label: "Avatar",
          href: "/data/avatar"
        },
        {
          id: 2,
          name: "NumberBadge",
          label: "Number Badge",
          href: "/data/number-badge",
        },
        {
          id: 3,
          name: "Chip",
          label: "Chip (WIP)",
          href: "/data/chip",
        },
        {
          id: 4,
          name: "SvgIcon",
          label: "Icons",
          href: "/data/icons",
        },
      ],
    },
  ];

  return (
    <div>
      <h2>Context Menu</h2>
      <ContextMenu
        panels={sidenavPanels}
        initialPanelId={0}
      />
    </div>
  )
}
import React, { FunctionComponent, useState } from "react";
import { Sidenav, Toolbar, IconButton, ThemeToggler } from "react-play-ui";
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  theme: any;
  toggleTheme: any;
}

export const Layout: FunctionComponent<LayoutProps> = ({
  theme,
  toggleTheme,
}) => {
  const currentRoute = useLocation();
  const [sidenavOpen, setSidenavOpen] = useState(false);

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
          isActive: currentRoute.pathname === "/"
        },
        {
          id: 1,
          name: "Layout",
          icon: "viewGrid",
          label: "Layout",
          isActive: currentRoute.pathname.includes("/layout"),
          panel: 1,
        },
        {
          id: 2,
          name: "Display",
          icon: "collection",
          label: "Display",
          isActive: currentRoute.pathname.includes("/display"),
          panel: 2,
        },
        {
          id: 3,
          name: "Navigation",
          icon: "map",
          label: "Navigation",
          isActive: currentRoute.pathname.includes("/navigation"),
          panel: 3,
        },
        {
          id: 4,
          name: "Inputs",
          icon: "chatAlt",
          label: "Inputs",
          href: "/inputs",
          isActive: currentRoute.pathname === "/inputs",
        },
        {
          id: 5,
          name: "Data",
          icon: "chartPie",
          label: "Data",
          isActive: currentRoute.pathname.includes("/data"),
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
          isActive: currentRoute.pathname === "/layout/flex-group"
        },
        {
          id: 2,
          name: "FlexItem",
          label: "Flex Item",
          href: "/layout/flex-item",
          isActive: currentRoute.pathname === "/layout/flex-item"
        },
        {
          id: 3,
          name: "Divider",
          label: "Divider",
          href: "/layout/divider",
          isActive: currentRoute.pathname === "/layout/divider"
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
          isActive: currentRoute.pathname === "/display/panel-card"
        },
        {
          id: 1,
          name: "Card",
          label: "Card",
          href: "/display/card",
          isActive: currentRoute.pathname === "/display/card"
        },
        {
          id: 2,
          name: "Modal",
          label: "Modal",
          href: "/display/modal",
          isActive: currentRoute.pathname === "/display/modal"
        },
        {
          id: 3,
          name: "Widget",
          label: "Widget",
          href: "/display/widget",
          isActive: currentRoute.pathname === "/display/widget"
        },
        {
          id: 4,
          name: "Accordion",
          label: "Accordion (WIP)",
          href: "/display/accordion",
          isActive: currentRoute.pathname === "/display/accordion"
        },
        {
          id: 5,
          name: "Tooltip",
          label: "Tooltip (WIP)",
          href: "/display/tooltip",
          isActive: currentRoute.pathname === "/display/tooltip"
        },
        {
          id: 6,
          name: "Popover",
          label: "Popover",
          href: "/display/popover",
          isActive: currentRoute.pathname === "/display/popover"
        },
        {
          id: 7,
          name: "Callout",
          label: "Callout",
          href: "/display/callout",
          isActive: currentRoute.pathname === "/display/callout"
        },
        {
          id: 8,
          name: "Toast",
          label: "Toast",
          href: "/display/toast",
          isActive: currentRoute.pathname === "/display/toast"
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
          isActive: currentRoute.pathname === "/navigation/sidenav"
        },
        {
          id: 1,
          name: "Toolbar",
          label: "Toolbar",
          href: "/navigation/toolbar",
          isActive: currentRoute.pathname === "/navigation/toolbar"
        },
        {
          id: 2,
          name: "BottomNav",
          label: "Bottom Nav (WIP)",
          href: "/navigation/bottom-nav",
          isActive: currentRoute.pathname === "/navigation/bottom-nav"
        },
        {
          id: 3,
          name: "ContextMenu",
          label: "Context Menu",
          href: "/navigation/context-menu",
          isActive: currentRoute.pathname === "/navigation/context-menu"
        },
        {
          id: 4,
          name: "ActionButton",
          label: "Button",
          href: "/navigation/button",
          isActive: currentRoute.pathname === "/navigation/button"
        },
        {
          id: 5,
          name: "IconButton",
          label: "Icon Button",
          href: "/navigation/icon-button",
          isActive: currentRoute.pathname === "/navigation/icon-button"
        },
        {
          id: 6,
          name: "Tabs",
          label: "Tabs",
          href: "/navigation/tabs",
          isActive: currentRoute.pathname === "/navigation/tabs"
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
          isActive: currentRoute.pathname === "/data/progress"
        },
        {
          id: 1,
          name: "Avatar",
          label: "Avatar",
          isActive: currentRoute.pathname === "/data/avatar",
          href: "/data/avatar"
        },
        {
          id: 2,
          name: "NumberBadge",
          label: "Number Badge",
          isActive: currentRoute.pathname === "/data/number-badge",
          href: "/data/number-badge",
        },
        {
          id: 3,
          name: "Chip",
          label: "Chip (WIP)",
          isActive: currentRoute.pathname === "/data/chip",
          href: "/data/chip",
        },
        {
          id: 4,
          name: "SvgIcon",
          label: "Icons",
          isActive: currentRoute.pathname === "/data/icons",
          href: "/data/icons",
        },
      ],
    },
  ];

  const toolbarSections = [
    {
      id: 1,
      items: [
        {
          id: 1,
          content: (
            <IconButton
              icon="menu"
              onClick={() => {
                setSidenavOpen(true);
              }}
            />
          ),
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          id: 1,
          content: <ThemeToggler theme={theme} toggleTheme={toggleTheme} />,
        },
      ],
    },
  ];

  let sidenavInstance;
  if (sidenavOpen) {
    sidenavInstance = (
      <Sidenav
        header={
          <h4
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              margin: 0,
            }}
          >
            React Play UI
          </h4>
        }
        float={true}
        panels={sidenavPanels}
        itemsSize="small"
        onClose={() => setSidenavOpen(false)}
      />
    );
  }

  return (
    <React.Fragment>
      <Toolbar sections={toolbarSections} />
      {sidenavInstance}
    </React.Fragment>
  );
};

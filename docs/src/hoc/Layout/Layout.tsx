import React, { FunctionComponent, useState } from "react";
import { Sidenav, Toolbar, IconButton, ThemeToggler } from "react-play-ui";

interface LayoutProps {
  theme: any;
  toggleTheme: any;
}

export const Layout: FunctionComponent<LayoutProps> = ({
  theme,
  toggleTheme,
}) => {
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
          panel: 4,
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
        },
        {
          id: 2,
          name: "FlexItem",
          label: "Flex Item",
        },
        {
          id: 3,
          name: "Divider",
          label: "Divider",
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
        },
        {
          id: 1,
          name: "Card",
          label: "Card",
        },
        {
          id: 2,
          name: "Modal",
          label: "Modal",
        },
        {
          id: 3,
          name: "Widget",
          label: "Widget (WIP)",
        },
        {
          id: 4,
          name: "Accordion",
          label: "Accordion (WIP)",
        },
        {
          id: 5,
          name: "Tooltip",
          label: "Tooltip (WIP)",
        },
        {
          id: 6,
          name: "Popover",
          label: "Popover (WIP)",
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
        },
        {
          id: 1,
          name: "Toolbar",
          label: "Toolbar",
        },
        {
          id: 2,
          name: "BottomNav",
          label: "Bottom Nav (WIP)",
        },
        {
          id: 3,
          name: "ContextMenu",
          label: "Context Menu",
        },
        {
          id: 4,
          name: "ActionButton",
          label: "Button",
        },
        {
          id: 5,
          name: "IconButton",
          label: "Icon Button",
        },
        {
          id: 6,
          name: "Tabs",
          label: "Tabs (WIP)",
        },
      ],
    },
    {
      id: 4,
      title: "Inputs",
      items: [
        {
          id: 0,
          name: "InputField",
          label: "Input Field",
        },
        {
          id: 1,
          name: "TextField",
          label: "Text Field",
        },
        {
          id: 2,
          name: "SelectField",
          label: "SelectField (WIP)",
        },
        {
          id: 3,
          name: "Checkbox",
          label: "Checkbox (WIP)",
        },
        {
          id: 4,
          name: "Radios",
          label: "Radios (WIP)",
        },
        {
          id: 5,
          name: "Slider",
          label: "Slider (WIP)",
        },
        {
          id: 6,
          name: "Switch",
          label: "Switch (WIP)",
        },
        {
          id: 6,
          name: "DateTime",
          label: "Date/Time Picker",
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
          label: "Progress (WIP)",
        },
        {
          id: 1,
          name: "Avatar",
          label: "Avatar (WIP)",
        },
        {
          id: 2,
          name: "NumberBadge",
          label: "Number Badge (WIP)",
        },
        {
          id: 3,
          name: "Chip",
          label: "Chip (WIP)",
        },
        {
          id: 4,
          name: "SvgIcon",
          label: "Icons",
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
        itemsSize="large"
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

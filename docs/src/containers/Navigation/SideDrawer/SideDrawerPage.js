import React, { useState } from "react";
import { ActionButton, SideDrawer } from "react-play-ui";

export const SideDrawerPage = (props) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [isDocked, setIsDocked] = useState(false);

  const drawerPanels = [
    {
      id: 0,
      items: [
        {
          id: 0,
          name: "dock",
          icon: "cursorClick",
          label: "Click to dock",
          onClick: () => setIsDocked(!isDocked),
        },
        {
          id: 1,
          name: "Layout",
          icon: "viewGrid",
          label: "Layout",
        },
        {
          id: 2,
          name: "Display",
          icon: "collection",
          label: "Display",
        },
        {
          id: 3,
          name: "Navigation",
          icon: "map",
          label: "Navigation",
        },
        {
          id: 4,
          name: "Inputs",
          icon: "chatAlt",
          label: "Inputs",
        },
        {
          id: 5,
          name: "Data",
          icon: "chartPie",
          label: "Data",
        },
        {
          id: 6,
          name: "Display1",
          icon: "collection",
          label: "Display",
        },
        {
          id: 7,
          name: "Navigation2",
          icon: "map",
          label: "Navigation",
        },
        {
          id: 8,
          name: "Inputs3",
          icon: "chatAlt",
          label: "Inputs",
        },
        {
          id: 9,
          name: "Data4",
          icon: "chartPie",
          label: "Data",
        },
      ],
    },
  ];

  return (
    <div>
      <h2>SideDrawer</h2>
      <SideDrawer
        panels={drawerPanels}
        float={false}
        onClose={() => setSideDrawerOpen(false)}
        isDocked={isDocked}
        isOpen={sideDrawerOpen}
        button={
          <ActionButton
            label="Open Drawer"
            color="primary"
            fill
            onClick={() => setSideDrawerOpen(true)}
          />
        }
      />
    </div>
  );
};

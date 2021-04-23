import React, { useState } from "react";
import { ActionButton, ContextMenu, PlayPopover } from "react-play-ui";

export const PopoverPage = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const cmPanels = [
    {
      id: 0,
      items: [
        {
          id: 0,
          name: "User Profile",
          icon: "user",
          label: "User Profile",
        },
        {
          id: 1,
          name: "Display",
          icon: "eye",
          label: "Display Settings",
          panel: 1,
        },
        {
          id: 2,
          name: "Privacy Settings",
          icon: "lockClosed",
          label: "Privacy Settings"
        },
        {
          id: 3,
          name: "Logout",
          icon: "logout",
          label: "Log out",
          onClick: () => alert("You have logged out!"),
        }
      ]
    },
    {
      id: 1,
      title: "Display Settings",
      items: [
        {
          id: 0,
          name: "Dark Mode",
          icon: "moon",
          label: "Dark Mode"
        },
      ]
    }
  ]

  return (
    <div>
      <h2>Popover</h2>
      <PlayPopover
        isOpen={popoverOpen}
        onClickOutside={() => setPopoverOpen(false)}
        reposition={true}
        positions={['bottom', 'left']}
        content={<ContextMenu panels={cmPanels} initialPanelId={0} />}
      >
        <ActionButton
          label="Popover!"
          onClick={() => setPopoverOpen(true)}
          color="primary"
          fill
        />
      </PlayPopover>
    </div>
  );
};

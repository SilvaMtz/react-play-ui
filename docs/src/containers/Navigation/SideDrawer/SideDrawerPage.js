import { useState } from "react";
import { Accordion, ActionButton, ContextMenu, SideDrawer } from "react-play-ui";

export const SideDrawerPage = (props) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [isDocked, setIsDocked] = useState(false);

  const layoutPanels = [
    {
      id: 1,
      items: [
        {
          id: 1,
          name: "Flex Grid",
          label: "Flex Grid",
          onClick: () => {}
        },
        {
          id: 2,
          name: "Flex Item",
          label: "Flex Item",
          onClick: () => {}
        },
        {
          id: 3,
          name: "Flex Group",
          label: "Flex Group",
          onClick: () => {}
        }
      ]
    }
  ]

  return (
    <div>
      <h2>SideDrawer</h2>
      <SideDrawer
        float={true}
        onClose={() => setSideDrawerOpen(false)}
        isDocked={isDocked}
        toolbarZIndexLocation="below"
        isOpen={sideDrawerOpen}
        style={{ padding: 6 }}
        button={
          <ActionButton
            label="Open Drawer"
            color="primary"
            fill
            onClick={() => setSideDrawerOpen(true)}
          />
        }
      >
        <ActionButton
          restrainWidth={false}
          color="primary"
          fill
          onClick={() => setIsDocked(!isDocked)}
          style={{ marginBottom: 4 }}
        >
          Docked: {isDocked ? "ON" : "OFF"}
        </ActionButton>
        <Accordion
          buttonPaddingSize="s"
          paddingSize="none"
          arrowDisplay="left"
          icon="viewGrid"
          iconSize="small"
          buttonContent="Layout"
          style={{ marginBottom: 4 }}
        >
          <ContextMenu transparent itemsSize="small" panels={layoutPanels} initialPanelId={1} />
        </Accordion>
      </SideDrawer>
    </div>
  );
};

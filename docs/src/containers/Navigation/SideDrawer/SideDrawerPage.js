import { useState } from "react";
import { ActionButton, SideDrawer } from "react-play-ui";

export const SideDrawerPage = (props) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [isDocked, setIsDocked] = useState(false);

  return (
    <div>
      <h2>SideDrawer</h2>
      <SideDrawer
        float={true}
        onClose={() => setSideDrawerOpen(false)}
        isDocked={isDocked}
        toolbarZIndexLocation="below"
        isOpen={sideDrawerOpen}
        style={{ padding: 24 }}
        button={
          <ActionButton
            label="Open Drawer"
            color="primary"
            fill
            onClick={() => setSideDrawerOpen(true)}
          />
        }
      >
        <ActionButton color="primary" fill onClick={() => setIsDocked(!isDocked)}>Docked: {isDocked ? "ON" : "OFF"}</ActionButton>
      </SideDrawer>
    </div>
  );
};

import React, { useState } from 'react';
import { Toolbar, SideDrawer, IconButton, ActionButton } from 'react-play-ui'

export const ToolbarPage = (props) => {

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  const [isFixed, setIsFixed] = useState(false)

  const toolbarSections = [
    {
      id: 1,
      items: [
        {
          id: 1,
          content: (
            <SideDrawer
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
              isDocked={false}
              itemsSize="small"
              isOpen={sideDrawerOpen}
              toolbarZIndexLocation={isFixed ? "below" : 'above'}
              onClose={() => setSideDrawerOpen(false)}
              button={
                <IconButton
                  icon="menu"
                  onClick={() => {
                    setSideDrawerOpen(true);
                  }}
                />
              }
            >
              Hello!
            </SideDrawer>
          ),
        },
      ],
    },
  ];

  return (
    <div>
      <h2>Toolbar</h2>
      <Toolbar fixed={isFixed} compact sections={toolbarSections} />
      <ActionButton label="Fix me!" onClick={() => setIsFixed(!isFixed)} />
    </div>
  )
}
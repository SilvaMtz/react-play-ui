import React, { useState } from 'react';
import { Tabs, Tab, TabPanel, FlexGroup, FlexItem, SvgIcon } from 'react-play-ui';

export const TabsPage = (props) => {

  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <h2>Tabs</h2>
      <Tabs stretch={false} activeTab={activeTab}>
        <Tab onClick={() => setActiveTab(1)} tabId={1}>
          <FlexGroup gutterSize="s" justifyContent="center" direction="column" alignItems="center">
            <FlexItem>
              <SvgIcon icon="home" size="large" />
            </FlexItem>
            <FlexItem>
              <p style={{color: "rgb(var(--text-color-shade))", margin: 0}}>
                Home
              </p>
            </FlexItem>
          </FlexGroup>
        </Tab>
        <Tab onClick={() => setActiveTab(2)} tabId={2}>
          <FlexGroup gutterSize="s" justifyContent="center" direction="column" alignItems="center">
            <FlexItem>
              <SvgIcon icon="collection" size="large" />
            </FlexItem>
            <FlexItem>
              <p style={{color: "rgb(var(--text-color-shade))", margin: 0}}>
                Collections
              </p>
            </FlexItem>
          </FlexGroup>
        </Tab>
        <Tab onClick={() => setActiveTab(3)} tabId={3}>
          <FlexGroup gutterSize="s" justifyContent="center" direction="column" alignItems="center">
            <FlexItem>
              <SvgIcon icon="academicCap" size="large" />
            </FlexItem>
            <FlexItem>
              <p style={{color: "rgb(var(--text-color-shade))", margin: 0}}>
                Education
              </p>
            </FlexItem>
          </FlexGroup>
        </Tab>
        <Tab onClick={() => setActiveTab(4)} tabId={4}>
          <FlexGroup gutterSize="s" justifyContent="center" direction="column" alignItems="center">
            <FlexItem>
              <SvgIcon icon="menu" size="large" />
            </FlexItem>
            <FlexItem>
              <p style={{color: "rgb(var(--text-color-shade))", margin: 0}}>
                Main Menu
              </p>
            </FlexItem>
          </FlexGroup>
        </Tab>
        <Tab onClick={() => setActiveTab(5)} tabId={5}>
          <FlexGroup gutterSize="s" justifyContent="center" direction="column" alignItems="center">
            <FlexItem>
              <SvgIcon icon="scale" size="large" />
            </FlexItem>
            <FlexItem>
              <p style={{color: "rgb(var(--text-color-shade))", margin: 0}}>
                Balance
              </p>
            </FlexItem>
          </FlexGroup>
        </Tab>
        <Tab onClick={() => setActiveTab(6)} tabId={6}>
          <FlexGroup gutterSize="s" justifyContent="center" direction="column" alignItems="center">
            <FlexItem>
              <SvgIcon icon="userCircle" size="large" />
            </FlexItem>
            <FlexItem>
              <p style={{color: "rgb(var(--text-color-shade))", margin: 0}}>
                Personal Info
              </p>
            </FlexItem>
          </FlexGroup>
        </Tab>
      </Tabs>
      <TabPanel tabId={1} activeTab={activeTab}>
        Tab 1
      </TabPanel>
      <TabPanel tabId={2} activeTab={activeTab}>
        Tab 2
      </TabPanel>
      <TabPanel tabId={3} activeTab={activeTab}>
        Tab 3
      </TabPanel>
      <TabPanel tabId={4} activeTab={activeTab}>
        Tab 4
      </TabPanel>
      <TabPanel tabId={5} activeTab={activeTab}>
        Tab 5
      </TabPanel>
      <TabPanel tabId={6} activeTab={activeTab}>
        Tab 6
      </TabPanel>
    </div>
  )
}
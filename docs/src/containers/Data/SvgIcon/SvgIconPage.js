import React, { useState } from "react";
import {
  SvgIcon,
  icons,
  FlexItem,
  FlexGroup,
  FlexGrid,
  WidgetCard,
  Tabs,
  Tab,
  TabPanel,
  Callout,
} from "react-play-ui";

export const SvgIconPage = (props) => {
  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const [activeTab, setActiveTab] = useState(1);

  return (
    <React.Fragment>
      <h2 style={{ textAlign: "center" }}>Svg Icon</h2>
      <Callout icon="informationCircle" color="primary" title="Ready Heroicons!">
        <p style={{ margin: 0, marginTop: 10 }}>
          These icons are brought to you by <a href="https://twitter.com/steveschoger">@steveschoger</a>.
          Be sure to check the full documentation on these icons here: <a href="https://heroicons.dev">heroicons.dev</a>
        </p>
      </Callout>
      <br />
      <div>
        <Tabs stretch={false} activeTab={activeTab}>
          <Tab style={{ width: 250 }} activeTab={activeTab} tabId={1} onClick={() => setActiveTab(1)}>
            <div>
              <SvgIcon icon="academicCap" size="large" />
              <h4 style={{ margin: 0, marginTop: 6 }}>
                Filled
              </h4>
            </div>
          </Tab>
          <Tab style={{ width: 250 }} activeTab={activeTab} tabId={2} onClick={() => setActiveTab(2)}>
          <div>
            <SvgIcon icon="academicCapOutline" size="large" />
              <h4 style={{ margin: 0, marginTop: 6 }}>
                Outline
              </h4>
            </div>
          </Tab>
        </Tabs>
        <br />
        <br />
        <TabPanel activeTab={activeTab} tabId={1}>
          <FlexGrid columns={4}>
            {Object.keys(icons).map((icon, index) => {
              return icon.includes("Outline") ? null : (
                <FlexItem key={index}>
                  <WidgetCard
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      paddingTop: 20,
                      paddingBottom: 20,
                    }}
                    color="default"
                    onClick={() => handleCopyToClipboard(icon)}
                  >
                    <FlexGroup
                      responsive={false}
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      gutterSize="xs"
                    >
                      <FlexItem>
                        <SvgIcon icon={icon} size="large" />
                      </FlexItem>
                      <FlexItem>
                        <p
                          style={{
                            marginBottom: 0,
                            color: "rgb(var(--text-color-shade)",
                            fontSize: "0.94rem",
                          }}
                        >
                          {icon}
                        </p>
                      </FlexItem>
                    </FlexGroup>
                  </WidgetCard>
                </FlexItem>
              );
            })}
          </FlexGrid>
        </TabPanel>
        <TabPanel activeTab={activeTab} tabId={2}>
          <FlexGrid columns={4}>
            {Object.keys(icons).map((icon, index) => {
              return icon.includes("Outline") ? (
                <FlexItem key={index}>
                  <WidgetCard
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      paddingTop: 20,
                      paddingBottom: 20,
                    }}
                    color="default"
                    onClick={() => handleCopyToClipboard(icon)}
                  >
                    <FlexGroup
                      responsive={false}
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      gutterSize="xs"
                    >
                      <FlexItem>
                        <SvgIcon icon={icon} size="large" />
                      </FlexItem>
                      <FlexItem>
                        <p
                          style={{
                            marginBottom: 0,
                            color: "rgb(var(--text-color-shade)",
                            fontSize: "0.94rem",
                          }}
                        >
                          {icon}
                        </p>
                      </FlexItem>
                    </FlexGroup>
                  </WidgetCard>
                </FlexItem>
              ) : null;
            })}
          </FlexGrid>
        </TabPanel>
      </div>
    </React.Fragment>
  );
};

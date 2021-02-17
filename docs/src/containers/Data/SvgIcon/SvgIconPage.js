import React from "react";
import {
  SvgIcon,
  icons,
  outlineIcons,
  FlexItem,
  FlexGroup,
  FlexGrid,
  IconButton,
  WidgetCard,
} from "react-play-ui";

export const SvgIconPage = (props) => {
  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <React.Fragment>
      <h2>Svg Icon</h2>
      <div>
        <FlexGrid columns={4}>
          {Object.keys(icons).map((icon, index) => {
            return (
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
      </div>
    </React.Fragment>
  );
};

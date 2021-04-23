import React, { useState } from "react";
import {
  ActionButton,
  Divider,
  FlexGroup,
  FlexItem,
  LoadingContent,
  LoadingSpinner,
  ProgressBar,
} from "react-play-ui";

export const ProgressPage = (props) => {
  const [progress, setProgress] = useState(0);

  return (
    <FlexGroup direction="column">
      <FlexItem>
        <h2>Progress / Loading</h2>
      </FlexItem>
      <FlexItem>
        <h3>Progress Bar</h3>
        <FlexGroup direction="column">
          <FlexItem>
            <ProgressBar style={{ marginBottom: 6 }} size="extraSmall" />
          </FlexItem>
          <FlexItem>
            <ProgressBar
              style={{ marginBottom: 6 }}
              duration={5}
              size="extraSmall"
            />
          </FlexItem>
          <FlexItem>
            <FlexGroup alignItems="center">
              <FlexItem grow={false}>
                <ActionButton
                  size="extraSmall"
                  icon="plus"
                  label="Add 20%"
                  onClick={() => {
                    setProgress(progress + 20);
                  }}
                />
              </FlexItem>
              <FlexItem>
                <ProgressBar
                  style={{ marginBottom: 6 }}
                  value={progress}
                  size="extraSmall"
                />
              </FlexItem>
            </FlexGroup>
          </FlexItem>
        </FlexGroup>
      </FlexItem>
      <FlexItem>
        <h3>Loading Text Content</h3>
        <FlexGroup>
          <FlexItem>
            <LoadingContent lines={5} />
          </FlexItem>
        </FlexGroup>
      </FlexItem>
      <Divider />
      <FlexItem>
        <h2>Loading Spinner</h2>
        <FlexGroup>
          <FlexItem>
            <LoadingSpinner />
          </FlexItem>
          <FlexItem>
            <LoadingSpinner color="danger" />
          </FlexItem>
          <FlexItem>
            <LoadingSpinner color="warning" />
          </FlexItem>
          <FlexItem>
            <LoadingSpinner color="accent" />
          </FlexItem>
          <FlexItem>
            <LoadingSpinner color="default" />
          </FlexItem>
        </FlexGroup>
      </FlexItem>
      <FlexItem>
        <h3>Loading Spinner Sizes</h3>
        <FlexGroup>
          <FlexItem>
            <LoadingSpinner size="mini" />
          </FlexItem>
          <FlexItem>
            <LoadingSpinner size="small" />
          </FlexItem>
          <FlexItem>
            <LoadingSpinner size="medium" />
          </FlexItem>
          <FlexItem>
            <LoadingSpinner size="large" />
          </FlexItem>
          <FlexItem>
            <LoadingSpinner size="extraLarge" />
          </FlexItem>
        </FlexGroup>
      </FlexItem>
    </FlexGroup>
  );
};

import React from 'react';
import { Divider, FlexGroup, FlexItem, LoadingContent, LoadingSpinner } from 'react-play-ui';

export const ProgressPage = (props) => {

  return (

    <FlexGroup direction="column">
      <FlexItem>
        <h2>Progress / Loading</h2>
      </FlexItem>
      <FlexItem>
        <h3>
          Loading Text Content
        </h3>
        <FlexGroup>
          <FlexItem>
            <LoadingContent lines={5} />
          </FlexItem>
        </FlexGroup>
      </FlexItem>
      <Divider />
      <FlexItem>
        <h3>
          Loading Spinner
        </h3>
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
    </FlexGroup>
  )
}
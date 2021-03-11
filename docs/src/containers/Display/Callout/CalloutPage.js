import React from 'react';
import { Callout, FlexGrid, FlexItem } from 'react-play-ui';

export const CalloutPage = (props) => {

  return (
    <div>
      <h2>Callout</h2>
      <FlexGrid columns={1} direction="column">
        <FlexItem>
          <Callout title="PRO TIP: Jump higher!" icon="lightBulb">
            <p style={{marginBottom: 0, fontStyle: "italic"}}>The quick brown fox jumped over the lazy dog.</p>
          </Callout>
        </FlexItem>
        <FlexItem>
          <Callout title="PRO TIP: You can use title only to get a short and concrete message across." icon="lightBulb" color="success" />
        </FlexItem>
        <FlexItem>
          <Callout icon="lightBulb" color="accent">
            <p style={{margin: 0, fontStyle: "italic"}}>Icons are dependent on the title. You can have a Callout with no title and only have a body.</p>
          </Callout>
        </FlexItem>
        <FlexItem>
          <Callout title="PRO TIP: Jump higher!" icon="lightBulb" color="warning">
            <p style={{marginBottom: 0, fontStyle: "italic"}}>The quick brown fox jumped over the lazy dog.</p>
          </Callout>
        </FlexItem>
        <FlexItem>
          <Callout title="PRO TIP: Jump higher!" icon="lightBulb" color="danger">
            <p style={{marginBottom: 0, fontStyle: "italic"}}>The quick brown fox jumped over the lazy dog.</p>
          </Callout>
        </FlexItem>
        <FlexItem>
          <Callout title="PRO TIP: Jump higher!" icon="lightBulb" color="default">
            <p style={{marginBottom: 0, fontStyle: "italic"}}>The quick brown fox jumped over the lazy dog.</p>
          </Callout>
        </FlexItem>
      </FlexGrid>
    </div>
  )
}
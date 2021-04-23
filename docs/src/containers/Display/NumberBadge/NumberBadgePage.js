import React from 'react';
import { FlexGroup, IconButton, FlexItem } from 'react-play-ui';

export const NumberBadgePage = (props) => {

  return (
    <div>
      <h2>
        Number Badge
      </h2>
      <br />
      <FlexGroup>
        <FlexItem grow={false}>
          <IconButton
            icon="bell"
            onClick={()=>{}}
            badge={{
              value: 8,
              max: 9,
              anchorPoint: {
                vertical: "top",
                horizontal: "left"
              },
              color: "red"
            }}
          />
        </FlexItem>
        <FlexItem grow={false}>
          <IconButton
            icon="bell"
            onClick={()=>{}}
            badge={{
              value: 100,
              max: 99,
              anchorPoint: {
                vertical: "top",
                horizontal: "right"
              },
              color: "red"
            }}
          />
        </FlexItem>
        <FlexItem grow={false}>
          <IconButton
            icon="bell"
            onClick={()=>{}}
            badge={{
              value: 8,
              max: 9,
              anchorPoint: {
                vertical: "bottom",
                horizontal: "right"
              },
              color: "primary"
            }}
          />
        </FlexItem>
        <FlexItem grow={false}>
          <IconButton
            icon="bell"
            onClick={()=>{}}
            badge={{
              value: 8,
              max: 9,
              anchorPoint: {
                vertical: "bottom",
                horizontal: "left"
              },
              color: "accent"
            }}
          />
        </FlexItem>
        <FlexItem grow={false}>
          <IconButton
            icon="bell"
            onClick={()=>{}}
            badge={{
              max: 10,
              anchorPoint: {
                vertical: "top",
                horizontal: "right"
              },
              color: "accent"
            }}
          />
        </FlexItem>
      </FlexGroup>
    </div>
  )
}
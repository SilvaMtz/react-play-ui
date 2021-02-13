import React from 'react';
import {
  FlexGroup,
  FlexItem,
  SvgIcon,
  WidgetCard
} from 'react-play-ui';

export const WidgetPage = (props) => {

  return (
    <div>
      <h2>Widget</h2>
      <FlexGroup>
        <FlexItem grow={0}>
          <WidgetCard color="primary" onClick={() => {}} gradient={true}>
            <SvgIcon icon="sun" color="white"/>
            <h4>Hello There!</h4>
            <p>We some WIDGETS!</p>
          </WidgetCard>
        </FlexItem>
        <FlexItem grow={0}>
          <WidgetCard color="accent">
            <SvgIcon icon="sun" color="white"/>
            <h4>Hello There!</h4>
            <p>We some WIDGETS!</p>
          </WidgetCard>
        </FlexItem>
        <FlexItem grow={0}>
          <WidgetCard color="warning">
            <SvgIcon icon="sun" color="white"/>
            <h4>Hello There!</h4>
            <p>We some WIDGETS!</p>
          </WidgetCard>
        </FlexItem>
        <FlexItem grow={0}>
          <WidgetCard color="danger" onClick={() => {}}>
            <SvgIcon icon="sun" color="white"/>
            <h4>Hello There!</h4>
            <p>We some WIDGETS!</p>
          </WidgetCard>
        </FlexItem>
        <FlexItem grow={0}>
          <WidgetCard color="green" gradient={true} onClick={()=>{}}>
            <SvgIcon icon="sun" color="white"/>
            <h4>Hello There!</h4>
            <p>We some WIDGETS!</p>
          </WidgetCard>
        </FlexItem>
      </FlexGroup>

    </div>
  )
}
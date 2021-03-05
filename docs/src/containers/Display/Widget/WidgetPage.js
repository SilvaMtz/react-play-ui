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
        <FlexItem>
          <WidgetCard color="primary" onClick={() => {}} gradient={true}>
            <SvgIcon icon="sun" color="white"/>
            <h4>Hello There!</h4>
            <p>We some WIDGETS!</p>
          </WidgetCard>
        </FlexItem>
        <FlexItem>
          <WidgetCard color="accent">
            <SvgIcon icon="sun" color="white"/>
            <h4>Hello There!</h4>
            <p>We some WIDGETS!</p>
          </WidgetCard>
        </FlexItem>
        <FlexItem>
          <WidgetCard color="warning">
            <SvgIcon icon="sun" color="white"/>
            <h4>Hello There!</h4>
            <p>We some WIDGETS!</p>
          </WidgetCard>
        </FlexItem>
        <FlexItem>
          <WidgetCard color="danger" onClick={() => {}}>
            <SvgIcon icon="sun" color="white"/>
            <h4>Hello There!</h4>
            <p>We some WIDGETS!</p>
          </WidgetCard>
        </FlexItem>
        <FlexItem>
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
import React from 'react';
import { FlexGroup, FlexItem, SwitchButton } from 'react-play-ui';

export const SwitchDemo = (props) => {

  const [checked, setChecked] = React.useState(false);

  const onChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div>
      <h2>
        Switches
      </h2>
      <FlexGroup direction="column" gutterSize="m">
        <FlexItem>
          <SwitchButton onChange={(e) => onChange(e)} checked={checked} label="I am a switch" />
        </FlexItem>
        <FlexItem>
          <SwitchButton showLabel={false} onChange={(e) => onChange(e)} checked={checked} label="I am a switch" />
        </FlexItem>
        <FlexItem>
          <SwitchButton onChange={(e) => onChange(e)} checked={checked} disabled label="I am a disabled switch" />
        </FlexItem>
      </FlexGroup>
    </div>
  )
}
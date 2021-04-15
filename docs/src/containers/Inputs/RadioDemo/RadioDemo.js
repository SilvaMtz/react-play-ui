import React, { useState } from "react";
import { FlexGroup, FlexItem, RadioButton } from "react-play-ui";

export const RadioDemo = (props) => {

  const [checked, setChecked] = useState(false);

  const onChange = (e) => {
    setChecked(true);
  };

  return (
    <div>
      <h3>Radio Button</h3>
      <FlexGroup direction="column" gutterSize="xs">
        <FlexItem>
          <RadioButton
            checked={checked}
            onChange={(e) => onChange(e)}
            id="radio1"
            label="I am a radio"
            />
        </FlexItem>
        <FlexItem>
          <RadioButton
            id="radio2"
            checked={checked}
            onChange={(e) => onChange(e)}
            label="I am another radio"
            />
        </FlexItem>
        <FlexItem>
          <RadioButton
            id="radio3"
            checked={checked}
            onChange={(e) => onChange(e)}
            label="I am a disabled radio"
            disabled
          />
        </FlexItem>
      </FlexGroup>
    </div>
  );
};

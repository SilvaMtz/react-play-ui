import React, { useState } from "react";
import { FlexGroup, FlexItem, RadioButton, RadioGroup } from "react-play-ui";

export const RadioDemo = (props) => {

  const [checked, setChecked] = useState(false);

  const onChange = (e) => {
    setChecked(e.target.checked);
  };

  const radioOptions = [
    {
      id: "radiogroup0",
      label: 'Option one',
    },
    {
      id: "radiogroup1",
      label: 'Option two is checked by default',
    },
    {
      id: "radiogroup2",
      label: 'Option three is disabled',
      disabled: true,
    },
  ];

  const [radioIdSelected, setRadioIdSelected] = useState("radiogroup1");

  const onChangeGroup = (optionId) => {
    setRadioIdSelected(optionId);
  };

  return (
    <div>
      <h2>Radios</h2>
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
      <h3>Radio Group</h3>
      <RadioGroup
        options={radioOptions}
        idSelected={radioIdSelected}
        onChange={(id) => onChangeGroup(id)}
        name="radiogroup"
        legend={{
          children: <span>This is a legend for a radio group</span>,
        }}
      />
    </div>
  );
};

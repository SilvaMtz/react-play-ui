import React, { useState } from "react";
import { FlexGroup, FlexItem, FormFields, InputField, TextField, Checkbox, CheckboxGroup } from "react-play-ui";
import { SwitchDemo } from "./SwitchDemo";
import { RadioDemo } from "./RadioDemo";

export const FormControlsPage = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [textMsg, setTextMsg] = useState("");

  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);

  const checkboxes = [
    {
      id: "checkboxOpt0",
      label: 'Option one',
      'data-test-sub': 'dts_test',
    },
    {
      id: "checkboxOpt1",
      label: 'Option two is checked by default',
      className: 'classNameTest',
    },
    {
      id: "checkboxOpt2",
      label: 'Option three is disabled',
      disabled: true,
    },
  ];
  const [checkboxIdToSelectedMap, setCheckboxIdToSelectedMap] = useState({
    ["checkboxOpt1"]: true,
  });

  const handleCheckboxGroupChange = (optionId) => {
    const newCheckboxIdToSelectedMap = {
      ...checkboxIdToSelectedMap,
      ...{
        [optionId]: !checkboxIdToSelectedMap[optionId],
      },
    };
    setCheckboxIdToSelectedMap(newCheckboxIdToSelectedMap);
  };

  return (
    <div>
      <h2>Input</h2>
      <FormFields>
        <FlexGroup>
          <FlexItem>
            <InputField
              value={firstName}
              placeholder="John"
              onChange={(e) => setFirstName(e.target.value)}
              icon="userCircle"
              label="First Name"
              minLength={2}
              maxLength={24}
              isTouched={firstName.length > 0}
            />
          </FlexItem>
          <FlexItem>
            <InputField
              value={lastName}
              placeholder="Doe"
              onChange={(e) => setLastName(e.target.value)}
              icon="userAdd"
              label="Last Name"
              disabled
            />
          </FlexItem>
        </FlexGroup>
        <FlexGroup>
          <FlexItem>
            <TextField
              value={textMsg}
              placeholder="Hear me out..."
              onChange={(e) => setTextMsg(e.target.value)}
              label="Message"
              minLength={2}
              maxLength={24}
              isTouched={textMsg.length > 0}
            />
          </FlexItem>
        </FlexGroup>
      </FormFields>
      <h3>Checkboxes</h3>
      <FlexGroup direction="column" gutterSize="xs">
        <FlexItem>
          <Checkbox id="1" label="Regular Checkbox" value={checked} checked={checked} onChange={() => setChecked(!checked)} />
        </FlexItem>
        <FlexItem>
          <Checkbox id="2" label="I am indeterminate" value={indeterminate} indeterminate={indeterminate} onChange={() => setIndeterminate(!indeterminate)} />
        </FlexItem>
        <FlexItem>
          <Checkbox id="4" label="I am disabled" value={checked} checked={checked} onChange={() => setChecked(!checked)} disabled />
        </FlexItem>
      </FlexGroup>

      <h3>Checkbox Group</h3>
      <CheckboxGroup
        options={checkboxes}
        idToSelectedMap={checkboxIdToSelectedMap}
        onChange={(id) => handleCheckboxGroupChange(id)}
      />
      <SwitchDemo />
      <RadioDemo />
    </div>
  );
};
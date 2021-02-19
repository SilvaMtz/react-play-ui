import React, { useState } from "react";
import { FlexGroup, FlexItem, FormFields, InputField, TextField } from "react-play-ui";

export const InputsPage = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [textMsg, setTextMsg] = useState("");

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
    </div>
  );
};

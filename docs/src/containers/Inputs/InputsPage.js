import React, { useState } from "react";
import { FlexGroup, FlexGrid, FlexItem, FormFields, InputField, TextField } from "react-play-ui";

export const InputsPage = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [textMsg, setTextMsg] = useState("");

  const [inputList, setInputList] = useState([{ city: "", country: "" }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { city: "", country: "" }]);
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
      <FlexGrid direction="column" columns={1}>
        {inputList.map((x, i) => {
          return (
            <FlexItem key={i}>
              <FlexGroup>
                <FlexItem>
                  <InputField
                    name="city"
                    placeholder="Enter First Name"
                    value={x.city}
                    onChange={e => handleInputChange(e, i)}
                  />
                </FlexItem>
                <FlexItem>
                  <InputField
                    name="country"
                    placeholder="Enter Last Name"
                    value={x.country}
                    onChange={e => handleInputChange(e, i)}
                  />
                </FlexItem>
                <FlexItem>
                  {inputList.length !== 1 && <button
                    className="mr10"
                    onClick={() => handleRemoveClick(i)}>Remove</button>}
                  {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                </FlexItem>
              </FlexGroup>
            </FlexItem>
          );
        })}
      </FlexGrid>
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </div>
  );
};
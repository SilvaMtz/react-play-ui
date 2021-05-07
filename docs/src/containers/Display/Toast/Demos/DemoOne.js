import { Checkbox, RadioGroup, SvgIcon, ToastComponent } from "react-play-ui";
import { DemoBlock, PageTitle } from "../../../../components";
import { useState } from "react";

const snippet = ``;

const demoBlock = ``;

export const DemoOne = () => {
  const [colorType, setColorType] = useState("default");
  const [fill, setFill] = useState(false);
  const onChangeGroup = (id) => {
    setColorType(id);
  };

  const colorOptions = [
    {
      id: "default",
      label: "default",
      value: "default",
    },
    {
      id: "primary",
      label: "primary",
      value: "primary",
    },
    {
      id: "accent",
      label: "accent",
      value: "accent",
    },
    {
      id: "success",
      label: "success",
      value: "success",
    },
    {
      id: "warning",
      label: "warning",
      value: "warning",
    },
    {
      id: "danger",
      label: "danger",
      value: "danger",
    },
  ];

  return (
    <DemoBlock snippet={snippet} codeBlock={demoBlock}>
        <div style={{ width: "100%" }}>
        <PageTitle text="ToastComponent" headingElement="h3" style={{ textAlign: "center" }} />
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row-reverse",
            height: "100%",
            width: "100%",
            justifyContent: "space-evenly",
            padding: "0px 24px",
          }}
        >
          <ToastComponent
            style={{ width: "100%", margin: 20, maxWidth: 450 }}
            type={colorType}
            fill={fill}
            closeButton={true}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <SvgIcon icon="academicCap" size="medium" />
              <h3 style={{ margin: 0, marginLeft: 8 }}>
                I am a {colorType} Toast!
              </h3>
            </div>
            <p>
              This a body of a toast, intended to be short and to the point.
            </p>
          </ToastComponent>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              margin: 20,
              maxWidth: 250,
            }}
          >
            <RadioGroup
              options={colorOptions}
              idSelected={colorType}
              onChange={(id) => onChangeGroup(id)}
              name="colorTypes"
              legend={{
                children: <h5 style={{ margin: 0 }}>Type</h5>,
              }}
            />
            <h4>Fill (boolean)</h4>
            <Checkbox
              checked={fill}
              label="Fill"
              onChange={() => setFill(!fill)}
            />
          </div>
        </div>
    </div>
      </DemoBlock>
  );
};

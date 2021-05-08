import {
  ActionButton,
  RadioGroup,
  Divider,
  Flip,
  Zoom,
  Slide,
  Bounce,
  SvgIcon,
  ToastContainer,
  toast,
} from "react-play-ui";
import { DemoBlock } from "../../../../components";
import { useState } from "react";

const snippet = ``;

const demoBlock = ``;

export const DemoTwo = () => {
  const [position, setPosition] = useState("top-right");
  const [animation, setAnimation] = useState("Bounce");

  const typeOptions = [
    "default",
    "primary",
    "accent",
    "success",
    "warning",
    "danger",
  ];

  const animationsMap = {
    Bounce: Bounce,
    Flip: Flip,
    Slide: Slide,
    Zoom: Zoom,
  }

  const onChangePosition = (id) => {
    setPosition(id);
  };

  const onChangeAnimation = (id) => {
    setAnimation(id);
  };

  const animationOptions = [
    {
      id: "Bounce",
      label: "Bounce",
      value: "Bounce",
    },
    {
      id: "Flip",
      label: "Flip",
      value: "Flip",
    },
    {
      id: "Slide",
      label: "Slide",
      value: "Slide",
    },
    {
      id: "Zoom",
      label: "Zoom",
      value: "Zoom",
    },
  ];

  const positionOptions = [
    {
      id: "top-right",
      label: "top-right",
      value: "top-right",
    },
    {
      id: "top-center",
      label: "top-center",
      value: "top-center",
    },
    {
      id: "top-left",
      label: "top-left",
      value: "top-left",
    },
    {
      id: "bottom-right",
      label: "bottom-right",
      value: "bottom-right",
    },
    {
      id: "bottom-center",
      label: "bottom-center",
      value: "bottom-center",
    },
    {
      id: "bottom-left",
      label: "bottom-left",
      value: "bottom-left",
    },
  ];

  const handleAddToast = () => {
    const type = typeOptions[Math.floor(Math.random() * 6)];
    const fill = !!Math.floor(Math.random() * 2);
    const toastContent = (
      <div style={{ display: "flex", alignItems: "center" }}>
        <SvgIcon icon="academicCap" size="large" />
        <h3 style={{ margin: 0, marginLeft: 8 }}>I am a {type} toast!</h3>
      </div>
    );
    const toastOptions = {
      type: type,
      fill: fill,
    };
    console.log(fill)
    toast(toastContent, toastOptions);
  };

  const trigger = (
    <ActionButton
      label="Toast Random!"
      onClick={() => handleAddToast()}
      color="primary"
      fill
      icon="cursorClick"
      iconSide="right"
    />
  );

  const container = (
    <ToastContainer
      position={position}
      transition={animationsMap[animation]}
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );

  return (
    <DemoBlock snippet={snippet} codeBlock={demoBlock}>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "30%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: 16,
            boxSizing: "border-box",
          }}
        >
          {trigger}
        </div>
        <Divider size="full" />
        <div
          style={{
            height: "100%",
            width: "100%",
            padding: 16,
            boxSizing: "border-box",
            display: 'flex'
          }}
        >
          {container}
          <RadioGroup
            options={positionOptions}
            idSelected={position}
            onChange={(id) => onChangePosition(id)}
            name="position"
            legend={{
              children: <h5 style={{ margin: 0 }}>position</h5>,
            }}
          />
          <RadioGroup
            options={animationOptions}
            idSelected={animation}
            onChange={(id) => onChangeAnimation(id)}
            name="animation"
            legend={{
              children: <h5 style={{ margin: 0 }}>animation</h5>,
            }}
          />
        </div>
      </div>
    </DemoBlock>
  );
};

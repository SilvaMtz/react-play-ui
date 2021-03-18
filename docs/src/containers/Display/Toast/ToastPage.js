import React, { useState } from "react";
import { FlexGrid, FlexItem, FlexGroup, Toast, ToastBox, ActionButton } from "react-play-ui";

export const ToastPage = (props) => {

  const [toastList, setToastList] = useState([]);

  const toasts = [
    {
      id: 1,
      color: "primary",
      icon: "academicCap",
      title: "Toast to this!",
      body: (
        <p style={{ margin: 0, marginTop: 6 }}>
          The quick brown fox jumped over the lazy dog. So the dog got
          up and chased after the fox.
        </p>
      )
    },
    {
      id: 2,
      color: "success",
      title: "Purchase Successful!",
      icon: "checkCircle"
    },
    {
      id: 3,
      color: "accent",
      body: "Hi there!"
    },
    {
      id: 4,
      color: "warning",
      fill: true,
      body: "Hi there"
    },
    {
      id: 5,
      color: "danger",
      duration: 10,
      body: "Hi there!"
    },
    {
      id: 6,
      color: "default",
      body: "Hi there!"
    }
  ]

  const addRandomToast = () => {
    let num = Math.floor((Math.random() * (6 - 0) + 0));
    console.log(num)
    console.log(toasts[num])
    setToastList([...toastList, toasts[num]]);
  }

  const closeToast = (index) => {
    const list = [...toastList];
    list.splice(index, 1);
    setToastList(list);
  }

  return (
    <div>
      <h2>Toast</h2>

      <FlexGrid columns={3}>
        <FlexItem>
          <FlexGroup alignItems="center" justifyContent="center">
            <FlexItem grow={false}>
              <Toast
                onClose={() => {}}
                color="primary"
                icon="academicCap"
                title="Toast to this!"
              />
            </FlexItem>
          </FlexGroup>
        </FlexItem>

        <FlexItem>
          <FlexGroup alignItems="center" justifyContent="center">
            <FlexItem grow={false}>
              <Toast
                color="success"
                title="Purchase successful!"
                icon="checkCircle"
              />
            </FlexItem>
          </FlexGroup>
        </FlexItem>

        <FlexItem>
          <FlexGroup alignItems="center" justifyContent="center">
            <FlexItem grow={false}>
              <Toast color="accent">Hi there!</Toast>
            </FlexItem>
          </FlexGroup>
        </FlexItem>

        <FlexItem>
          <FlexGroup alignItems="center" justifyContent="center">
            <FlexItem grow={false}>
              <Toast color="warning" fill onClose={() => {}}>
                Hi there!
              </Toast>
            </FlexItem>
          </FlexGroup>
        </FlexItem>

        <FlexItem>
          <FlexGroup alignItems="center" justifyContent="center">
            <FlexItem grow={false}>
              <Toast color="danger" duration={10}>
                Hi there!
              </Toast>
            </FlexItem>
          </FlexGroup>
        </FlexItem>

        <FlexItem>
          <FlexGroup alignItems="center" justifyContent="center">
            <FlexItem grow={false}>
              <Toast color="default" onClose={() => {}}>
                Hi there!
              </Toast>
            </FlexItem>
          </FlexGroup>
        </FlexItem>
      </FlexGrid>
      <FlexGroup justifyContent="center">
        <FlexItem grow={0}>
          <ActionButton fill color="primary" onClick={() => addRandomToast()} label="Show Toast" />
        </FlexItem>
      </FlexGroup>
      <ToastBox
        position="bottomRight"
        toasts={toastList}
      />
    </div>
  );
};

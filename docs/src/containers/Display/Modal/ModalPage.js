import React, { useState } from "react";
import { ActionButton, FlexGroup, FlexItem, Modal } from "react-play-ui";

export const ModalPage = (props) => {
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);

  let modalOneInstance;
  if (open) {
    modalOneInstance = (
      <Modal
        title="With Blur"
        icon="userCircle"
        onClose={() => setOpen(false)}
        fo
      >
        <FlexGroup>
          <FlexItem>Children body here</FlexItem>
        </FlexGroup>
      </Modal>
    );
  }

  let modalTwoInstance;
  if (openTwo) {
    modalTwoInstance = (
      <Modal
        backgroundBlur={false}
        title="Without Blur"
        icon="userCircle"
        onClose={() => setOpenTwo(false)}
        fo
      >
        <FlexGroup>
          <FlexItem>Children body here</FlexItem>
        </FlexGroup>
      </Modal>
    );
  }

  return (
    <div>
      <h2>Modal</h2>
      <ActionButton onClick={() => setOpen(true)} label="Open Modal" />
      <ActionButton onClick={() => setOpenTwo(true)} label="Open Modal Two" />
      {modalOneInstance}
      {modalTwoInstance}
    </div>
  );
};

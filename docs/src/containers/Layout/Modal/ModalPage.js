import { useState } from "react";
import { ActionButton, FlexGroup, FlexItem, Modal, ConfirmModal } from "react-play-ui";

export const ModalPage = (props) => {
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleConfirm = () => {
    alert("You have confirmed!");
    setOpenConfirm(false);
  }

  let modalOneInstance;
  if (open) {
    modalOneInstance = (
      <Modal
        title="With Blur"
        icon="userCircle"
        onClose={() => setOpen(false)}
        footer={(
          <FlexGroup gutterSize="xs">
            <FlexItem>
              <ActionButton restrainWidth={false} label="Cancel" onClick={() => {}} color="default" />
            </FlexItem>
            <FlexItem>
              <ActionButton restrainWidth={false} fill label="Submit" onClick={() => {}} color="primary" />
            </FlexItem>
          </FlexGroup>
        )}
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
        maxWidth="60%"
        backgroundBlur={false}
        title="Lorem Ipsum"
        onClose={() => setOpenTwo(false)}
        centerTitle
        maxHeight="80%"
        footer={(
          <FlexGroup gutterSize="xs">
            <FlexItem>
              <ActionButton restrainWidth={false} label="Cancel" onClick={() => setOpenTwo(false)} color="default" />
            </FlexItem>
            <FlexItem>
              <ActionButton restrainWidth={false} fill label="Submit" onClick={() => setOpenTwo(false)} color="primary" />
            </FlexItem>
          </FlexGroup>
        )}
      >
        <FlexGroup>
          <FlexItem>
            <h4>
              What is Lorem Ipsum?
            </h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h4>
              Why use it?
            </h4>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page
              when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here, content here', making it look
              like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
              as their default model text, and a search for 'lorem ipsum' will uncover many web sites
              still in their infancy. Various versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).
            </p>
            <h4>
              Where does it come from?
            </h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
              classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
              in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
              The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </FlexItem>
        </FlexGroup>
      </Modal>
    );
  }

  let modalThreeInstance;
  if (openThree) {
    modalThreeInstance = (
      <Modal
        backgroundBlur={false}
        onClose={() => setOpenThree(false)}
      >
        <FlexGroup>
          <FlexItem>Children body here</FlexItem>
        </FlexGroup>
      </Modal>
    );
  }

  let confirmModalInstance;
  if (openConfirm) {
    confirmModalInstance = (
      <ConfirmModal
        onClose={() => setOpenConfirm(false)}
        onConfirm={() => handleConfirm()}
        title="You are about to confirm and action"
        icon="bell"
        body="This action implies that you are going to do something that requires attention. Not to be taken lightly"
      />
    )
  }

  return (
    <div>
      <h2>Modal</h2>
      <ActionButton onClick={() => setOpen(true)} label="Open Modal" />
      <ActionButton onClick={() => setOpenTwo(true)} label="Open Modal Two" />
      <ActionButton onClick={() => setOpenThree(true)} label="No title" />
      <ActionButton onClick={() => setOpenConfirm(true)} label="Confirm Modal" />
      {modalOneInstance}
      {modalTwoInstance}
      {modalThreeInstance}
      {confirmModalInstance}
    </div>
  );
};

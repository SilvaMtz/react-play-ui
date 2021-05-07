import { ToastComponent, ToastContainer } from "react-play-ui";

export const ToastPage = () => {
  return (
    <div>
      <h2>Toast</h2>
      <ToastComponent type="default" closeButton={false}>
        Hey there!
      </ToastComponent>
    </div>
  );
};

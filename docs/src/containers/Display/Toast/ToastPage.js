import { ToastComponent, ToastContainer } from "react-play-ui";

export const ToastPage = () => {
  return (
    <div>
      <h2>Toast</h2>
      <ToastComponent type="default" closeButton={false}>
        Hey there!
      </ToastComponent>
      <ToastComponent type="primary" fill={true} closeButton={false}>
        Hey there!
      </ToastComponent>
      <ToastComponent type="accent" closeButton={false}>
        Hey there!
      </ToastComponent>
      <ToastComponent type="success" closeButton={false}>
        Hey there!
      </ToastComponent>
      <ToastComponent type="warning" closeButton={false}>
        Hey there!
      </ToastComponent>
      <ToastComponent type="danger" closeButton={false}>
        Hey there!
      </ToastComponent>
    </div>
  );
};

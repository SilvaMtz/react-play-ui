import { ToastComponent } from "react-play-ui";
import { PageTitle, TextBody } from "../../../components";
import { DemoOne } from "./Demos/DemoOne";


export const ToastPage = () => {
  return (
    <div>
      <PageTitle text="Toast" />
      <TextBody>
        Toast are a great way to display brief information regarding user interaction. They are not to be used for anything happening in the past.
      </TextBody>
      <TextBody>
        Although Toasts are a way to grab the users attention, the call to action (if any) should be concise and brief.
      </TextBody>
      <DemoOne />
    </div>
  );
};

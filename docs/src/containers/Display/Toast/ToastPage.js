import { ActionButton, Callout, ToastComponent } from "react-play-ui";
import { CodeLine, PageTitle, TextBody } from "../../../components";
import { DemoOne } from "./Demos/DemoOne";
import { DemoTwo } from "./Demos/DemoTwo";

export const ToastPage = () => {
  return (
    <div>
      <PageTitle text="Toast" />
      <Callout
        icon="sparkles"
        color="success"
        title="Courtesy of React Toastify!"
      >
        The toast system in this library is an adapted and stylized version of
        React Toastify. Make sure you go give them some love and stars!
        <ActionButton
          iconSide="right"
          icon="externalLink"
          label="React Toastify"
          href="https://github.com/fkhadra/react-toastify"
          color="primary"
          fill={false}
          size="extraSmall"
          style={{ marginTop: 8 }}
        />
      </Callout>
      <TextBody>
        Toast are a great way to display brief information regarding user
        interaction. They are not to be used for anything happening in the past.
      </TextBody>
      <TextBody>
        Although Toasts are a way to grab the users attention, the call to
        action (if any) should be concise and brief.
      </TextBody>
      <DemoOne />
      <PageTitle text="Toast Container" />
      <TextBody>
        <CodeLine>ToastComponent</CodeLine>'s go inside their{" "}
        <CodeLine>ToastContainer</CodeLine> component, but should not be added
        as children. Check the Demo below on how you can use the Toast Service.
      </TextBody>
      <TextBody>
        <CodeLine>ToastContainer</CodeLine> comes with its own props (check the
        API table) that are inherited to all toasts belonging to that container.
      </TextBody>
      <Callout
        icon="exclamation"
        color="primary"
        title="ToastComponent can also be provided its own props. These will supersede those passed on through the container."
      />
      <DemoTwo />
    </div>
  );
};

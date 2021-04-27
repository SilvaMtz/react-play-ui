import { PageTitle, TextBody, CodeLine } from "../../../components";
import { DemoOne, DemoTwo } from "./Demos";

export const AvatarPage = (props) => {

  return (
    <div>
      <PageTitle text="Avatar" />
      <TextBody>
        The Avatar serves to display a user icon which can be interacted with (or not).
        This particular component takes the <CodeLine>name</CodeLine>, from where it will
        determine the initials.
      </TextBody>
      <DemoOne />
      <br />
      <PageTitle text="With Image" headingElement="h2" />
      <TextBody>
        The component can also be provided with an <CodeLine>imgUrl</CodeLine> prop which
        will render the image on the avatar itself. Should the image fail to be loaded, it
        will fall back to using the <CodeLine>initials</CodeLine> and <CodeLine>name</CodeLine> props.
      </TextBody>
      <DemoTwo />
    </div>
  );
};

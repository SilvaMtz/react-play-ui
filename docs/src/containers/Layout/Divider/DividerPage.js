import React from 'react';
import { PageTitle, TextBody, DemoBlock, ApiTable } from '../../../components';
import { Divider } from "react-play-ui";

const Example1 = `import { Divider } from 'react-play-ui';

export default = () => {
  return (
    <Divider />
    <Divider size="small" />
    <Divider size="medium" />
    <Divider size="large" />
    <Divider size="full" />
  )
}`

const Example2 = `import { Divider } from 'react-play-ui';

export default () => {
  return (
    <Divider marginSize="none" />
    <br />
    <Divider marginSize="small" />
    <Divider marginSize="medium" />
    <Divider marginSize="large" />
    <Divider marginSize="full" />
  )
}`

const propList = [
  {
    id: 0,
    name: "size",
    description: "Sets the length percentage of the line.",
    valueTypes: ["small", "medium", "large", "full"],
    defaultValue: "large"
  },
  {
    id: 1,
    name: "marginSize",
    description: "Sets the margin-top and margin-bottom attributes.",
    valueTypes: ["none", "small", "medium", "large", "extraLarge"],
    defaultValue: "large"
  }
]

export const DividerPage = (props) => {

  return (
    <div>
      <PageTitle text="Divider" />
      <TextBody>
        Whenever a section has to be visaully separated from other content, you can use a <code>&lt;Divider /&gt;</code>.
      </TextBody>
      <DemoBlock
        codeBlock={Example1}
        snippet={`<Divider />`}
      >
        <div style={{ padding: 12, display: "flex", flexDirection: "column", width: "100%" }}>
          <Divider />
          <Divider size="small" />
          <Divider size="medium" />
          <Divider size="large" />
          <Divider size="full" />
        </div>
      </DemoBlock>
      <br />

      <PageTitle text="Margin Size" headingElement="h3" />
      <TextBody>
        You can pass down a <code>marginSize</code> prop to adjust the <strong>Y margin</strong> of the Divider. Defaults to <strong>large</strong>
      </TextBody>
      <DemoBlock
        codeBlock={Example2}
        snippet={`<Divider marginSize="medium"/>`}
      >
        <div style={{ padding: 12, display: "flex", flexDirection: "column", width: "100%" }}>
        <Divider marginSize="none" />
        <br />
        <Divider marginSize="small" />
        <Divider marginSize="medium" />
        <Divider marginSize="large" />
        <Divider marginSize="extraLarge" />
        </div>
      </DemoBlock>
      <br />
      <br />
      <PageTitle headingElement="h2" text="API" />
      <ApiTable
        title="Divider"
        caption="extends HTMLAttributes<HTMLHRElement>"
        propList={propList}
      />
    </div>
  )
}
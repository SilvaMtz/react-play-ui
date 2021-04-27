import { Avatar } from "react-play-ui";
import { DemoBlock } from "../../../../components/DemoBlock"

const snippet = `<Avatar
  name="John Doe"
  initials="JD"
  initialsLength={2}
  type="user"
  size="medium"
/>`

const block = (
  <div>
    <Avatar
      name="John Doe"
      size="extraSmall"
      color="primary"
      imageUrl="https://picsum.photos/100/100"
      style={{ marginRight: 6 }}
    />
    <Avatar
      name="John Doe"
      size="small"
      color="accent"
      imageUrl="https://picsum.photos/100/100"
      style={{ marginRight: 6 }}
    />
    <Avatar
      name="John Doe"
      size="medium"
      color="success"
      imageUrl="https://picsum.photos/100/100"
      style={{ marginRight: 6 }}
    />
    <Avatar
      name="John Doe"
      size="large"
      color="warning"
      imageUrl="https://picsum.photos/100/100"
      style={{ marginRight: 6 }}
    />
    <Avatar
      name="John Doe"
      size="extraLarge"
      imageUrl="https://picsum.photos/100/100"
      color="danger"
    />
  </div>
)

const blockString = `import { Avatar } from "react-play-ui";


export default () => {

  return (
    <div>
      <Avatar
        name="John Doe"
        size="extraSmall"
        color="primary"
        imageUrl="https://picsum.photos/100/100"
        style={{ marginRight: 6 }}
      />
      <Avatar
        name="John Doe"
        size="small"
        color="accent"
        imageUrl="https://picsum.photos/100/100"
        style={{ marginRight: 6 }}
      />
      <Avatar
        name="John Doe"
        size="medium"
        color="success"
        imageUrl="https://picsum.photos/100/100"
        style={{ marginRight: 6 }}
      />
      <Avatar
        name="John Doe"
        size="large"
        color="warning"
        imageUrl="https://picsum.photos/100/100"
        style={{ marginRight: 6 }}
      />
      <Avatar
        name="John Doe"
        size="extraLarge"
        imageUrl="https://picsum.photos/100/100"
        color="danger"
      />
    </div>
  )
}`

export const DemoTwo = () => {

  return (
    <DemoBlock
      snippet={snippet}
      codeBlock={blockString}
    >
      {block}
    </DemoBlock>
  )
}
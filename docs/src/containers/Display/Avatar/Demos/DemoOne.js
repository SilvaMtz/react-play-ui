import { Avatar } from "react-play-ui";
import { DemoBlock } from "../../../../components/DemoBlock"

const snippet1 = `<Avatar
  name="John Doe"
  initials="JD"
  initialsLength={2}
  type="user"
  size="medium"
/>`

const codeBlock1 = `import { Avatar } from "react-play-ui";

export default () => {

  return (
    <div>
      <Avatar
        name="John Doe"
        size="extraSmall"
        color="primary"
        style={{ marginRight: 6 }}
      />
      <Avatar
        name="John Doe"
        size="small"
        color="accent"
        style={{ marginRight: 6 }}
      />
      <Avatar
        name="John Doe"
        size="medium"
        color="success"
        style={{ marginRight: 6 }}
      />
      <Avatar
        name="John Doe"
        size="large"
        color="warning"
        style={{ marginRight: 6 }}
      />
      <Avatar
        name="John Doe"
        size="extraLarge"
        color="danger"
      />
    </div>
  )
}`

export const DemoOne = () => {

  return (
    <DemoBlock
        snippet={snippet1}
        codeBlock={codeBlock1}
      >
        <div>
          <Avatar
            name="John Doe"
            size="extraSmall"
            color="primary"
            style={{ marginRight: 6 }}
          />
          <Avatar
            name="John Doe"
            size="small"
            color="accent"
            style={{ marginRight: 6 }}
          />
          <Avatar
            name="John Doe"
            size="medium"
            color="success"
            style={{ marginRight: 6 }}
          />
          <Avatar
            name="John Doe"
            size="large"
            color="warning"
            style={{ marginRight: 6 }}
          />
          <Avatar
            name="John Doe"
            size="extraLarge"
            color="danger"
          />
        </div>
      </DemoBlock>
  )
}
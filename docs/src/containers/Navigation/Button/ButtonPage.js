import { ActionButton, FlexGrid, FlexGroup, FlexItem } from "react-play-ui";

export const ButtonPage = (props) => {

  const clickHandler = () => {
    alert("You clicked an Action Button!")
  }

  return (
    <FlexGroup direction="column">
      <FlexItem>
        <h2>Button</h2>
      </FlexItem>
      <FlexItem>
        <FlexGrid columns={4} direction="column">
          <FlexItem>
            <ActionButton
              icon="check"
              label="extraSmall"
              color="default"
              fill={false}
              onClick={() => clickHandler()}
              size="extraSmall"
            />
          </FlexItem>
          <FlexItem>
            <ActionButton
              icon="check"
              label="extraSmall"
              color="primary"
              fill={false}
              onClick={() => clickHandler()}
              size="extraSmall"
            />
          </FlexItem>
          <FlexItem>
            <ActionButton
              icon="check"
              iconSide="right"
              label="extraSmall"
              color="warning"
              fill={false}
              onClick={() => clickHandler()}
              size="extraSmall"
            />
          </FlexItem>
          <FlexItem>
            <ActionButton
              icon="check"
              iconSide="right"
              label="extraSmall"
              color="danger"
              fill={false}
              onClick={() => clickHandler()}
              size="extraSmall"
            />
          </FlexItem>

          <FlexItem>
            <ActionButton
              icon="check"
              label="extraSmall Fill"
              color="default"
              fill={true}
              onClick={() => clickHandler()}
              size="extraSmall"
            />
          </FlexItem>
          <FlexItem>
            <ActionButton
              icon="check"
              label="extraSmall Fill"
              color="primary"
              fill={true}
              onClick={() => clickHandler()}
              size="extraSmall"
            />
          </FlexItem>
          <FlexItem>
            <ActionButton
              icon="check"
              iconSide="right"
              label="extraSmall Fill"
              color="warning"
              fill={true}
              onClick={() => clickHandler()}
              size="extraSmall"
            />
          </FlexItem>
          <FlexItem>
            <ActionButton
              icon="check"
              iconSide="right"
              label="extraSmall Fill"
              color="danger"
              fill={true}
              onClick={() => clickHandler()}
              size="extraSmall"
            />
          </FlexItem>

          <FlexItem>
            <ActionButton
              icon="check"
              label="Small Filled"
              color="default"
              fill={true}
              onClick={() => clickHandler()}
              size="small"
            />
          </FlexItem>
          <FlexItem>
            <ActionButton
              icon="check"
              label="Small Filled"
              color="primary"
              fill={true}
              onClick={() => clickHandler()}
              size="small"
            />
          </FlexItem>
          <FlexItem>
            <ActionButton
              icon="check"
              iconSide="right"
              label="Small Filled"
              color="warning"
              fill={true}
              onClick={() => clickHandler()}
              size="small"
            />
          </FlexItem>
          <FlexItem>
            <ActionButton
              icon="check"
              iconSide="right"
              label="Small Filled"
              color="danger"
              fill={true}
              onClick={() => clickHandler()}
              size="small"
            />
          </FlexItem>

          <FlexItem>
            <ActionButton
              icon="check"
              label="Medium Filled"
              color="default"
              fill={true}
              onClick={() => clickHandler()}
              size="medium"
            />
          </FlexItem>
          <FlexItem>
            <ActionButton
              icon="check"
              label="Medium Filled"
              color="primary"
              fill={true}
              onClick={() => clickHandler()}
              size="medium"
            />
          </FlexItem>
          <FlexItem>
            <ActionButton
              icon="check"
              iconSide="right"
              label="Medium Filled"
              color="warning"
              fill={true}
              onClick={() => clickHandler()}
              size="medium"
            />
          </FlexItem>
          <FlexItem>
            <ActionButton
              icon="check"
              iconSide="right"
              label="Medium Filled"
              color="danger"
              fill={true}
              onClick={() => clickHandler()}
              size="medium"
            />
          </FlexItem>

          <FlexItem>
            <ActionButton
              icon="check"
              label="Large Filled"
              color="default"
              fill={true}
              onClick={() => clickHandler()}
              size="large"
            />
          </FlexItem>
          <FlexItem>
            <ActionButton
              icon="check"
              label="Large Filled"
              color="primary"
              fill={true}
              onClick={() => clickHandler()}
              size="large"
            />
          </FlexItem>
          <FlexItem>
            <ActionButton
              icon="check"
              iconSide="right"
              label="Large Filled"
              color="warning"
              fill={true}
              onClick={() => clickHandler()}
              size="large"
            />
          </FlexItem>
          <FlexItem>
            <ActionButton
              icon="check"
              iconSide="right"
              label="Large Filled"
              color="danger"
              fill={true}
              onClick={() => clickHandler()}
              size="large"
            />
          </FlexItem>
        </FlexGrid>

      </FlexItem>

      <FlexItem>
        <h3>restrainWidth = false (default: true)</h3>
        <FlexGroup>
          <FlexItem>
            <ActionButton
              icon="check"
              iconSide="left"
              label="Button"
              color="primary"
              fill={true}
              onClick={() => clickHandler()}
              size="small"
              restrainWidth={false}
              />
          </FlexItem>
          <FlexItem>
            <ActionButton
              icon="check"
              iconSide="right"
              label="Button"
              color="success"
              fill={true}
              onClick={() => clickHandler()}
              size="small"
              restrainWidth={false}
            />
          </FlexItem>
        </FlexGroup>
      </FlexItem>
      <FlexItem>
        <h3>Disabled / Loading</h3>
        <FlexGroup>
          <FlexItem grow={false}>
            <ActionButton
              icon="check"
              iconSide="right"
              label="Button"
              color="success"
              disabled
              fill={true}
              onClick={() => clickHandler()}
              size="small"
              restrainWidth={true}
            />
          </FlexItem>
          <FlexItem grow={false}>
            <ActionButton
              icon="check"
              iconSide="right"
              label="Button"
              color="success"
              fill={true}
              onClick={() => clickHandler()}
              size="small"
              restrainWidth={true}
              isLoading={true}
            />
          </FlexItem>
        </FlexGroup>
      </FlexItem>
    </FlexGroup>
  );
};

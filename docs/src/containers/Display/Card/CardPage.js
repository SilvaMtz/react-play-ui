import React from "react";
import { DisplayCard, FlexGroup, FlexItem } from "react-play-ui";

export const CardPage = (props) => {
  return (
    <div>
      <h2>Card</h2>
      <FlexGroup>
        <FlexItem>
          <DisplayCard
            title="Card Title"
            image="https://picsum.photos/200/300"
            primaryAction={() => {}}
            secondaryAction={() => {}}
            subtitle={
              <p style={{ margin: 0, fontWeight: 300, opacity: 0.8 }}>
                Subtitle
              </p>
            }
          >
            Hello there!
          </DisplayCard>
        </FlexItem>
        <FlexItem>
          <DisplayCard
            title="Card Title"
            image="https://picsum.photos/200/300"
            primaryAction={()=>{}}
            subtitle={
              <p style={{ margin: 0, fontWeight: 300, opacity: 0.8 }}>
                Subtitle
              </p>
            }
          >
            Hello there!
          </DisplayCard>
        </FlexItem>
        <FlexItem>
          <DisplayCard
            title="Card Title"
            subtitle={
              <p style={{ margin: 0, fontWeight: 300, opacity: 0.8 }}>
                No image!
              </p>
            }
          >
            Hello there!
          </DisplayCard>
        </FlexItem>
        <FlexItem>
          <DisplayCard
            onClick={() => alert("clicked!")}
            title="Clickable!"
            image="https://picsum.photos/200/300"
            subtitle={
              <p style={{ margin: 0, fontWeight: 300, opacity: 0.8 }}>
                Subtitle
              </p>
            }
          >
            Click me!
          </DisplayCard>
        </FlexItem>
      </FlexGroup>
    </div>
  );
};

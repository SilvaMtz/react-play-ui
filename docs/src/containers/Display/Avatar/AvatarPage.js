import React, { useState } from "react";
import { Avatar, PlayPopover } from "react-play-ui";

export const AvatarPage = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <div>
      <h2>Avatar</h2>
      <Avatar name="David MArtinez" color="primary" />
      <Avatar name="David MArtinez" color="rgb(20, 230, 30)" />
      <Avatar name="Tania Todd" type="square" color="warning" />
      <Avatar
        name="Tania Todd"
        size="extraSmall"
        type="square"
        color="warning"
      />
      <Avatar name="Tania Todd" size="small" type="square" color="primary" />
      <Avatar name="Tania Todd" size="medium" type="square" color="accent" />
      <Avatar name="Tania Todd" size="large" type="square" color="aliceblue" />
      <Avatar
        name="Tania Todd"
        size="extraLarge"
        type="square"
        color="danger"
      />
      <h3>Clickable</h3>
      <Avatar
        name="David MArtinez"
        size="extraSmall"
        color="primary"
        onClick={() => {}}
      />
      <Avatar
        name="David MArtinez"
        size="small"
        color="accent"
        onClick={() => {}}
      />
      <Avatar
        name="David MArtinez"
        size="medium"
        color="success"
        onClick={() => {}}
      />
      <Avatar
        name="David MArtinez"
        size="large"
        color="warning"
        onClick={() => {}}
      />
      <Avatar
        name="David MArtinez"
        size="extraLarge"
        color="danger"
        onClick={() => {}}
      />
      <Avatar
        name="David MArtinez"
        type="square"
        color="primary"
        onClick={() => {}}
      />
      <PlayPopover
        content={<p>Thissa Popover!</p>}
        positions={["bottom", "top", "right"]}
        reposition={false}
        onClickOutside={() => setPopoverOpen(false)}
        isOpen={popoverOpen}
      >
        <Avatar
          name="David MArtinez"
          type="square"
          color="primary"
          size="extraLarge"
          onClick={() => setPopoverOpen(!popoverOpen)}
        />
      </PlayPopover>
    </div>
  );
};

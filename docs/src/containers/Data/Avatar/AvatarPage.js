import React from 'react';
import { Avatar } from 'react-play-ui';

export const AvatarPage = (props) => {

  return (
    <div>
      <h2>Avatar</h2>
      <Avatar name="David MArtinez" color="primary" />
      <Avatar name="David MArtinez" color="rgb(20, 230, 30)" />
      <Avatar name="Tania Todd" type="square" color="warning" />
      <Avatar name="Tania Todd" size="small" type="square" color="primary" />
      <Avatar name="Tania Todd" size="medium" type="square" color="accent" />
      <Avatar name="Tania Todd" size="large" type="square" color="aliceblue" />
      <Avatar name="Tania Todd" size="extraLarge" type="square" color="danger" />
    </div>
  )
}
import React from 'react';
import {
  SvgIcon,
  icons,
  outlineIcons
} from 'react-play-ui';

export const SvgIconPage = (props) => {

  return (
    <div>
      <h2>Svg Icon</h2>
      <SvgIcon icon="academicCap" outline />
      <SvgIcon icon="academicCap" />
      {Object.keys(icons).map((icon, index) => {
        return (
          <p key={index}>{icon}</p>
        )
      })}
    </div>

  )
}
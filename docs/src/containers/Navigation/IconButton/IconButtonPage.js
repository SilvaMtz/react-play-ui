import React from 'react';
import { FlexGroup, IconButton, FlexItem } from 'react-play-ui';

export const IconButtonPage = (props) => {

  return (
    <div>
      <h2>Icon Button</h2>
      <FlexGroup>
        <FlexItem grow={false}>
          <IconButton size="small" icon="cog" onClick={()=>{}} color="default" />
        </FlexItem>
        <FlexItem grow={false}>
          <IconButton size="medium" icon="cog" onClick={()=>{}} color="primary" />
        </FlexItem>
        <FlexItem grow={false}>
          <IconButton size="large" icon="cog" onClick={()=>{}} color="secondary" />
        </FlexItem>
        <FlexItem grow={false}>
          <IconButton size="small" icon="cog" onClick={()=>{}} color="accent" />
        </FlexItem>
        <FlexItem grow={false}>
          <IconButton size="medium" icon="cog" onClick={()=>{}} color="warning" />
        </FlexItem>
        <FlexItem grow={false}>
          <IconButton size="large" icon="cog" onClick={()=>{}} color="danger" />
        </FlexItem>
      </FlexGroup>
      <FlexGroup>
        <FlexItem grow={false}>
          <IconButton size="small" icon="cog" onClick={()=>{}} color="default" fill />
        </FlexItem>
        <FlexItem grow={false}>
          <IconButton size="medium" icon="cog" onClick={()=>{}} color="primary" fill />
        </FlexItem>
        <FlexItem grow={false}>
          <IconButton size="large" icon="cog" onClick={()=>{}} color="secondary" fill />
        </FlexItem>
        <FlexItem grow={false}>
          <IconButton size="small" icon="cog" onClick={()=>{}} color="accent" fill />
        </FlexItem>
        <FlexItem grow={false}>
          <IconButton size="medium" icon="cog" onClick={()=>{}} color="warning" fill />
        </FlexItem>
        <FlexItem grow={false}>
          <IconButton size="large" icon="cog" onClick={()=>{}} color="danger" fill />
        </FlexItem>
        <FlexItem grow={false}>
          <IconButton icon="cog" onClick={()=>{}} />
        </FlexItem>
      </FlexGroup>
      <h3>Custom Colors</h3>
      <FlexGroup>
        <FlexItem grow={false}>
          <IconButton size="small" icon="cog" onClick={()=>{}} color="purple" />
        </FlexItem>
        <FlexItem grow={false}>
          <IconButton size="medium" icon="cog" onClick={()=>{}} color="beige" />
        </FlexItem>
        <FlexItem grow={false}>
          <IconButton size="large" icon="cog" onClick={()=>{}} color="violet" />
        </FlexItem>
        <FlexItem grow={false}>
          <IconButton size="small" icon="cog" onClick={()=>{}} color="green" fill />
        </FlexItem>
        <FlexItem grow={false}>
          <IconButton size="medium" icon="cog" onClick={()=>{}} color="turquoise" fill />
        </FlexItem>
        <FlexItem grow={false}>
          <IconButton size="large" icon="cog" onClick={()=>{}} color="teal" fill />
        </FlexItem>
        <FlexItem grow={false}>
          <IconButton size="small" icon="cog" onClick={()=>{}} color="red" iconFill="blue" fill />
        </FlexItem>
        <FlexItem grow={false}>
          <IconButton size="medium" icon="cog" onClick={()=>{}} color="green" iconFill="red" fill />
        </FlexItem>
        <FlexItem grow={false}>
          <IconButton size="large" icon="cog" onClick={()=>{}} color="blue" fill iconFill="green" />
        </FlexItem>
      </FlexGroup>
    </div>
  )
}
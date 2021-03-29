import React, { FunctionComponent } from 'react';
import { Popover, PopoverProps } from 'react-tiny-popover';

export const PlayPopover: FunctionComponent<PopoverProps> = ({
  children,
  ...rest
}) => {
  return (
    <Popover {...rest}>
      {children}
    </Popover>
  )
}
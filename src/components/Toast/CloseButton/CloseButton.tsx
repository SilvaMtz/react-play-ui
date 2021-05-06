import * as React from 'react';
import { TypeOptions } from '../../../utils/toast/types';
import { IconButton } from '../../IconButton';

export interface CloseButtonProps {
  closeToast: (e: React.MouseEvent<HTMLElement>) => void;
  type: TypeOptions;
  ariaLabel?: string;
}

export function CloseButton({
  closeToast,
  type,
  ariaLabel = 'close'
}: CloseButtonProps) {
  return (
    <IconButton
      type="button"
      icon="x"
      size="extraSmall"
      onClick={e => {
        e.stopPropagation();
        closeToast(e);
      }}
      aria-label={ariaLabel}
    />
  );
}

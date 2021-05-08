import classes from './CloseButton.module.css';
import * as React from 'react';
import { TypeOptions } from '../../../utils/toast/types';
import { IconButton } from '../../IconButton';
import { Default } from '../../../utils/toast';

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
      icon="x"
      type="button"
      size="extraSmall"
      aria-label={ariaLabel}
      className={classes[`${Default.CSS_NAMESPACE}__close-button`]}
      onClick={e => {
        e.stopPropagation();
        closeToast(e);
      }}
    />
  );
}

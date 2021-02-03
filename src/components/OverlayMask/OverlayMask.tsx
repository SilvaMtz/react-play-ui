import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import classes from './OverlayMask.module.css';

type OverlayProps = {
  onClick: any;
}

export const OverlayMask: FunctionComponent<OverlayProps> = ({
  children,
  onClick,
  ...rest
}) => {
  let classList = [classes['overlay-mask']]

  useEffect(() => {
    document.body.classList.add(classes['body--hasOverlay']);

    return () => {
      document.body.classList.remove(classes['body--hasOverlay']);
    }
  }, [])

  const stopClick = (e:any) => {
    e.stopPropagation();
  }

  // TODO: Fix onClose click event when clicking the mask itself.
  let mask = (
    <div role="button" className={classList.join(' ')} onClick={onClick} {...rest}>
      <div className={classes['overlay-children']} onClick={stopClick}>{children}</div>
    </div>
  )

  return ReactDOM.createPortal(mask, document.body)
}

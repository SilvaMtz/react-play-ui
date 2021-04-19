import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import classes from './OverlayMask.module.css';

export type OverlayProps = {
  onClick: any;
  backgroundBlur?: boolean;
}

export const OverlayMask: FunctionComponent<OverlayProps> = ({
  children,
  onClick,
  backgroundBlur = false,
  ...rest
}) => {
  let classList = [
    classes['overlay-mask'],
    backgroundBlur ? classes['mask--backgroundBlur'] : null
  ]

  useEffect(() => {
    document.body.classList.add(classes['body--hasOverlay']);

    return () => {
      document.body.classList.remove(classes['body--hasOverlay']);
    }
  }, [])

  const stopClick = (e:any) => {
    e.stopPropagation();
  }

  let mask = (
    <div role="button" className={classList.join(' ')} onClick={onClick} {...rest}>
      <div className={classes['overlay-children']} onClick={stopClick}>{children}</div>
    </div>
  )

  return ReactDOM.createPortal(mask, document.body)
}

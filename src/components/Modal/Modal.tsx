import React, { FunctionComponent, ReactNode } from 'react';
import classes from './Modal.module.css';
import { OverlayMask } from '../OverlayMask';
import { PanelCard } from '../PanelCard';
import { SvgIcon } from '../SvgIcon';
import { IconButton } from '../IconButton';

interface ModalProps {
  paddingSize?: string;
  icon?: string;
  onClose: any;
  title: string;
  children?: ReactNode;
  maxWidth?: any;
}

export const Modal: FunctionComponent<ModalProps> = ({
  paddingSize = "medium",
  icon,
  onClose,
  title,
  children,
  maxWidth = 600,
  ...rest
}) => {

  const bodyPaddingSizeClassMapping = {
    none: 'body--paddingNone',
    small: 'body--paddingSmall',
    medium: 'body--paddingMedium',
    large: 'body--paddingLarge'
  }


  let iconInstance = null;
  if (icon) {
    iconInstance = <SvgIcon icon={icon} />;
  }

  let bodyClassList = [
    classes['modal-body'],
    classes[bodyPaddingSizeClassMapping[paddingSize]]
  ];

  return (
    <OverlayMask onClick={onClose}>
      <PanelCard className={classes['modal-animation']} flexDirection="column" maxWidth={maxWidth} paddingSize="none" {...rest}>
        <div className={classes['modal-header']}>
          <div className={classes['modal-title']}>
            {iconInstance}
            <h2>{title}</h2>
          </div>
          <IconButton icon="x" onClick={onClose} />
        </div>
        <div className={bodyClassList.join(' ')}>{children}</div>
      </PanelCard>
    </OverlayMask>
  );
};
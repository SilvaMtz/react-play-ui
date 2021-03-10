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
  backgroundBlur?: boolean;
  centerTitle?: boolean
}

export const Modal: FunctionComponent<ModalProps> = ({
  paddingSize = "medium",
  icon,
  onClose,
  title,
  children,
  maxWidth = 600,
  backgroundBlur = true,
  centerTitle = false,
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

  let headerClassList = [
    classes['modal-header'],
    centerTitle ? classes['center-header'] : null
  ];

  let modalClassList = [
    classes['modal-panel'],
    classes['modal-animation']
  ]

  let headerInstance = (
    <div className={headerClassList.join(' ')}>
      <div className={classes['modal-title']}>
        {iconInstance}
        <h2>{title}</h2>
      </div>
    </div>
  );

  return (
    <OverlayMask backgroundBlur={backgroundBlur} onClick={onClose}>
      <PanelCard gutterSize="none" className={modalClassList.join(' ')} direction="column" maxWidth={maxWidth} paddingSize="none" {...rest}>
        {headerInstance}
        <IconButton size="small" style={{position: "absolute", top: 12, right: 12}} icon="x" onClick={onClose} />
        <div className={bodyClassList.join(' ')}>{children}</div>
      </PanelCard>
    </OverlayMask>
  );
};
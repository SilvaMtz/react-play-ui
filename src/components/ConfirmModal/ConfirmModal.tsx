import React, { FunctionComponent, ReactNode } from 'react';
import classes from './ConfirmModal.module.css';
import { ActionButton } from '../ActionButton';
import { FlexGroup } from '../FlexGroup';
import { FlexItem } from '../FlexItem';
import { Modal } from '../Modal';

interface ConfirmModalProps {
  paddingSize?: string;
  icon?: string;
  onClose: any;
  title?: string;
  children?: ReactNode;
  body?: string;
  maxWidth?: number | string;
  backgroundBlur?: boolean;
  maxHeight?: number | string;
  onConfirm: () => {};
  confirmLabel?: string;
  confirmColor?: string;
  cancelLabel?: string;
}

export const ConfirmModal: FunctionComponent<ConfirmModalProps> = ({
  paddingSize = "large",
  icon,
  onClose,
  title,
  children,
  body,
  maxWidth,
  backgroundBlur,
  maxHeight,
  confirmLabel = "Confirm",
  confirmColor = "primary",
  cancelLabel = "Cancel",
  onConfirm,
}) => {

  let contentInstance: ReactNode = children ? children : (
    <p className={classes['bodyText']}>
      {body}
    </p>
  )

  return (
    <Modal
      paddingSize={paddingSize}
      title={title}
      centerTitle={false}
      icon={icon}
      maxWidth={maxWidth}
      backgroundBlur={backgroundBlur}
      maxHeight={maxHeight}
      onClose={onClose}
      footer={(
        <FlexGroup gutterSize="s">
          <FlexItem>
            <ActionButton restrainWidth={false} fill color="default" label={cancelLabel} onClick={onClose} />
          </FlexItem>
          <FlexItem>
            <ActionButton restrainWidth={false} fill color={confirmColor} label={confirmLabel} onClick={onConfirm} />
          </FlexItem>
        </FlexGroup>
      )}
    >
      {contentInstance}
    </Modal>
  )
}
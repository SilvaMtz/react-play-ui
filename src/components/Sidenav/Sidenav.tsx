import React, { FunctionComponent, ReactNode, useEffect } from 'react'
import { ContextMenuItem } from '../ContextMenu/ContextMenuItem/ContextMenuItem'
import { OverlayMask } from '../OverlayMask'
// import { Divider } from '../Divider';
import classes from './Sidenav.module.css'
import { ContextMenu } from '../ContextMenu'
import { ContextMenuPanelDescriptor } from '../ContextMenu/ContextMenu';
import { SidenavItem } from './SidenavItem'

interface SidenavProps {
  panels?: ContextMenuPanelDescriptor[];
  transparent?: boolean
  isDocked?: boolean
  onClose?: any;
  children?: ReactNode;
  className?: string;
  itemsSize?: string;
  // header?: ReactNode;
}

export const Sidenav: FunctionComponent<SidenavProps> = ({
  panels,
  transparent = false,
  isDocked = false,
  onClose,
  children,
  className,
  itemsSize = 'medium',
  // header,
  ...rest
}) => {

  let classList = [
    classes['sidenav'],
    !transparent ? classes['sidenav--background'] : null
  ]

  // useEffect(() => {
  //   if (isDocked) {
  //     document.body.classList.add(classes['sidenav-docked'])
  //   }

  //   return () => {
  //     document.body.classList.add(classes['sidenav-docked'])
  //   }
  // }, [isDocked])



  let maskInstance = !isDocked ? <OverlayMask onClick={onClose} /> : null

  return (
    <React.Fragment>
      {maskInstance}
      <div className={classList.join(' ')} {...rest}>
        {children ?
          children
          : panels ?
            <ContextMenu
              initialPanelId={0}
              itemsSize={itemsSize}
              panels={panels}
              transparent
              width="100%"
            />
            : null
        }
      </div>
    </React.Fragment>
  )
}

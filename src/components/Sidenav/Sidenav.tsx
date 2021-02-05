import React, { FunctionComponent, ReactNode, useEffect } from 'react'
import { OverlayMask } from '../OverlayMask'
// import { Divider } from '../Divider';
import classes from './Sidenav.module.css'
import { ContextMenu } from '../ContextMenu'
import { ContextMenuPanelDescriptor } from '../ContextMenu/ContextMenu';
import { SidenavHeader } from './SidenavHeader';

interface SidenavProps {
  panels?: ContextMenuPanelDescriptor[];
  transparent?: boolean
  isDocked?: boolean
  onClose?: any;
  children?: ReactNode;
  className?: string;
  itemsSize?: string;
  avatar: any;
  header: ReactNode;
  transparentHeader?: boolean;
  // header?: ReactNode;
}

export const Sidenav: FunctionComponent<SidenavProps> = ({
  panels,
  transparent = false,
  isDocked = false,
  onClose,
  children,
  avatar,
  header,
  className,
  transparentHeader = false,
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
  let headerInstance;
  if (header || avatar) {
    headerInstance = (
      <div className={classes['header-container']}>
        <SidenavHeader transparent={transparentHeader}>
          {header}
        </SidenavHeader>
      </div>
    )
  }

  return (
    <React.Fragment>
      {maskInstance}
      <div className={classList.join(' ')} {...rest}>
        {headerInstance}
        <div className={classes['options-container']}>
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
      </div>
    </React.Fragment>
  )
}

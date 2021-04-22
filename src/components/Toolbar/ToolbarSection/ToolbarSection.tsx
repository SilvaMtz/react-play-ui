import classNames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';
import classes from './ToolbarSection.module.css';

export type ToolbarSectionItemType = {
  id: string | number;
  content: ReactNode;
  itemClassName?: string;
}
export interface ToolbarSectionProps {
  items: ToolbarSectionItemType[];
}

export const ToolbarSection:FunctionComponent<ToolbarSectionProps> = ({
  items
}) => {

  return (
    <div className={classes['toolbar-section']}>
      {items.map(item => {
        const classList = classNames(
          classes["section-item"],
          item.itemClassName
        );
        return (
          <div key={item.id} className={classList}>
            {item.content}
          </div>
        )
      })}
    </div>
  )
}
import React, { FunctionComponent } from 'react';
import classes from './ToolbarSection.module.css';

interface ToolbarSectionProps {
  items: Array<any>;
}

export const ToolbarSection:FunctionComponent<ToolbarSectionProps> = ({
  items
}) => {
  return (
    <div className={classes['toolbar-section']}>
      {items.map(item => {
        return (
          <div key={item.id} className={classes['section-item']}>
            {item.content}
          </div>
        )
      })}
    </div>
  )
}
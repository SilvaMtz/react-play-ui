import React, { FunctionComponent, useEffect } from 'react'
import classes from './Toolbar.module.css'
import { ToolbarSection } from './ToolbarSection';

interface ToolbarProps {
  sections: Array<any>;
}

export const Toolbar: FunctionComponent<ToolbarProps> = ({
  sections,
  ...rest
}) => {

  useEffect(() => {
    document.body.classList.add(classes['toolbar-spacing']);

    return () => {
      document.body.classList.remove(classes['toolbar-spacing']);
    }
  }, []);

  let classList = [
    classes['toolbar'],
    sections.length > 1 ? classes['space-between'] : null
  ]

  return (
    <nav className={classList.join(' ')} {...rest}>
      {sections.map(section => {
        return <ToolbarSection key={section.id} items={section.items} />
      })}
    </nav>
  )
}

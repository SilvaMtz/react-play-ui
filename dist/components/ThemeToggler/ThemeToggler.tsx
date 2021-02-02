import React from 'react'
import { IconButton } from '../IconButton'

interface ThemeTogglerProps {
  theme: any;
  toggleTheme: any;
}

export const ThemeToggler = ({
  theme,
  toggleTheme
}: ThemeTogglerProps) => {
  let svgIcon = theme === 'light' ? 'moon' : 'sun'

  return <IconButton onClick={toggleTheme} icon={svgIcon} />
}

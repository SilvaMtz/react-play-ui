import { useState } from 'react';
import { singletonHook } from 'react-singleton-hook';

const initDarkMode = "light";
let globalSetMode = (mode: string) => { throw new Error('you must useDarkMode before setting its state'); };

export const useDarkMode = singletonHook(initDarkMode, () => {
  const [mode, setMode] = useState(initDarkMode);
  globalSetMode = setMode as () => never;
  return mode;
});

export const setDarkMode = (mode:string) => globalSetMode(mode);
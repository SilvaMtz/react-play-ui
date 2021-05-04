import { useState } from 'react';
import { singletonHook } from 'react-singleton-hook';

const initDarkMode = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
let globalSetMode = (mode: string) => { throw new Error('you must useDarkMode before setting its state'); };

export const useDarkMode = singletonHook(initDarkMode, () => {
  const [mode, setMode] = useState(initDarkMode);

  const setNewMode = (newMode) => {
    setMode(newMode);
    localStorage.setItem('theme', newMode);
  }

  globalSetMode = setNewMode as () => never;
  return mode;
});

export const setDarkMode = (mode:string) => globalSetMode(mode);
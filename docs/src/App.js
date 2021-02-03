import React from 'react'
import './App.css';
import { ThemeProvider } from 'styled-components';
import {
  GlobalStyles,
  LightTheme,
  DarkTheme,
  ThemeToggler,
  useDarkMode,
  ActionButton
} from 'react-play-ui';

const App = () => {

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? LightTheme : DarkTheme;

  return (

    <ThemeProvider theme={themeMode}>
      <GlobalStyles theme={themeMode} />
      <div className="App">
        <ThemeToggler theme={theme} toggleTheme={themeToggler} />
        <ActionButton onClick={() =>{}}>CLICK!</ActionButton>
      </div>
    </ThemeProvider>
  );
}

export default App;

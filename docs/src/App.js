import React from 'react'
import './App.css';
import { ThemeProvider } from 'styled-components';
import {
  GlobalStyles,
  LightTheme,
  DarkTheme,
  useDarkMode,
  PanelCard,
} from 'react-play-ui';
import { Layout } from './hoc';

const App = () => {

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? LightTheme : DarkTheme;

  return (

    <ThemeProvider theme={themeMode}>
      <GlobalStyles theme={themeMode} />
      <div className="App">
        <Layout theme={theme} toggleTheme={themeToggler} />
        <PanelCard>
          Doc Content
        </PanelCard>
      </div>
    </ThemeProvider>
  );
}

export default App;

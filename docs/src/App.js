import React, { useState } from 'react'
import './App.css';
import { ThemeProvider } from 'styled-components';
import {
  GlobalStyles,
  LightTheme,
  DarkTheme,
  ThemeToggler,
  useDarkMode,
  ActionButton,
  Divider,
  FlexGroup,
  FlexItem,
  InputField,
  PanelCard
} from 'react-play-ui';

const App = () => {

  const [theme, themeToggler] = useDarkMode();
  const [search, setSearch] = useState();
  const themeMode = theme === 'light' ? LightTheme : DarkTheme;

  return (

    <ThemeProvider theme={themeMode}>
      <GlobalStyles theme={themeMode} />
      <div className="App">
        <FlexGroup>
          <FlexItem>
            <ThemeToggler theme={theme} toggleTheme={themeToggler} />
          </FlexItem>
          <FlexItem>
            <ActionButton color="primary" onClick={() =>{}}>CLICK!</ActionButton>
          </FlexItem>
          <FlexItem>
            <ActionButton color="danger" onClick={() =>{}}>CLICK!</ActionButton>
          </FlexItem>
          <FlexItem>
            <ActionButton fill={false} color="primary" onClick={() =>{}}>CLICK!</ActionButton>
          </FlexItem>
        </FlexGroup>
        <Divider />
        <FlexGroup responsive={false}>
          <FlexItem>
            <ActionButton color="secondary" onClick={() =>{}}>CLICK!</ActionButton>
          </FlexItem>
          <FlexItem>
            <ActionButton color="primary" onClick={() =>{}}>CLICK!</ActionButton>
          </FlexItem>
          <FlexItem>
            <ActionButton color="danger" onClick={() =>{}}>CLICK!</ActionButton>
          </FlexItem>
          <FlexItem>
            <ActionButton fill={false} color="primary" onClick={() =>{}}>CLICK!</ActionButton>
          </FlexItem>
        </FlexGroup>
        <Divider />
          <PanelCard>
            <InputField
              icon='search'
              placeholder='Search'
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
            />
          </PanelCard>
      </div>
    </ThemeProvider>
  );
}

export default App;

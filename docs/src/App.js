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
  PanelCard,
  TextField,
  SelectField
} from 'react-play-ui';

const App = () => {

  const [theme, themeToggler] = useDarkMode();
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const themeMode = theme === 'light' ? LightTheme : DarkTheme;

  const bankOptions = [
    {
      value: 1,
      label: 'Banorte'
    },
    {
      value: 2,
      label: 'BBVA'
    },
    {
      value: 3,
      label: 'Scotiabank'
    },
    {
      value: 4,
      label: 'BanRegio'
    }
  ]

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
            <FlexGroup>
              <FlexItem>
                <InputField
                  icon='search'
                  placeholder='Search'
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  type="text"
                />
                <SelectField
                  icon='library'
                  label='Bank'
                  options={bankOptions}
                  onChange={setSelectedBank}
                  value={selectedBank}
                />
                <TextField
                  placeholder="Your message here..."
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </FlexItem>
              <FlexItem>

              </FlexItem>
            </FlexGroup>
          </PanelCard>
      </div>
    </ThemeProvider>
  );
}

export default App;

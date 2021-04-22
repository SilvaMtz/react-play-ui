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
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from './hoc';
import * as Pages from './containers';

const App = () => {

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? LightTheme : DarkTheme;

  const routes = (
    <Switch>
      <Route path="/navigation/icon-button">
        <Pages.IconButtonPage />
      </Route>
      <Route path="/navigation/button">
        <Pages.ButtonPage />
      </Route>
      <Route path="/navigation/bottom-nav">
        <Pages.BottomNavPage />
      </Route>
      <Route path="/navigation/context-menu">
        <Pages.ContextMenuPage />
      </Route>
      <Route path="/navigation/sidedrawer">
        <Pages.SideDrawerPage />
      </Route>
      <Route path="/navigation/tabs">
        <Pages.TabsPage />
      </Route>
      <Route path="/navigation/toolbar">
        <Pages.ToolbarPage />
      </Route>
      <Route path="/layout/divider">
        <Pages.DividerPage />
      </Route>
      <Route path="/layout/flex-group">
        <Pages.FlexGroupPage />
      </Route>
      <Route path="/layout/flex-item">
        <Pages.FlexItemPage />
      </Route>
      <Route path="/display/accordion">
        <Pages.AccordionPage />
      </Route>
      <Route path="/display/card">
        <Pages.CardPage />
      </Route>
      <Route path="/display/modal">
        <Pages.ModalPage />
      </Route>
      <Route path="/display/panel-card">
        <Pages.PanelCardPage />
      </Route>
      <Route path="/display/popover">
        <Pages.PopoverPage />
      </Route>
      <Route path="/display/tooltip">
        <Pages.TooltipPage />
      </Route>
      <Route path="/display/widget">
        <Pages.WidgetPage />
      </Route>
      <Route path="/display/callout">
        <Pages.CalloutPage />
      </Route>
      <Route path="/display/toast">
        <Pages.ToastPage />
      </Route>
      <Route path="/inputs">
        <Pages.InputsPage />
      </Route>
      <Route path="/data/avatar">
        <Pages.AvatarPage />
      </Route>
      <Route path="/data/chip">
        <Pages.ChipPage />
      </Route>
      <Route path="/data/number-badge">
        <Pages.NumberBadgePage />
      </Route>
      <Route path="/data/progress">
        <Pages.ProgressPage />
      </Route>
      <Route path="/data/icons">
        <Pages.SvgIconPage />
      </Route>
      <Route path="/">
        <Pages.HomePage />
      </Route>
    </Switch>
  )

  return (
    <BrowserRouter>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles theme={themeMode} />
        <div className="App">
          <Layout theme={theme} toggleTheme={themeToggler}>
            {routes}
          </Layout>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

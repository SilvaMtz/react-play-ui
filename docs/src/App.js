import React from 'react'
import './App.css';
import { ThemeProvider } from 'styled-components';
import {
  GlobalStyles,
  LightTheme,
  DarkTheme,
  useDarkMode,
  PanelCard,
  ToastContextProvider,
} from 'react-play-ui';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from './hoc';
import * as Pages from './containers';

const App = () => {

  const themeMode = useDarkMode() === 'light' ? LightTheme : DarkTheme;

  const routes = (
    <Switch>
      <Route path="/accordion">
        <Pages.AccordionPage />
      </Route>
      <Route path="/divider">
        <Pages.DividerPage />
      </Route>
      <Route path="/flex">
        <Pages.FlexPage />
      </Route>
      <Route path="/modal">
        <Pages.ModalPage />
      </Route>
      <Route path="/panel-card">
        <Pages.PanelCardPage />
      </Route>
      <Route path="/play-popover">
        <Pages.PopoverPage />
      </Route>
      <Route path="/side-drawer">
        <Pages.SideDrawerPage />
      </Route>
      <Route path="/toolbar">
        <Pages.ToolbarPage />
      </Route>
      <Route path="/button">
        <Pages.ButtonPage />
      </Route>
      <Route path="/context-menu">
        <Pages.ContextMenuPage />
      </Route>
      <Route path="/tabs">
        <Pages.TabsPage />
      </Route>
      <Route path="/avatar">
        <Pages.AvatarPage />
      </Route>
      <Route path="/callout">
        <Pages.CalloutPage />
      </Route>
      <Route path="/chips">
        <Pages.PopoverPage />
      </Route>
      <Route path="/display-card">
        <Pages.CardPage />
      </Route>
      <Route path="loading">
        <Pages.LoadingPage />
      </Route>
      <Route path="/number-badge">
        <Pages.NumberBadgePage />
      </Route>
      <Route path="/progress">
        <Pages.ProgressPage />
      </Route>
      <Route path="/icons">
        <Pages.SvgIconPage />
      </Route>
      <Route path="/toast">
        <ToastContextProvider position={["bottom", "right"]} duration={6000}>
          <Pages.ToastPage />
        </ToastContextProvider>
      </Route>
      <Route path="tooltip">
        <Pages.TooltipPage />
      </Route>
      <Route path="widget-card">
        <Pages.WidgetPage />
      </Route>
      <Route path="/observer">
        <Pages.ObserverPage />
      </Route>
      <Route path="/overlay-mask">
        <Pages.OverlayMaskPage />
      </Route>
      <Route path="/themes">
        <Pages.ThemesPage />
      </Route>
      <Route path="/form-controls">
        <Pages.FormControlsPage />
      </Route>
      <Route path="/form-layout">
        <Pages.FormLayoutPage />
      </Route>
      <Route path="/super-select">
        <Pages.SuperSelectPage />
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
          <Layout>
            {routes}
          </Layout>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

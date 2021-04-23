import React, { FunctionComponent, useState } from "react";
import {
  SideDrawer,
  IconButton,
  ThemeToggler,
  Toolbar,
  ToolbarSectionsPropType,
  Chip,
  SvgIcon,
} from "react-play-ui";
import { useLocation } from "react-router-dom";
import classes from "./Layout.module.css";
import logo from "../../assets/images/play-ui-logo.png";
import { LayoutSidenav } from './LayoutSidenav';

interface LayoutProps {
  theme: any;
  toggleTheme: any;
}

export const Layout: FunctionComponent<LayoutProps> = ({
  theme,
  toggleTheme,
  children,
}) => {
  const currentRoute = useLocation();
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const toolbarSections: ToolbarSectionsPropType = [
    {
      id: 0,
      items: [
        {
          id: 0,
          content: (
            <button className={classes["Header--Logo"]} onClick={() => {}}>
              <img src={logo} className={classes["Logo"]} />
              <h3>
                React <span className={classes["PlayUI-Label"]}>PlayUI</span>
              </h3>
            </button>
          ),
        },
      ],
    },
    {
      id: 0,
      items: [
        {
          id: 0,
          content: (
            <a href="https://github.com/SilvaMtz/react-play-ui" className={classes["Github--Version"]} onClick={() => {}}>
              <Chip href="https://github.com/SilvaMtz/react-play-ui" className={classes["VersionChip"]} label="0.0.37" color="success" />
              <SvgIcon icon="userCircle" size="large" />
            </a>
          ),
        },
        {
          id: 1,
          content: <ThemeToggler theme={theme} toggleTheme={toggleTheme} />,
        },
      ],
    },
  ];

  return (
    <React.Fragment>
      <Toolbar sections={toolbarSections} fixed compact />
      <div className={classes["Layout"]}>
        <LayoutSidenav />
        <div className={classes["Layout--PageContent"]}>{children}</div>
      </div>
    </React.Fragment>
  );
};

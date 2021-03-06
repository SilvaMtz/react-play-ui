import React, { FunctionComponent } from "react";
import {
  ThemeToggler,
  Toolbar,
  ToolbarSectionsPropType,
  Chip,
  SvgIcon,
  ActionButton,
} from "react-play-ui";
import classes from "./Layout.module.css";
import logo from "../../assets/images/play-ui-logo.png";
import { LayoutSidenav } from "./LayoutSidenav";

export const Layout: FunctionComponent = ({
  children,
}) => {

  const toolbarSections: ToolbarSectionsPropType = [
    {
      id: 0,
      items: [
        {
          id: 0,
          content: (
            <a className={classes["Header--Logo"]} href="/">
              <img src={logo} className={classes["Logo"]} alt="PlayUI" />
              <h3>
                React <span className={classes["PlayUI-Label"]}>PlayUI</span>
              </h3>
            </a>
          ),
        },
      ],
    },
    {
      id: 1,
      items: [
        {
          id: 0,
          content: (
            <a
              href="https://github.com/SilvaMtz/react-play-ui"
              className={classes["Github--Version"]}
              onClick={() => {}}
            >
              <Chip
                className={classes["VersionChip"]}
                label="0.0.44"
                color="success"
              />
              <SvgIcon icon="userCircle" size="large" />
            </a>
          ),
        },
        {
          id: 1,
          content: (
            <ThemeToggler
              node={(
                <ActionButton label="Toggle Dark Mode" onClick={()=>{}}/>
              )}
            />
          ),
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

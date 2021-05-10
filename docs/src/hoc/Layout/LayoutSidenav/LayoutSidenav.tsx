import React, { FunctionComponent } from "react";
import { useLocation } from "react-router";
import { Chip, Divider, InputField, SvgIcon } from "react-play-ui";
import classes from "./LayoutSidenav.module.css";
import classNames from "classnames";
import { useState } from "react";

export type SidenavItem = {
  id: number | string;
  href: string;
  isActive: boolean;
  label: string;
  isNew?: boolean;
  disabled?: boolean;
};

export type SidenavItemCollection = SidenavItem[];

export type SidenavSection = {
  id: number | string;
  title: string;
  icon: string;
  items: SidenavItemCollection;
};

export type SidenavSectionCollection = SidenavSection[];

export const LayoutSidenav: FunctionComponent = () => {
  const currentRoute = useLocation();
  const [searchValue, setSearchValue] = useState('');

  const layout: SidenavItemCollection = [
    {
      id: 0,
      href: "/accordion",
      isActive: currentRoute.pathname === "/accordion",
      label: "Accordion",
      disabled: false,
      isNew: false,
    },
    {
      id: 1,
      href: "/divider",
      isActive: currentRoute.pathname === "/divider",
      label: "Divider",
      disabled: false,
      isNew: false,
    },
    {
      id: 2,
      href: "/flex",
      isActive: currentRoute.pathname === "/flex",
      label: "Flex",
      disabled: false,
      isNew: false,
    },
    {
      id: 3,
      href: "/modal",
      isActive: currentRoute.pathname === "/modal",
      label: "Modal",
      disabled: false,
      isNew: false,
    },
    {
      id: 4,
      href: "/panel-card",
      isActive: currentRoute.pathname === "/panel-card",
      label: "Panel Card",
      disabled: false,
      isNew: false,
    },
    {
      id: 5,
      href: "/play-popover",
      isActive: currentRoute.pathname === "/play-popover",
      label: "Popover",
      disabled: false,
      isNew: false,
    },
    {
      id: 6,
      href: "/side-drawer",
      isActive: currentRoute.pathname === "/side-drawer",
      label: "Side Drawer",
      disabled: false,
      isNew: false,
    },
    {
      id: 7,
      href: "/toolbar",
      isActive: currentRoute.pathname === "/toolbar",
      label: "Toolbar",
      disabled: false,
      isNew: false,
    },
  ];

  const navigation: SidenavItemCollection = [
    {
      id: 0,
      href: "/button",
      isActive: currentRoute.pathname === "/button",
      label: "Button",
      disabled: false,
      isNew: false,
    },
    {
      id: 1,
      href: "/context-menu",
      isActive: currentRoute.pathname === "/context-menu",
      label: "Context Menu",
      disabled: false,
      isNew: false,
    },
    {
      id: 2,
      href: "/tabs",
      isActive: currentRoute.pathname === "/tabs",
      label: "Tabs",
      disabled: false,
      isNew: false,
    },
  ];

  const display: SidenavItemCollection = [
    {
      id: 0,
      href: "/avatar",
      isActive: currentRoute.pathname === "/avatar",
      label: "Avatar",
      disabled: false,
      isNew: false,
    },
    {
      id: 1,
      href: "/callout",
      isActive: currentRoute.pathname === "/callout",
      label: "Callout",
      disabled: false,
      isNew: false,
    },
    {
      id: 2,
      href: "/chips",
      isActive: currentRoute.pathname === "/chips",
      label: "Chips",
      disabled: false,
      isNew: false,
    },
    {
      id: 3,
      href: "/display-card",
      isActive: currentRoute.pathname === "/display-card",
      label: "Display Card",
      disabled: false,
      isNew: false,
    },
    {
      id: 4,
      href: "/loading",
      isActive: currentRoute.pathname === "/loading",
      label: "Loading",
      disabled: false,
      isNew: false,
    },
    {
      id: 5,
      href: "/number-badge",
      isActive: currentRoute.pathname === "/number-badge",
      label: "Number Badge",
      disabled: false,
      isNew: false,
    },
    {
      id: 6,
      href: "/progress",
      isActive: currentRoute.pathname === "/progress",
      label: "Progress",
      disabled: false,
      isNew: false,
    },
    {
      id: 7,
      href: "/icons",
      isActive: currentRoute.pathname === "/icons",
      label: "Icons",
      disabled: false,
      isNew: false,
    },
    {
      id: 8,
      href: "/rating-button",
      isActive: currentRoute.pathname === "/rating-button",
      label: "Rating Button",
      disabled: false,
      isNew: true,
    },
    {
      id: 8,
      href: "/toast",
      isActive: currentRoute.pathname === "/toast",
      label: "Toast",
      disabled: false,
      isNew: false,
    },
    {
      id: 9,
      href: "/tooltip",
      isActive: currentRoute.pathname === "/tooltip",
      label: "Tooltip",
      disabled: false,
      isNew: false,
    },
    {
      id: 10,
      href: "/widget-card",
      isActive: currentRoute.pathname === "/widget-card",
      label: "Widget Card",
      disabled: false,
      isNew: false,
    },
  ];

  const utility: SidenavItemCollection = [
    {
      id: 0,
      href: "/observer",
      isActive: currentRoute.pathname === "/observer",
      label: "Observer",
      disabled: false,
      isNew: false,
    },
    {
      id: 1,
      href: "/overlay-mask",
      isActive: currentRoute.pathname === "/overlay-mask",
      label: "Overlay Mask",
      disabled: false,
      isNew: false,
    },
    {
      id: 2,
      href: "/themes",
      isActive: currentRoute.pathname === "/themes",
      label: "Themes",
      disabled: false,
      isNew: false,
    },
  ];

  const form: SidenavItemCollection = [
    {
      id: 0,
      href: "/form-controls",
      isActive: currentRoute.pathname === "/form-controls",
      label: "Form Controls",
      disabled: false,
      isNew: false,
    },
    {
      id: 1,
      href: "/form-layout",
      isActive: currentRoute.pathname === "/form-layout",
      label: "Form Layout",
      disabled: false,
      isNew: false,
    },
    {
      id: 2,
      href: "/super-select",
      isActive: currentRoute.pathname === "/super-select",
      label: "Super Select",
      disabled: false,
      isNew: false,
    },
  ];

  const [layoutItems, setLayoutItems] = useState(layout);
  const [navigationItems, setNavigationItems] = useState(navigation);
  const [displayItems, setDisplayItems] = useState(display);
  const [utilityItems, setUtilityItems] = useState(utility);
  const [formItems, setFormItems] = useState(form);

  const sidenavSections: SidenavSectionCollection = [
    {
      id: 0,
      title: "Layout",
      icon: "template",
      items: layoutItems,
    },
    {
      id: 1,
      title: "Navigation",
      icon: "map",
      items: navigationItems,
    },
    {
      id: 2,
      title: "Display",
      icon: "chartBar",
      items: displayItems,
    },
    {
      id: 3,
      title: "Forms",
      icon: "menuAlt1",
      items: formItems,
    },
    {
      id: 4,
      title: "Utilities",
      icon: "adjustments",
      items: utilityItems,
    },
  ];

  const handleFilter: (
    value: string,
    array: SidenavItemCollection,
  ) => SidenavItemCollection = (
    value: string,
    array: SidenavItemCollection,
   ) => {
    setSearchValue(value);
    const options = [...array];
    const filteredArray = options.filter(opt => {
      const label = opt.label.toLowerCase();
      const search = value.toLowerCase();
      return label.includes(search);
    });
    return filteredArray;
  };

  const handleSearch = (value: string) => {
    setLayoutItems([...handleFilter(value, layout)]);
    setNavigationItems([...handleFilter(value, navigation)]);
    setDisplayItems([...handleFilter(value, display)]);
    setFormItems([...handleFilter(value, form)]);
    setUtilityItems([...handleFilter(value, utility)]);
  };

  return (
    <div className={classes["SideNav"]}>
      <div className={classes["SideNav--Searchbar"]}>
        <InputField placeholder="Search" icon="search" value={searchValue} onChange={(e) => handleSearch(e.target.value)}/>
      </div>
      <div className={classes["SideNav--NavSections"]}>
        {sidenavSections.map((section: SidenavSection) => {
          return (
            <React.Fragment key={section.id}>
              {!(section.items.length === 0) ? (
                <React.Fragment>
                  <span className={classes["NavSections--Title"]}>
                    <SvgIcon icon={section.icon} size="small" />
                    <h3>{section.title}</h3>
                  </span>
                  {section.items.map((item: SidenavItem) => {
                    const classList = classNames(
                      classes["NavSection--ItemButton"],
                      item.disabled ? classes["ItemButton__disabled"] : null,
                      item.isNew ? classes["ItemButton__spaceBetween"] : null,
                      item.isActive ? classes["ItemButton__isActive"] : null
                    );
                    return (
                      <a key={item.id} className={classList} href={item.href}>
                        {item.label}
                        {item.isNew ? (
                          <Chip
                            icon="sparkles"
                            iconSide="left"
                            label="New"
                            color="accent"
                          />
                        ) : null}
                      </a>
                    );
                  })}
                <Divider />
                </React.Fragment>
              ) : null}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

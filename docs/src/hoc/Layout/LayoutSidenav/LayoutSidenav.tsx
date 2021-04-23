import { FunctionComponent, ReactNode } from "react"
import { useLocation } from 'react-router'

export type SidenavItem = {
  id: number | string,
  href: string,
  isActive: boolean;
  label: ReactNode;
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

export const LayoutSidenav: FunctionComponent = ({}) => {

  const currentRoute = useLocation();

  let layoutItems: SidenavItemCollection = [
    {
      id: 0,
      href: "/accordion",
      isActive: currentRoute.pathname === "/accordion",
      label: "Accordion",
      disabled: false,
      isNew: false
    },
    {
      id: 1,
      href: "/divider",
      isActive: currentRoute.pathname === "/divider",
      label: "Divider",
      disabled: false,
      isNew: false
    },
    {
      id: 2,
      href: "/flex",
      isActive: currentRoute.pathname === "/flex",
      label: "Flex",
      disabled: false,
      isNew: false
    },
    {
      id: 3,
      href: "/modal",
      isActive: currentRoute.pathname === "/modal",
      label: "Modal",
      disabled: false,
      isNew: false
    },
    {
      id: 4,
      href: "/panel-card",
      isActive: currentRoute.pathname === "/panel-card",
      label: "Panel Card",
      disabled: false,
      isNew: false
    },
    {
      id: 5,
      href: "/play-popover",
      isActive: currentRoute.pathname === "/play-popover",
      label: "Popover",
      disabled: false,
      isNew: false
    },
    {
      id: 6,
      href: "/side-drawer",
      isActive: currentRoute.pathname === "/side-drawer",
      label: "Side Drawer",
      disabled: false,
      isNew: false
    },
    {
      id: 7,
      href: "/toolbar",
      isActive: currentRoute.pathname === "/toolbar",
      label: "Toolbar",
      disabled: false,
      isNew: false
    },
  ]

  let navigationItems: SidenavItemCollection = [
    {
      id: 0,
      href: "/button",
      isActive: currentRoute.pathname === "/button",
      label: "Button",
      disabled: false,
      isNew: false
    },
    {
      id: 1,
      href: "/context-menu",
      isActive: currentRoute.pathname === "/context-menu",
      label: "Context Menu",
      disabled: false,
      isNew: false
    },
    {
      id: 2,
      href: "/tabs",
      isActive: currentRoute.pathname === "/tabs",
      label: "Tabs",
      disabled: false,
      isNew: false
    },
  ]

  let displayItems: SidenavItemCollection = [
    {
      id: 0,
      href: "/avatar",
      isActive: currentRoute.pathname === "/avatar",
      label: "Avatar",
      disabled: false,
      isNew: false
    },
    {
      id: 1,
      href: "/callout",
      isActive: currentRoute.pathname === "/callout",
      label: "Callout",
      disabled: false,
      isNew: false
    },
    {
      id: 2,
      href: "/chips",
      isActive: currentRoute.pathname === "/chips",
      label: "Chips",
      disabled: false,
      isNew: false
    },
    {
      id: 3,
      href: "/display-card",
      isActive: currentRoute.pathname === "/display-card",
      label: "Display Card",
      disabled: false,
      isNew: false
    },
    {
      id: 4,
      href: "/loading",
      isActive: currentRoute.pathname === "/loading",
      label: "Loading",
      disabled: false,
      isNew: false
    },
    {
      id: 5,
      href: "/number-badge",
      isActive: currentRoute.pathname === "/number-badge",
      label: "Number Badge",
      disabled: false,
      isNew: false
    },
    {
      id: 6,
      href: "/progress",
      isActive: currentRoute.pathname === "/progress",
      label: "Progress",
      disabled: false,
      isNew: false
    },
    {
      id: 7,
      href: "/icons",
      isActive: currentRoute.pathname === "/icons",
      label: "Icons",
      disabled: false,
      isNew: false
    },
    {
      id: 8,
      href: "/toast",
      isActive: currentRoute.pathname === "/toast",
      label: "Toast",
      disabled: false,
      isNew: false
    },
    {
      id: 9,
      href: "/tooltip",
      isActive: currentRoute.pathname === "/tooltip",
      label: "Tooltip",
      disabled: false,
      isNew: false
    },
    {
      id: 10,
      href: "/widget-card",
      isActive: currentRoute.pathname === "/widget-card",
      label: "Widget Card",
      disabled: false,
      isNew: false
    },
  ];

  let utilityItems: SidenavItemCollection = [
    {
      id: 0,
      href: "/observer",
      isActive: currentRoute.pathname === "/observer",
      label: "Observer",
      disabled: false,
      isNew: false
    },
    {
      id: 1,
      href: "/overlay-mask",
      isActive: currentRoute.pathname === "/overlay-mask",
      label: "Overlay Mask",
      disabled: false,
      isNew: false
    },
    {
      id: 2,
      href: "/themes",
      isActive: currentRoute.pathname === "/themes",
      label: "Themes",
      disabled: false,
      isNew: false
    },
  ]

  let formItems: SidenavItemCollection = [
    {
      id: 0,
      href: "/form-controls",
      isActive: currentRoute.pathname === "/form-controls",
      label: "Form Controls",
      disabled: false,
      isNew: false
    },
    {
      id: 1,
      href: "/form-layout",
      isActive: currentRoute.pathname === "/form-layout",
      label: "Form Layout",
      disabled: false,
      isNew: false
    },
    {
      id: 2,
      href: "/super-select",
      isActive: currentRoute.pathname === "/super-select",
      label: "Super Select",
      disabled: false,
      isNew: false
    },
  ]

  const sidenavSections: SidenavSectionCollection = [
    {
      id: 0,
      title: "Layout",
      icon: "viewGrid",
      items: layoutItems
    },
    {
      id: 1,
      title: "Navigation",
      icon: "viewGrid",
      items: navigationItems
    },
    {
      id: 2,
      title: "Display",
      icon: "viewGrid",
      items: displayItems
    },
    {
      id: 3,
      title: "Forms",
      icon: "viewGrid",
      items: formItems
    },
    {
      id: 4,
      title: "Utilities",
      icon: "viewGrid",
      items: utilityItems
    },
  ]

  return (
    <div>

    </div>
  )
}
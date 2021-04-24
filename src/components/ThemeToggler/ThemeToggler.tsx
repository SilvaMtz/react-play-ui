import {
  FunctionComponent,
  ReactNode,
  cloneElement,
  ReactElement,
} from "react";
import { setDarkMode, useDarkMode } from "../../services/useDarkMode";

export interface ThemeTogglerProps {
  node: ReactNode;
}

export const ThemeToggler: FunctionComponent<ThemeTogglerProps> = ({ node }) => {
  const theme = useDarkMode();

  const handleThemeChange = () => {
    if (theme === "light") {
      setDarkMode("dark");
    } else {
      setDarkMode("light");
    }
  };

  const element = cloneElement(node as ReactElement, {
    onClick: handleThemeChange,
  });

  return element;
};

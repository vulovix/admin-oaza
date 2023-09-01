import * as React from "react";

import { useThemeProvider } from "./slice";
import { useThemeDetector } from "./useThemeDetector";

export const ThemeProvider = (props: React.PropsWithChildren<unknown>): JSX.Element => {
  useThemeProvider();
  const { preferedTheme } = useThemeDetector();
  React.useEffect(() => {
    document.documentElement.setAttribute("theme", preferedTheme);
  }, [preferedTheme]);
  return <>{React.Children.only(props.children)}</>;
};

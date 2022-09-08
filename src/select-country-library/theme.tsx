import React, { useContext } from "react";

export type Mode = "light" | "dark";
type Theme = { mode: Mode };
const ThemeContext = React.createContext<Theme>({ mode: "light" });

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ThemeContext.Provider;

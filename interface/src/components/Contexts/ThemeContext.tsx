import React from "react";

export const initialThemeState = {
  theme: "classic",
  setTheme: (_value: string) => {}
};

const ThemeContext = React.createContext(initialThemeState);
export default ThemeContext;
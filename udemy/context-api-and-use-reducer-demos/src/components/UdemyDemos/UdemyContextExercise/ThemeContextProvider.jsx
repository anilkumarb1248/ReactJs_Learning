// Todo: Create & manage context in this file
import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
  // Todo: Add the component code (incl. dynamic context value)

  const [theme, setTheme] = useState("light");

  const handleToggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const contextValue = {
    theme: theme,
    toggleTheme: handleToggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

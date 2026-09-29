"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

function saveTheme(theme: Theme) {
  try {
    window.localStorage.setItem("theme", theme);
  } catch {
    // Storage can be blocked (private mode); the theme still applies for this visit.
  }
}

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      saveTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      saveTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };

  // The inline script in the root layout already set the `dark` class before
  // paint; mirror it into state here.
  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setTheme("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}

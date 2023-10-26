"use client";

import React, { createContext, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export const ThemeProviderContext = createContext({
  isOpen: false,
  toggleCmd: () => {},
});

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCmd = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };
  const themeProviderValue = {
    isOpen,
    toggleCmd,
  };

  return (
    <NextThemesProvider {...props}>
      <ThemeProviderContext.Provider value={themeProviderValue}>
        {children}
      </ThemeProviderContext.Provider>
    </NextThemesProvider>
  );
}

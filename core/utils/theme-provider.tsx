"use client";

import React, { createContext, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Toaster } from "sonner";
import Cmdk from "../components/cmdk";

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
        <Toaster
          richColors
          theme="dark"
          position="bottom-right"
          expand={false}
          closeButton={true}
          duration={4428}
        />
        <Cmdk isOpen={isOpen} toggleCmd={toggleCmd} />
      </ThemeProviderContext.Provider>
    </NextThemesProvider>
  );
}

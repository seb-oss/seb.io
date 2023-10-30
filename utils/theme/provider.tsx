"use client";

import React, { createContext, useState, useEffect, useRef } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Toaster } from "sonner";
import Cmdk from "@/core/blocks/cmdk";

export const ThemeProviderContext = createContext({
  isOpen: false,
  toggleCmd: () => {},
});

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  // const buttonRef = useRef<HTMLButtonElement>(null);
  // const [gdsColor, setGdsColor] = useState<string | null>(null);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [hoverStyles, setHoverStyles] = useState<CSSStyleDeclaration | null>(
    null
  );

  const toggleCmd = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };
  const themeProviderValue = {
    isOpen,
    toggleCmd,
  };

  const handleMouseEnter = () => {
    const styles = getComputedStyle(buttonRef.current as Element);
    const color = styles.getPropertyValue("--gds-color");
    console.log(color);
    console.log(styles);

    // const gdsProperties = Object.keys(styles).filter((name) =>
    //   name.includes("--gds")
    // );
    // const gdsValues = gdsProperties.map((name) =>
    //   styles.getPropertyValue(name)
    // );
    // console.log(gdsValues);

    // const buttonRefCurrent = buttonRef.current;
    // if (!buttonRefCurrent) return;
    // const computedStyles = window.getComputedStyle(buttonRefCurrent);
    // const styleDeclaration = buttonRefCurrent.style;
    // console.log(styleDeclaration);
    // const cssProperties = new Set();
    // for (let i = 0; i < computedStyles.length; i++) {
    //   const propertyName = computedStyles[i];
    //   if (propertyName.startsWith("--gds")) {
    //     cssProperties.add(propertyName);
    //   }
    // }
    // for (const propertyName of cssProperties) {
    //   const propertyValue = styleDeclaration.getPropertyValue(propertyName);
    //   console.log(propertyName, propertyValue);
    // }
    // console.log(color);
  };

  return (
    <NextThemesProvider {...props}>
      <ThemeProviderContext.Provider value={themeProviderValue}>
        {/* <button ref={buttonRef} onMouseEnter={handleMouseEnter}>
          Hover me
        </button> */}

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

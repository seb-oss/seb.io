"use client"

import React, { createContext, useEffect, useRef, useState } from "react"
import Cmdk from "@/core/blocks/cmdk"
import Sidebar from "@/core/blocks/sidebar"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { Toaster } from "sonner"

export const ThemeProviderContext = createContext({
  isOpen: false,
  isNavOpen: false,
  toggleCmd: () => {},
  toggleNav: () => {},
})

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isNavOpen, setNavOpen] = useState(false)

  const toggleCmd = () => {
    setIsOpen((prevOpen) => !prevOpen)
  }

  const toggleNav = () => {
    setNavOpen((prevOpen) => !prevOpen)
  }

  const themeProviderValue = {
    isOpen,
    isNavOpen,
    toggleCmd,
    toggleNav,
  }

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
  )
}

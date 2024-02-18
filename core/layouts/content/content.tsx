"use client"

import React, { useContext } from "react"
import Sidebar from "@/core/blocks/sidebar"
import { ThemeProviderContext } from "@/utils/theme/provider"

import "@/core/layouts/content/content.css"

export default function Content({ children }: { children: React.ReactNode }) {
  const { toggleNav, isNavOpen } = useContext(ThemeProviderContext)

  return (
    <section className="layout-content">
      {/* {isNavOpen && <Sidebar toggleNav={toggleNav} isNavOpen={isNavOpen} />} */}
      {children}
    </section>
  )
}

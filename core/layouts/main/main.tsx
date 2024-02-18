"use client"

import "@/core/styles/global.css"
import "@/core/layouts/main/main.css"

export default function Main({ children }: { children: React.ReactNode }) {
  return <main className="layout-main">{children}</main>
}

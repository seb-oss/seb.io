import Sidebar from "@/core/blocks/sidebar"

import "./style.css"

import Taber from "@/core/blocks/taber"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="layout component">
      <Sidebar />
      {children}
      <Taber />
    </section>
  )
}

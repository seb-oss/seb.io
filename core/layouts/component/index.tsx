import Sidebar from "@/core/blocks/sidebar"

import "./style.css"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout component">
      <Sidebar />
      <section>{children}</section>
    </div>
  )
}

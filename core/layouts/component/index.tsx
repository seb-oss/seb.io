import Sidebar from "@/core/blocks/sidebar"

import "./style.css"

import TOC from "@/core/blocks/toc/toc"

interface LayoutProps {
  component: {
    headings?: {
      slug: string
      text: string
    }[]
  }
  children: React.ReactNode
}
export default function Layout({ component, children }: LayoutProps) {
  return (
    <section className="layout component">
      <Sidebar />
      {children}
      {/* {component.headings && (
        <div>
          <div>On this page</div>
          <TOC headings={component.headings} />
        </div>
      )} */}
    </section>
  )
}

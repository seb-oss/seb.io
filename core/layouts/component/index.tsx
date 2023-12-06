import { FigmaProvider } from "@/utils/figma/provider"

import "./style.css"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <FigmaProvider>
      <section className="layout component">{children}</section>
    </FigmaProvider>
  )
}

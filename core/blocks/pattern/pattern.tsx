import React, { ReactNode } from "react"

import "./style.css"

interface PatternProps {
  children: ReactNode
}

export default function Pattern({ children }: PatternProps) {
  return <figure className="preview">{children}</figure>
}

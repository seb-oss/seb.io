import React, { ReactNode } from "react"

import "./style.css"

interface PatternProps {
  children: ReactNode
  caption?: string
}

export default function Pattern({ children, caption }: PatternProps) {
  return (
    <figure className="preview" data-caption={caption}>
      {children}
    </figure>
  )
}

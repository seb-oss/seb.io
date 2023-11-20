"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"

import "./style.css"

interface Heading {
  slug: string
  text: string
  level: number
}

interface TOCProps {
  headings: Heading[]
}

const TOC: React.FC<TOCProps> = ({ headings }) => {
  const [activeId, setActiveId] = useState("")

  const handleClick = (slug: string) => {
    setActiveId(slug)
  }

  return (
    <aside className="toc">
      <nav data-name={headings.length > 0 ? "On this page" : ""}>
        {headings.map((heading) => (
          <Link
            key={`#${heading.slug}`}
            href={`#${heading.slug}`}
            className={`toc-link ${activeId === heading.slug ? "active" : ""}`}
            data-id={heading.slug}
            data-level={heading.level}
            passHref
            onClick={() => handleClick(heading.slug)}
          >
            {heading.text}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default TOC

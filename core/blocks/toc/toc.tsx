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
  const observer = useRef<IntersectionObserver | null>(null)
  const [activeId, setActiveId] = useState("")
  const [anchorTop, setAnchorTop] = useState(0)

  useEffect(() => {
    const handleObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: "0% 0% -80% 0%",
    })

    headings.forEach((heading) => {
      const element = document.getElementById(heading.slug)
      if (element) {
        observer.current?.observe(element)
      }
    })

    return () => {
      observer.current?.disconnect()
    }
  }, [headings])

  useEffect(() => {
    updateAnchorPosition()
  }, [activeId])

  const updateAnchorPosition = () => {
    const activeLink = document.querySelector(
      `.toc-link[data-id="${activeId}"]`
    )
    if (activeLink) {
      const activeLinkTop = activeLink.getBoundingClientRect().top
      setAnchorTop(activeLinkTop)
    } else {
      setAnchorTop(0)
    }
  }

  const handleClick = (slug: string) => {
    setActiveId(slug)
    setTimeout(updateAnchorPosition, 0)
  }

  return (
    <aside className="toc">
      <nav data-name={headings.length > 0 ? "On this page" : ""}>
        <span className="anchor" style={{ top: `${anchorTop}px` }}></span>
        {headings.map((heading) => (
          <Link
            key={`#${heading.slug}`}
            href={`#${heading.slug}`}
            className={`toc-link ${activeId === heading.slug ? "active" : ""}`}
            data-id={heading.slug} // Add data-id attribute to identify the link
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

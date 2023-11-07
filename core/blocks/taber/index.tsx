"use client"

import "./style.css"

import React, { useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Taber() {
  const paths = usePathname()

  return (
    <div className="taber">
      <Link
        href={paths + "/code"}
        className={paths === "/code" ? "active" : ""}
      >
        <svg viewBox="0 0 24 24">
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
        Code
      </Link>
      <Link
        href={paths + "/design"}
        className={paths === "/design" ? "active" : ""}
      >
        <svg viewBox="0 0 24 24">
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
          <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
          <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
          <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
          <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
        </svg>
        Design
      </Link>
      <Link
        href={paths + "/guidelines"}
        className={paths === "/guidelines" ? "active" : ""}
      >
        <svg viewBox="0 0 24 24">
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
          <line x1="16" y1="8" x2="2" y2="22"></line>
          <line x1="17.5" y1="15" x2="9" y2="15"></line>
        </svg>
        Guidelines
      </Link>
      <Link
        href={paths + "/accessibility"}
        className={paths === "/accessibility" ? "active" : ""}
      >
        <svg viewBox="0 0 24 24">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <polyline points="17 11 19 13 23 9"></polyline>
        </svg>
        Accessibility
      </Link>
    </div>
  )
}

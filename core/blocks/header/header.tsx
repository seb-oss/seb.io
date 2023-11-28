"use client"

import React, { forwardRef, useContext } from "react"
import Link from "next/link"

import "./header.css"

import { ThemeProviderContext } from "@/utils/theme/provider"
import { ThemeToggle } from "@/utils/theme/toggle"

export const Header = forwardRef(({ ...props }, ref) => {
  const { toggleCmd } = useContext(ThemeProviderContext)
  const { toggleNav, isNavOpen } = useContext(ThemeProviderContext)

  return (
    <header className="main">
      <nav>
        <button className="hamburger" onClick={toggleNav}>
          {isNavOpen === true ? (
            <svg viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
          Menu
        </button>
        {/*  
            <Link
              className={path == "/components" ? "active" : ""}
              href="/components"
            >
              Components
            </Link>
            <Link
              className={path == "/foundation" ? "active" : ""}
              href="/foundation"
            >
              Foundation
            </Link>
         */}
      </nav>
      <Link href="/" className="logo">
        <svg width="14" height="14" viewBox="0 0 25 25">
          <path
            d="M24.1819 7.19041C19.6399 7.19041 15.6799 9.77498 13.6419 13.5785C13.2849 11.1715 12.3789 8.88337 10.9969 6.89791C9.20875 4.31037 6.69322 2.3358 3.78189 1.23449L3.15489 0.998047L2.80189 1.57692C1.72967 3.3372 1.11407 5.34635 1.01291 7.41566C0.911744 9.48497 1.32833 11.5465 2.22355 13.4067C3.11876 15.2669 4.46323 16.8646 6.13066 18.0499C7.79809 19.2352 9.73377 19.969 11.7559 20.1826C11.3979 21.9752 10.8799 24.412 10.8799 24.412C10.8623 24.4813 10.8606 24.5537 10.8747 24.6237C10.8889 24.6938 10.9186 24.7596 10.9615 24.8162C11.0044 24.8727 11.0595 24.9185 11.1225 24.95C11.1855 24.9816 11.2547 24.998 11.3249 24.998H12.7829C12.8914 24.9982 12.9964 24.9591 13.0793 24.8879C13.1622 24.8166 13.2177 24.7177 13.2359 24.6087C13.2359 24.6087 13.4399 21.7816 13.5609 20.2396C19.9179 19.94 24.9999 14.5752 24.9999 8.02408V7.18939L24.1819 7.19041ZM2.63589 8.02408C2.63488 6.29308 3.05217 4.58847 3.85089 3.06081C8.86089 5.25912 12.1809 10.3539 12.1809 15.9541C12.1809 16.8183 12.1039 17.6805 11.9499 18.5305C9.39638 18.2657 7.03015 17.0446 5.30946 15.1036C3.58877 13.1626 2.63608 10.6399 2.63589 8.02408ZM13.8519 18.5519C14.2649 13.4184 18.2919 9.3133 23.3279 8.89443C22.9179 14.0259 18.8889 18.131 13.8519 18.5519Z"
            fill="currentColor"
          ></path>
        </svg>
      </Link>
      <nav>
        <button onClick={toggleCmd} className="shortcut">
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <span>⌘K</span>
        </button>
        <Link href="https://github.com/sebgroup/green" target="_blank">
          <svg viewBox="0 0 24 24">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  )
})

Header.displayName = "Header"

export default Header

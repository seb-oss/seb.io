"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  allChangelogs,
  allComponents,
  allDocuments,
  allMembers,
  allPosts,
  Member,
} from "content"
import Fuse from "fuse.js"

import "./style.css"

import Image from "next/image"

interface Document {
  title: string
  version?: string
  keywords?: string
  type: string
  url_path: string
  name?: string
  department?: string
}

export default function Cmdk({
  isOpen,
  toggleCmd,
}: {
  isOpen: boolean
  toggleCmd: () => void
}) {
  const [searchResults, setSearchResults] = useState<Document[]>(
    allDocuments as Document[]
  )

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    if (value.length === 0) {
      setSearchResults(allDocuments as Document[])
      return
    }

    const results = []

    // Search in allChangelogs
    const changelogFuse = new Fuse(allChangelogs, {
      keys: ["title", "version"],
    })
    const changelogResults = changelogFuse.search(value)
    const changelogItems = changelogResults.map((result) => result.item)
    results.push(...changelogItems)

    // Search in allComponents
    const componentFuse = new Fuse(allComponents, {
      keys: ["title", "keywords"],
    })
    const componentResults = componentFuse.search(value)
    const componentItems = componentResults.map((result) => result.item)
    results.push(...componentItems)

    // Search in allPosts
    const postFuse = new Fuse(allPosts, {
      keys: ["title", "keywords"],
    })
    const postResults = postFuse.search(value)
    const postItems = postResults.map((result) => result.item)
    results.push(...postItems)

    // Search in allMembers
    const memberFuse = new Fuse(allMembers, {
      keys: ["name", "department"],
    })
    const memberResults = memberFuse.search(value)
    const memberItems = memberResults.map((result) => result.item)
    results.push(...memberItems)

    setSearchResults(results as Document[])
  }

  const renderResult = (doc: Document) => {
    if (doc.type === "Changelog") {
      return (
        <ul>
          <Link href={doc.url_path} onClick={toggleCmd}>
            <div className="cmdk-item-name">
              <span className="cmdk-item-char">TS</span>
              <span>{doc.title}</span>
            </div>
          </Link>
        </ul>
      )
    } else if (doc.type === "Component") {
      return (
        <ul>
          <Link href={doc.url_path} onClick={toggleCmd}>
            <div className="cmdk-item-name">
              <span className="cmdk-item-char">TS</span>
              <span>{doc.title}</span>
            </div>
          </Link>
        </ul>
      )
    } else if (doc.type === "Post") {
      return (
        <ul>
          <Link href={doc.url_path} onClick={toggleCmd}>
            <div className="cmdk-item-name">
              <span className="cmdk-item-char">TS</span>
              <span>{doc.title}</span>
            </div>
          </Link>
        </ul>
      )
    } else if (doc.type === "Member") {
      return (
        <ul>
          <Link href={"about" + doc.url_path} onClick={toggleCmd}>
            <div className="cmdk-item-name">
              <span className="cmdk-item-char">
                <Image
                  width="16"
                  height="16"
                  src={"https://github.com/" + doc.handle.toString() + ".png"}
                  alt={doc.name.toString()}
                />
              </span>
              <span>{doc.name}</span>
            </div>
          </Link>
        </ul>
      )
    } else {
      return <span>{doc.title}</span>
    }
  }

  // V111111
  // const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const handleSlashKey = (e: {
      key: string
      keyCode: number
      metaKey: any
      ctrlKey: any
      preventDefault: () => void
    }) => {
      if (
        e.key === "/" ||
        ((e.keyCode === 191 || e.keyCode === 75) && (e.metaKey || e.ctrlKey))
      ) {
        e.preventDefault()
        toggleCmd()
      } else if (e.key === "Escape") {
        toggleCmd()
      }
    }

    document.addEventListener("keydown", handleSlashKey)
    return () => {
      document.removeEventListener("keydown", handleSlashKey)
    }
  }, [toggleCmd])
  // }, [searchTerm, toggleCmd])

  return (
    <>
      {/* {isOpen && ( */}
        <div className={`cmd ${isOpen ? "open" : ""}`} role="dialog">
          <button className="cmd-backdrop" onClick={toggleCmd}></button>
          <main>
            <form>
              <label htmlFor="search">
                <svg viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </label>
              <input
                id="search"
                type="text"
                placeholder="⌘K — Search components & pages"
                onChange={handleSearch}
                autoFocus
              />
              <button type="reset">
                <svg viewBox="0 0 24 24">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </form>
            <section>
              <div>{searchResults.map((doc, index) => renderResult(doc))}</div>
            </section>
            <footer>
              <svg width="14" height="14" viewBox="0 0 25 25">
                <path
                  d="M24.1819 7.19041C19.6399 7.19041 15.6799 9.77498 13.6419 13.5785C13.2849 11.1715 12.3789 8.88337 10.9969 6.89791C9.20875 4.31037 6.69322 2.3358 3.78189 1.23449L3.15489 0.998047L2.80189 1.57692C1.72967 3.3372 1.11407 5.34635 1.01291 7.41566C0.911744 9.48497 1.32833 11.5465 2.22355 13.4067C3.11876 15.2669 4.46323 16.8646 6.13066 18.0499C7.79809 19.2352 9.73377 19.969 11.7559 20.1826C11.3979 21.9752 10.8799 24.412 10.8799 24.412C10.8623 24.4813 10.8606 24.5537 10.8747 24.6237C10.8889 24.6938 10.9186 24.7596 10.9615 24.8162C11.0044 24.8727 11.0595 24.9185 11.1225 24.95C11.1855 24.9816 11.2547 24.998 11.3249 24.998H12.7829C12.8914 24.9982 12.9964 24.9591 13.0793 24.8879C13.1622 24.8166 13.2177 24.7177 13.2359 24.6087C13.2359 24.6087 13.4399 21.7816 13.5609 20.2396C19.9179 19.94 24.9999 14.5752 24.9999 8.02408V7.18939L24.1819 7.19041ZM2.63589 8.02408C2.63488 6.29308 3.05217 4.58847 3.85089 3.06081C8.86089 5.25912 12.1809 10.3539 12.1809 15.9541C12.1809 16.8183 12.1039 17.6805 11.9499 18.5305C9.39638 18.2657 7.03015 17.0446 5.30946 15.1036C3.58877 13.1626 2.63608 10.6399 2.63589 8.02408ZM13.8519 18.5519C14.2649 13.4184 18.2919 9.3133 23.3279 8.89443C22.9179 14.0259 18.8889 18.131 13.8519 18.5519Z"
                  fill="currentColor"
                />
              </svg>
              <div className="cmd-options">
                <div>
                  Navigate
                  <kbd>
                    <svg viewBox="0 0 24 24">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <polyline points="19 12 12 19 5 12"></polyline>
                    </svg>
                  </kbd>
                  <kbd>
                    <svg viewBox="0 0 24 24">
                      <line x1="12" y1="19" x2="12" y2="5"></line>
                      <polyline points="5 12 12 5 19 12"></polyline>
                    </svg>
                  </kbd>
                </div>
                <div>
                  Select
                  <kbd>
                    <svg viewBox="0 0 24 24">
                      <polyline points="9 10 4 15 9 20"></polyline>
                      <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
                    </svg>
                  </kbd>
                </div>
                <div>
                  Escape
                  <kbd>⎋</kbd>
                </div>
              </div>
            </footer>
          </main>
        </div>
      // )}
    </>
  )
}

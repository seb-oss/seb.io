"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  allChangelogs,
  allComponents,
  allDocuments,
  allMembers,
  allPosts,
} from "content"
import Fuse from "fuse.js"

interface Document {
  title: string
  version?: string
  keywords?: string
  type: string
  url_path: string
  name?: string
  department?: string
}

export default function Search() {
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

  // const [isMatched, setIsMatched] = useState(false);
  const [matchedKeys, setMatchedKeys] = useState<number[]>([])

  const renderResult = (doc: Document) => {
    if (doc.type === "Changelog") {
      return (
        <Link href="#" className="card">
          <span>{doc.title}</span>
          <caption>Changelog</caption>
        </Link>
      )
    } else if (doc.type === "Component") {
      return (
        <Link href="#" className="card">
          <span>{doc.title}</span>
          <caption>Component</caption>
        </Link>
      )
    } else if (doc.type === "Post") {
      return (
        <Link href="#" className="card">
          <span>{doc.title}</span>
          <caption>Post</caption>
        </Link>
      )
    } else if (doc.type === "Member") {
      return (
        <Link href="#" className="card">
          <span>{doc.name}</span>
          <caption>Member</caption>
        </Link>
      )
    } else {
      return <span>{doc.title}</span>
    }
  }

  return (
    <div className="layout core">
      <h2>Search</h2>
      <section>
        <input
          className="main-search"
          type="text"
          placeholder="Search"
          onChange={handleSearch}
        />
        <div className="results">
          {searchResults.map((doc, index) => renderResult(doc))}
        </div>
      </section>
    </div>
  )
}

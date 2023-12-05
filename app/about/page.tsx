"use client"

import Link from "next/link"

export default function About() {
  return (
    <div className="layout core">
      <section>
        <h2>Other pages</h2>
        <div>
          <Link href="/changelog">Changelog</Link>
          <Link href="/status">Status</Link>
        </div>
      </section>
    </div>
  )
}

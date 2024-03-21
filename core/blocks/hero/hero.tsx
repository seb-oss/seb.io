"use client"

import "@/core/blocks/hero/hero.css"

export default function Hero({
  heading,
  preamble,
}: {
  heading: string
  preamble: string
}) {
  return (
    <div className="hero">
      <h1>{heading}</h1>
      <p className="gds-fs-headline-large color-secondary">{preamble}</p>
    </div>
  )
}

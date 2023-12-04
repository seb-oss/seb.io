"use client"

import * as React from "react"
import { useEffect, useState } from "react"

import "./style.css"

interface FigmaProps {
  file: string
  caption?: string
}

export default function Figma({ file, caption }: FigmaProps) {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoad = () => {
    setIsLoading(false)
  }
  return (
    <figure className={isLoading ? "loading" : ""}>
      <div className="gg-loadbar-alt"></div>
      <iframe
        src={`https://www.figma.com/file/${file}?embed_host=share&hide_ui=1&kind=&mode=design&type=design&viewer=1`}
        onLoad={handleLoad}
      ></iframe>

      <figcaption>{caption}</figcaption>
    </figure>
  )
}

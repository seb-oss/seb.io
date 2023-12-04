"use client"

import * as React from "react"
import { useEffect, useState } from "react"

import "./style.css"

interface FigmaProps {
  file: string
  caption?: string
  node?: string
  scale?: string
  height?: string
}

export default function Figma({
  file,
  caption,
  node,
  scale,
  height,
}: FigmaProps) {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoad = () => {
    setIsLoading(false)
  }

  // Examples of embed urls
  // src={`https://www.figma.com/file/${file}?embed_host=share&hide_ui=1&kind=&mode=design&node-id=${node}&type=design&viewer=1`}
  // src={`https://www.figma.com/file/${file}?embed_host=share&hide_ui=1&kind=&mode=dev&node-id=${node}&type=design&viewer=1&scaling=min-zoom`}
  // https://www.figma.com/file/Nv3WN0vGhsCj1WSqlA1Ctn/Embed?node-id=0%3A1&mode=dev
  // src={`https://www.figma.com/file/${file}?embed_host=green&node-id=${node}&type=dev&viewer=100&scaling=min-zoom`}
  // src={`https://www.figma.com/embed?embed_host=react&url=https://www.figma.com/file/${file}&scaling=scale-down-width&mode=dev&hide_ui=1&node-id=${node}`}

  /* 

  // Embed as prototype 

 src={`https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/${file}/Embed?type=design&scaling=min-zoom&node-id=${node}&mode=design&hide-ui=1`}
 */

  return (
    <figure className={isLoading ? "loading" : ""}>
      <div className="gg-loadbar-alt"></div>
      <iframe
        src={`https://www.figma.com/file/${file}?embed_host=share&hide_ui=1&kind=&mode=design&scaling=scale-down-width&node-id=${node}&type=design&viewer=1`}
        onLoad={handleLoad}
        height={height}
        // allowTransparency={true}
      ></iframe>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

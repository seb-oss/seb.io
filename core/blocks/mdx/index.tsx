"use client"

import * as React from "react"
import { useState } from "react"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"

interface FigmaProps {
  file: string
}

function Figma({ file }: FigmaProps) {
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
    </figure>
  )
}

function Pen() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoad = () => {
    setIsLoading(false)
  }
  return (
    <figure className={isLoading ? "loading" : ""}>
      <div className="gg-loadbar-alt"></div>
      <iframe
        src="https://codepen.io/astrit/embed/RwvKavd?default-tab=html%2Cresult"
        onLoad={handleLoad}
      ></iframe>
    </figure>
  )
}

function CustomImage(props: any) {
  return <img alt={props.alt} {...props} />
}

function Sandbox() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoad = () => {
    setIsLoading(false)
  }
  return (
    <figure className={isLoading ? "loading" : ""}>
      <div className="gg-loadbar-alt"></div>
      <iframe
        src="https://codesandbox.io/embed/silent-water-pd45yy?fontsize=14&hidenavigation=1&theme=dark"
        onLoad={handleLoad}
      ></iframe>
    </figure>
  )
}

const components = { Figma, Pen, Image: CustomImage, Sandbox }

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code)

  return (
    <main>
      <Component components={components} />
    </main>
  )
}

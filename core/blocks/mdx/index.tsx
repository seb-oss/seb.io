"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import { useTheme } from "next-themes"

interface FigmaProps {
    file: string
}

function Figma({file}: FigmaProps) {
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

function CustomImage({
  alt,
  dark,
  ...props
}: { alt: string; dark: string } & React.ImgHTMLAttributes<HTMLImageElement>) {
  const { theme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  const isDarkMode = theme === "dark"
  // const src = isDarkMode ? dark : props.src

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  return (
    <picture>
      {isDarkMode && (
        <source srcSet={dark} media="(prefers-color-scheme: dark)" />
      )}
      <img alt={alt} {...props} />
    </picture>
  )
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

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "playground-ide": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            "playground-project": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            "playground-preview": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            "playground-file-editor": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

function Playground(props) {

    console.log(props)

  return (
    <>
    <playground-project id="story-project" project-src="/stories/components/button/story-project.json">
    </playground-project>
    <playground-preview project="story-project"> </playground-preview>
    </>
  )
}

const components = {Figma, Pen, Image: CustomImage, Sandbox, Playground}

export function Mdx({code, globals}: { code: string, globals: Record<string, any> }) {
    const Component = useMDXComponent(code, globals)

    return (
        <main>
            <Component components={components}/>
        </main>
    )
}

"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import { useTheme } from "next-themes"

import Col from "./col/col"
import Figma from "./figma/figma"
import IMG from "./image/image"
import Row from "./row/row"

// function CustomImage({
//   alt,
//   dark,
//   ...props
// }: { alt: string; dark: string } & React.ImgHTMLAttributes<HTMLImageElement>) {
//   const { theme } = useTheme()
//   const [isMounted, setIsMounted] = useState(false)
//   const isDarkMode = theme === "dark"

//   useEffect(() => {
//     setIsMounted(true)
//   }, [])

//   if (!isMounted) {
//     return null
//   }
//   return (
//     <picture>
//       {isDarkMode && (
//         <source srcSet={dark} media="(prefers-color-scheme: dark)" />
//       )}
//       <img alt={alt} {...props} />
//     </picture>
//   )
// }

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "playground-ide": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
      "playground-project": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
      "playground-preview": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          project: string
        },
        HTMLElement
      >
      "playground-file-editor": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
    }
  }
}

function Playground(props: any) {
  return (
    <>
      <playground-project
        id="story-project"
        project-src="/stories/components/button/story-project.json"
      ></playground-project>
      <playground-preview project="story-project"> </playground-preview>
    </>
  )
}

const components = { Figma, Image: IMG, Playground, Row, Col }

export function Mdx({
  code,
  globals,
}: {
  code: string
  globals: Record<string, any>
}) {
  const Component = useMDXComponent(code, globals)

  return (
    <main>
      <Component components={components} />
    </main>
  )
}

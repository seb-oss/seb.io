"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import { useTheme } from "next-themes"

import Col from "./col/col"
import Do from "./do/do"
import Dont from "./dont/dont"
import FigmaProto from "./figma/figmaProto"
import FigmaSVG from "./figma/figmaSVG"
import IMG from "./image/image"
import Refs from "./refs/refs"
import Row from "./row/row"

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
        project-src="/stories/story-button-1-project.json"
      ></playground-project>
      <playground-preview project="story-project"> </playground-preview>
    </>
  )
}

const components = {
  FigmaSVG,
  FigmaProto,
  Image: IMG,
  Playground,
  Row,
  Col,
  Do,
  Dont,
  Refs,
}

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

"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import { useTheme } from "next-themes"

import Col from "./col/col"
import FigmaProto from "./figma/figmaProto"
import FigmaSVG from "./figma/figmaSVG"
import IMG from "./image/image"
import Row from "./row/row"
import Playground from "./playground/playground"

const components = { FigmaSVG, FigmaProto, Image: IMG, Playground, Row, Col }

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

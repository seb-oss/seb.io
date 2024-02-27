"use client"

import * as React from "react"
import Spacer from "@/core/blocks/spacer/spacer"
import { useMDXComponent } from "next-contentlayer/hooks"

import Pattern from "../pattern/pattern"
import Col from "./col/col"
import Do from "./do/do"
import Dont from "./dont/dont"
import FigmaProto from "./figma/figmaProto"
import FigmaSVG from "./figma/figmaSVG"
import IMG from "./image/image"
import SE from "./lang/se"
import Playground from "./playground/playground"
import Refs from "./refs/refs"
import Row from "./row/row"

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
  SE,
  Pattern,
  Spacer,
}

export function Mdx({
  code,
  globals,
}: {
  code: string
  globals: Record<string, any>
}) {
  const Component = useMDXComponent(code, globals)

  return <Component components={components} />
}

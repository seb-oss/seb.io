"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { allComponents, Component } from "@/.contentlayer/generated"
import Pattern from "@/core/blocks/pattern/pattern"

interface FigmaSVGProps {
  caption?: string
  node?: string
  height?: string
}

export const generateStaticParams = (): any => {
  return allComponents.map((component) => ({
    slug: component.url_path.replace("/component/", ""),
  }))
}

export default function FigmaSVG({ caption, node, height }: FigmaSVGProps) {
  const slug = usePathname()
  const component = allComponents.find(
    (component) => component.url_path === slug
  )

  const svgSource = component?.figma_svgs.find(
    (svg_node: any) => svg_node.node === node
  )

  return (
    <Pattern caption={caption} height={height}>
      <div dangerouslySetInnerHTML={{ __html: svgSource?.svg }} />
    </Pattern>
  )
}

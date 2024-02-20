"use client"

import React from "react"
import useGridDebug from "@/utils/grid-debug/grid-debug"

import "@/core/blocks/grid/css/grid.css"
import "@/core/blocks/grid/css/debug.css"
import "@/core/blocks/grid/css/responsive.css"

type GridGapSize = "small" | "medium" | "large"
type GridJustify = "start" | "end" | "center" | "between" | "around" | "evenly"
type GridAlign = "start" | "end" | "center"

type GridProps = {
  children: React.ReactNode
  gapBlock?: GridGapSize
  gapInline?: GridGapSize
  paddingBlock?: GridGapSize
  paddingInline?: GridGapSize
  mobile?: number
  tablet?: number
  columns: number
  fluid?: boolean
  justify?: GridJustify
  align?: GridAlign
}

export default function Grid({
  children,
  gapBlock,
  gapInline,
  paddingBlock,
  paddingInline,
  mobile,
  tablet,
  columns = 12,
  fluid,
  justify,
  align,
}: GridProps) {
  if (columns < 1 || columns > 24) {
    throw new Error("The columns prop must be between 1 and 24.")
  }

  const debug = useGridDebug()
  return (
    <gds-grid
      {...(debug ? { debug: true } : {})}
      gap-block={gapBlock}
      gap-inline={gapInline}
      padding-block={paddingBlock}
      padding-inline={paddingInline}
      columns={columns.toString()}
      {...(mobile !== undefined ? { mobile: mobile.toString() } : {})}
      {...(tablet !== undefined ? { tablet: tablet.toString() } : {})}
      fluid={fluid}
      justify={justify}
      align={align}
    >
      {children}
    </gds-grid>
  )
}

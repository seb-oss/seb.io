"use client"

import React from "react"
import useGridDebug from "@/utils/grid-debug/grid-debug"

import "@/core/blocks/grid/grid.css"

type GridGapSize = "small" | "medium" | "large"
type GridJustify = "start" | "end" | "center" | "between" | "around" | "evenly"

type GridProps = {
  children: React.ReactNode
  gapBlock?: GridGapSize
  gapInline?: GridGapSize
  paddingBlock?: GridGapSize
  paddingInline?: GridGapSize
  columns: number
  fluid?: boolean
  justify?: GridJustify
}

export default function Grid({
  children,
  gapBlock,
  gapInline,
  paddingBlock,
  paddingInline,
  columns = 12,
  fluid,
  justify = "start",
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
      fluid={fluid}
      justify={justify}
    >
      {children}
    </gds-grid>
  )
}

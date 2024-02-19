"use client"

import React from "react"
import useGridDebug from "@/utils/grid-debug/grid-debug"

import "@/core/blocks/grid/grid.css"

type GridGapSize = "small" | "medium" | "large"

type GridProps = {
  children: React.ReactNode
  gapV?: GridGapSize
  gapH?: GridGapSize
  paddingV?: GridGapSize
  paddingH?: GridGapSize
  columns: number
  fluid?: boolean
}

export default function Grid({
  children,
  gapV,
  gapH,
  paddingV,
  paddingH,
  columns = 12,
  fluid,
}: GridProps) {
  if (columns < 1 || columns > 24) {
    throw new Error("The columns prop must be between 1 and 24.")
  }

  const debug = useGridDebug()
  return (
    <gds-grid
      {...(debug ? { debug: true } : {})}
      gap-v={gapV}
      gap-h={gapH}
      padding-v={paddingV}
      padding-h={paddingH}
      columns={columns.toString()}
      fluid={fluid}
    >
      {children}
    </gds-grid>
  )
}

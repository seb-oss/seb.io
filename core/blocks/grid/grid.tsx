"use client"

import React from "react"
import useGridDebug from "@/utils/grid-debug/grid-debug"

import "@/core/blocks/grid/grid.css"

type GridGapSize = "small" | "medium" | "large"

type GridProps = {
  children: React.ReactNode
  gapV?: GridGapSize
  gapH?: GridGapSize
  spaceV?: GridGapSize
  spaceH?: GridGapSize
  columns: number
}

export default function Grid({
  children,
  gapV,
  gapH,
  spaceV,
  spaceH,
  columns = 12,
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
      space-v={spaceV}
      space-h={spaceH}
      columns={columns.toString()}
    >
      {children}
    </gds-grid>
  )
}

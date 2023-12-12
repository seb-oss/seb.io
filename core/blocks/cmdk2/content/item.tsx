import React from "react"
import { Command } from "cmdk"

export default function Item({
  children,
  shortcut,
  onSelect = () => {},
}: {
  children: React.ReactNode
  shortcut?: string
  onSelect?: (value: string) => void
}) {
  // Component code...
}

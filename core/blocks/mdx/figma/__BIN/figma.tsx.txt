import { type } from "os"
import React from "react"

import Prototype from "../figmaProto"
import SVG from "../figmaSVG"

interface Props {
  type: string
}

export default function Figma({ type }: Props) {
  if (type === "prototype") {
    return [<Prototype key="prototype-1" />]
  } else if (type === "svg") {
    return [<SVG key="svg-1" />]
  } else {
    return (
      <div>
        <h1>Unknown type: {type}</h1>
      </div>
    )
  }
}

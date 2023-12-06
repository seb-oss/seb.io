"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import Pattern from "@/core/blocks/pattern/pattern"
import axios from "axios"

interface FigmaSVGProps {
  caption?: string
  node?: string
  height?: string
}

export default function FigmaSVG({ caption, node, height }: FigmaSVGProps) {
  const [svgContent, setSvgContent] = useState("")
  const figmaAccessKey = process.env.NEXT_PUBLIC_FIGMA_ACCESS_KEY
  const figmaProjectId = process.env.NEXT_PUBLIC_FIGMA_PROJECT_ID
  const figmaNodeId = node

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.figma.com/v1/images/${figmaProjectId}/?ids=${figmaNodeId}&format=svg`,
          {
            headers: {
              "X-Figma-Token": figmaAccessKey,
            },
          }
        )

        const images = response.data.images
        const imageUrl = Object.values(images)[0] as string
        const svgResponse = await axios.get(imageUrl)
        setSvgContent(svgResponse.data)
      } catch (error) {
        console.error("Error fetching Figma image:", error)
      }
    }

    fetchData()
  }, [])
  return (
    <Pattern caption={caption} height={height}>
      {svgContent ? (
        <div dangerouslySetInnerHTML={{ __html: svgContent }} />
      ) : (
        <p>Loading Figma image...</p>
      )}
    </Pattern>
  )
}

"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import axios from "axios"

import Pattern from "../../pattern/pattern"

interface FigmaSVGProps {
  caption?: string
  node?: string
}

export default function FigmaSVG({ caption, node }: FigmaSVGProps) {
  const [imageUrl, setImageUrl] = useState("")
  const [svgContent, setSvgContent] = useState("")

  const figmaAccessKey = process.env.FIGMA_ACCESS_KEY
  const figmaProjectId = process.env.FIGMA_PROJECT_ID
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
        // console.log("Figma image data:", response)
      } catch (error) {
        console.error("Error fetching Figma image:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <Pattern caption={caption}>
      {svgContent ? (
        <div dangerouslySetInnerHTML={{ __html: svgContent }} />
      ) : (
        <p>Loading Figma image...</p>
      )}
    </Pattern>
  )
}

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

  // const figmaProjectId = "Nv3WN0vGhsCj1WSqlA1Ctn"
  const figmaProjectId = "Nv3WN0vGhsCj1WSqlA1Ctn"
  // const figmaNodeId = "1-8"
  const figmaNodeId = node
  const accessKey = "figd_eknpiT303DVZu645udfaNGedTdI2De9uLbgqArNQ"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.figma.com/v1/images/${figmaProjectId}/?ids=${figmaNodeId}&format=svg`,
          {
            headers: {
              "X-Figma-Token": accessKey,
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

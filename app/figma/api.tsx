"use client"

import React, { useEffect, useState } from "react"
import Pattern from "@/core/blocks/pattern/pattern"
import axios from "axios"

import "./style.css"

interface FigmaSVGProps {
  caption?: string
  node?: string
  height?: string
}

export default function FigmaApi({ caption, node, height }: FigmaSVGProps) {
  const [svgContent, setSvgContent] = useState("")
  const figmaAccessKey = "figd_eW63Prnh96PvrLuxXV2GAWAzFdwJSle8CHooBRiF" // This is temporary just for the demo, replace it with your actual access key
  const figmaProjectId = "Nv3WN0vGhsCj1WSqlA1Ctn"
  const figmaNodeId = node

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

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

    const fetchDataWithPolling = async () => {
      fetchData() // Initial fetch
      const pollingInterval = 1000 // 5 seconds (adjust as needed)

      // Polling function
      const poll = () => {
        timeoutId = setTimeout(async () => {
          await fetchData()
          poll()
        }, pollingInterval)
      }

      poll() // Start polling
    }

    fetchDataWithPolling() // Use the polling function

    // Clean up the timeout on unmount
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <Pattern caption={caption} height={height}>
      {svgContent ? (
        <div dangerouslySetInnerHTML={{ __html: svgContent }} />
      ) : (
        <div className="apiDemo">
          <i className="gg-loadbar-alt"></i>
          <p>Loading Figma image...</p>
        </div>
      )}
    </Pattern>
  )
}

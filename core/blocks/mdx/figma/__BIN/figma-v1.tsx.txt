"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import axios from "axios"

import "./style.css"

import Image from "next/image"

// const figmaProjectId = "Nv3WN0vGhsCj1WSqlA1Ctn" // Replace with your actual Figma project ID
// const nodeId = "2029-12" // Replace with the ID of the node you want to retrieve

// const accessKey = "figd_eknpiT303DVZu645udfaNGedTdI2De9uLbgqArNQ" // Replace with your actual Figma access key

interface FigmaProps {
  file: string
  caption?: string
  node?: string
  scale?: string
  height?: string
}

export default function Figma({
  file,
  caption,
  node,
  scale,
  height,
}: FigmaProps) {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoad = () => {
    setIsLoading(false)
  }

  // Examples of embed urls
  // src={`https://www.figma.com/file/${file}?embed_host=share&hide_ui=1&kind=&mode=design&node-id=${node}&type=design&viewer=1`}
  // src={`https://www.figma.com/file/${file}?embed_host=share&hide_ui=1&kind=&mode=dev&node-id=${node}&type=design&viewer=1&scaling=min-zoom`}
  // https://www.figma.com/file/Nv3WN0vGhsCj1WSqlA1Ctn/Embed?node-id=0%3A1&mode=dev
  // src={`https://www.figma.com/file/${file}?embed_host=green&node-id=${node}&type=dev&viewer=100&scaling=min-zoom`}
  // src={`https://www.figma.com/embed?embed_host=react&url=https://www.figma.com/file/${file}&scaling=scale-down-width&mode=dev&hide_ui=1&node-id=${node}`}

  /* 

  // Embed as prototype 

 src={`https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/${file}/Embed?type=design&scaling=min-zoom&node-id=${node}&mode=design&hide-ui=1`}
 
 

  https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/R7v6avf1VILuFqpAjt6U07/Best-Floating-Label-Input?node-id=0%3A1


  Final 

  src={`https://www.figma.com/file/${file}?embed_host=share&hide_ui=1&kind=&mode=design&scaling=1&zoom=0&node-id=${node}&type=design&viewer=1`}
 
 */
  // const [imageUrl, setImageUrl] = useState(null)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("/api/figma")

  //       const imageResponse = response.data.imageData
  //       setImageUrl(imageResponse)
  //       console.log("Figma image URL:", imageResponse)
  //     } catch (error) {
  //       console.error("Error fetching Figma image:", error)
  //     }
  //   }

  //   fetchData()
  // }, [])

  const [imageUrl, setImageUrl] = useState("")

  const figmaProjectId = "Nv3WN0vGhsCj1WSqlA1Ctn" // Replace with your actual Figma project ID
  const figmaNodeId = "1-8" // Replace with the ID of the Figma node you want to retrieve
  // const figmaNodeId = "1735-7" // Replace with the ID of the Figma node you want to retrieve
  const accessKey = "figd_eknpiT303DVZu645udfaNGedTdI2De9uLbgqArNQ" // Replace with your actual Figma access key
  // https://api.figma.com/v1/images/<FIGMA_PROJECT_ID>/?ids=49:16&format=svg
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

        console.log("Figma API response:", response.data) // Inspect the API response

        // const imageData =
        //   response.data.images && response.data.images[figmaNodeId]
        // setImageUrl(imageData)

        const images = response.data.images
        const imageData = Object.values(images)[0] as string
        setImageUrl(imageData)

        console.log("Figma image URL:", imageData)
      } catch (error) {
        console.error("Error fetching Figma image:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <figure className={isLoading ? "loading" : ""}>
      <div className="gg-loadbar-alt"></div>

      {imageUrl ? (
        <Image width={480} height={270} src={imageUrl} alt="Figma Image" />
      ) : (
        <p>Loading Figma image...</p>
      )}
      {/* <iframe
        src={`https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/${file}/Embed?type=design&scaling=min-zoom&node-id=${node}&mode=design&hide-ui=1`}
        onLoad={handleLoad}
        height={height}
      ></iframe> */}
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

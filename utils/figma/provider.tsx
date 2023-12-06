// FigmaContext.tsx
import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios"

interface FigmaData {
  node: string
  svgContent: string
}

interface FigmaContextProps {
  figmaData: FigmaData[]
  fetchFigmaDataById: (nodeId: string) => Promise<void>
}

const FigmaContext = createContext<FigmaContextProps>({
  figmaData: [],
  fetchFigmaDataById: async (nodeId: string) => {},
})

export const useFigma = () => useContext(FigmaContext)

interface FigmaProviderProps {
  children: React.ReactNode
}

export const FigmaProvider: React.FC<FigmaProviderProps> = ({ children }) => {
  const [figmaData, setFigmaData] = useState<FigmaData[]>([])
  const figmaAccessKey = process.env.NEXT_PUBLIC_FIGMA_ACCESS_KEY
  const figmaProjectId = process.env.NEXT_PUBLIC_FIGMA_PROJECT_ID

  const fetchData = async (node: string) => {
    try {
      const response = await axios.get(
        `https://api.figma.com/v1/images/${figmaProjectId}/?ids=${node}&format=svg`,
        {
          headers: {
            "X-Figma-Token": figmaAccessKey,
          },
        }
      )

      const images = response.data.images
      const imageUrl = Object.values(images)[0] as string
      const svgResponse = await axios.get(imageUrl)
      return { node, svgContent: svgResponse.data }
    } catch (error) {
      console.error("Error fetching Figma image:", error)
      return { node, svgContent: "" }
    }
  }

  const fetchFigmaDataById = async (nodeId: string) => {
    if (figmaData.some((data) => data.node === nodeId)) {
      // Data already exists in cache
      return
    }

    try {
      const fetchedData = await fetchData(nodeId)
      setFigmaData((prevData) => [...prevData, fetchedData])
    } catch (error) {
      console.error("Error fetching Figma image:", error)
    }
  }

  const fetchFigmaData = async (nodes: string[]) => {
    const fetchDataPromises = nodes.map(fetchFigmaDataById)
    await Promise.all(fetchDataPromises)
  }

  return (
    <FigmaContext.Provider value={{ figmaData, fetchFigmaDataById }}>
      {children}
    </FigmaContext.Provider>
  )
}

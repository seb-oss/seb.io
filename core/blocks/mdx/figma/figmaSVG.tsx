import { useEffect, useState } from "react"
import Pattern from "@/core/blocks/pattern/pattern"
import { useFigma } from "@/utils/figma/provider"

interface FigmaSVGProps {
  node: string
  caption?: string
  height?: string
}

const FigmaSVG: React.FC<FigmaSVGProps> = ({ node, caption, height }) => {
  const { figmaData, fetchFigmaDataById } = useFigma()
  const [svgContent, setSvgContent] = useState<string>("")

  useEffect(() => {
    const fetchData = async () => {
      const data = figmaData.find((item) => item.node === node)
      if (data) {
        setSvgContent(data.svgContent)
      } else {
        await fetchFigmaDataById(node)
      }
    }

    fetchData()
  }, [figmaData, node, fetchFigmaDataById])

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

export default FigmaSVG

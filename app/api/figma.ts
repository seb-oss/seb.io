// pages/api/figma.js

// import { NextApiRequest, NextApiResponse } from "next"
// import axios from "axios"

// export default async function figmaAPIHandler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const figmaProjectId = "Nv3WN0vGhsCj1WSqlA1Ctn" // Replace with your actual Figma project ID
//   const figmaNodeId = "2029-12" // Replace with the ID of the Figma node you want to retrieve
//   const accessKey = "figd_eknpiT303DVZu645udfaNGedTdI2De9uLbgqArNQ" // Replace with your actual Figma access key

//   try {
//     const response = await axios.get(
//       `https://api.figma.com/v1/images/${figmaProjectId}/?ids=${figmaNodeId}&format=svg`,
//       {
//         headers: {
//           "X-Figma-Token": accessKey,
//         },
//       }
//     )

//     const imageResponse = response.data.images[figmaNodeId]

//     res.status(200).json({ imageUrl: imageResponse })
//   } catch (error) {
//     console.error("Error fetching Figma image:", error)
//     res.status(500).json({ error: "Failed to fetch Figma image" })
//   }
// }

// pages/api/figma.ts

import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

// const figmaProjectId = "<FIGMA_PROJECT_ID>";
// const figmaNodeId = "<FIGMA_NODE_ID>";
// const accessKey = "<FIGMA_ACCESS_KEY>";
const figmaProjectId = "Nv3WN0vGhsCj1WSqlA1Ctn" // Replace with your actual Figma project ID
const figmaNodeId = "2029-12" // Replace with the ID of the Figma node you want to retrieve
const accessKey = "figd_eknpiT303DVZu645udfaNGedTdI2De9uLbgqArNQ" // Replace with your actual Figma access key
export default async function figmaAPIHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get(
      `https://api.figma.com/v1/images/${figmaProjectId}/?ids=${figmaNodeId}&format=svg`,
      {
        headers: {
          "X-Figma-Token": accessKey,
        },
      }
    )

    const imageData = response.data.images[figmaNodeId]
    res.status(200).json({ imageData })
  } catch (error) {
    console.error("Error fetching Figma image:", error)
    res.status(500).json({ error: "Failed to fetch Figma image" })
  }
}

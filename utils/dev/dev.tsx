import React, { ReactNode } from "react"

const Dev = ({ children }: { children: ReactNode }) => {
  const isDev = process.env.DEV_ENV === "true"

  if (!isDev) {
    return null
  }
  return children
}

export default Dev

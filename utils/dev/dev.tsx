import React, { ReactNode } from "react"

const Dev = ({ children }: { children: ReactNode }) => {
  const isDev = process.env.NEXT_PUBLIC_DEV_ENV === "true"

  console.log("Dev", isDev)

  if (!isDev) {
    return null
  }
  return children
}

export default Dev

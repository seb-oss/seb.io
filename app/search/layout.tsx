import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://seb.io/search"),
  title: "Search — Green ",
  description: "Green Design System",
  alternates: {
    canonical: "/search",
  },
  openGraph: {
    images: "/og?title=Search",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

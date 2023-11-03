import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://seb.io/foundation"),
  title: "Foundation — Green ",
  description: "Green Design System",
  alternates: {
    canonical: "/foundation",
  },
  openGraph: {
    images: "/og?title=Foundation",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://seb.io/blog"),
  title: "Blog — Green ",
  description: "Green Design System",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    images: "/og?title=Blog",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

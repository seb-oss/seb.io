import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://seb.io/ux-writing/universal"),
  title: "UX writing — Green ",
  description: "Green Design System",
  alternates: {
    canonical: "/ux-writing/universal",
  },
  openGraph: {
    images: "/og?title=UX Writing Universal",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

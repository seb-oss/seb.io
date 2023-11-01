import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Consent from "@/core/blocks/consent/consent"
import Footer from "@/core/blocks/footer"
import Header from "@/core/blocks/header/header"
import Layout from "@/core/layouts/core"
import { ThemeProvider } from "@/utils/theme/provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://seb.io"),
  title: "GDS",
  description: "Green Design System",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    images: "/og-image.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <meta property="og:image" content="<generated>" />
        <meta property="og:image:alt" content="Green Design System" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" /> */}
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="theme" defaultTheme="system" enableSystem>
          <Layout>
            <Header />
            {children}
            <Footer />
            <Consent />
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}

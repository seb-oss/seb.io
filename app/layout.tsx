import type { Metadata } from "next"
import Script from "next/script"
import Alert from "@/core/blocks/alert/aler"
import Consent from "@/core/blocks/consent/consent"
import Footer from "@/core/blocks/footer"
import Header from "@/core/blocks/header/header"
import Layout from "@/core/layouts/core"
import SEBSAnsSerif from "@/utils/fonts/fonts"
import { ThemeProvider } from "@/utils/theme/provider"

export const metadata: Metadata = {
  metadataBase: new URL("https://seb.io"),
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
      <body className={SEBSAnsSerif.className}>
        <ThemeProvider
          attribute="theme"
          defaultTheme="system"
          enableColorScheme={false}
          enableSystem
        >
          <Alert />
          <Header />
          <Layout>{children}</Layout>
          <Consent />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

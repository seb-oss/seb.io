import type { Metadata } from "next"
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
        <Script id="data-layer">
          {`window["dataLayer"] = {
            "pageName":"seb.io",
            "pagetype":"StandardPage",
            "language":"en",
            "environment":"prod",
            "project":"green",
            "website":"seb.io",
          };`}
        </Script>
        <Script id="show-banner">
          {`globalThis.GDS_DISABLE_VERSIONED_ELEMENTS = true`}
        </Script>
        <Script src="/core-out.js" />
      </body>
    </html>
  )
}

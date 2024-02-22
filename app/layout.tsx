"use client"

import { useEffect, useState } from "react"
import type { Metadata } from "next"
import Script from "next/script"
import Alert from "@/core/blocks/alert/aler"
import Consent from "@/core/blocks/consent/consent"
import Footer from "@/core/blocks/footer/footer"
import Header from "@/core/blocks/header/header"
import Article from "@/core/layouts/article/article"
import Main from "@/core/layouts/main/main"
import Fonts from "@/utils/fonts/fonts"
import { ThemeProvider } from "@/utils/theme/provider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const callCC = () => {
      var cc
      try {
        cc = (window as any).initCookieConsent()
      } catch (error) {
        console.error(error)
      }
      if (cc) {
        cc.run({})
      }
    }

    if (
      location.hostname === "seb.io" &&
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("GDS Cookie Consent"))
    ) {
      const script = document.createElement("script")
      script.src =
        "https://content.seb.se/dsc/da/launch/public/30e54a9d6c99/f9d07ef22744/launch-89d260357525.min.js"
      script.type = "application/javascript"
      document.head.appendChild(script)

      const timer = setTimeout(() => {
        callCC()
      }, 1000)

      return () => {
        clearTimeout(timer)
      }
    }
    Fonts()
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="theme"
          defaultTheme="system"
          enableColorScheme={false}
          enableSystem
        >
          <Main>
            <Alert />
            <Header />
            <Article>{children}</Article>
            <Consent />
            <Footer />
          </Main>
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

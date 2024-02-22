import SEBSAnsSerif from "@/utils/fonts/seb-sans-serif"

export default function Fonts() {
  if ("adoptedStyleSheets" in document) {
    const sheet = new CSSStyleSheet()
    sheet.replaceSync(
      `:root { --gds-font-family: ${SEBSAnsSerif.style.fontFamily}; }`
    )
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet]
  } else {
    console.warn("Constructable Stylesheets are not supported in this browser.")
  }

  return
}

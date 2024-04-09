import type { Metadata } from "next"
import Image from "next/image"
import Grid from "@/grid/grid"
import GridPlayground from "@/grid/playground"
import Content from "&/content/content"

export const metadata: Metadata = {
  metadataBase: new URL("https://seb.io/demo/enkla-lanet"),
  title: "Enkla Lanet — Green Design System",
}

export default function EnklaLanet() {
  return (
    <div>
      <h1>Demo: Enkla lanet</h1>
      <p>Detta är enkla lanet</p>
      <Grid columns={2}>
        <div>
          <Image
            src={`https://source.unsplash.com/user/wsanter`}
            alt="Placeholder"
            width={500}
            height={500}
          />
        </div>
        <div>
          <form action="">
            <input type="text" placeholder="Test" />
          </form>
        </div>
      </Grid>
    </div>
  )
}

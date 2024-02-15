"use client"

import { useEffect, useState } from "react"

import "@/core/styles/grid.css"

/* 

TODO: 
- Add support for responsive grid
- Add support for grid gap
- Add support for grid padding
- Add support for grid debug
- Add support for grid columns
- Add support for grid rows
- Add support for grid span
- Add support for grid align
- Add support for grid justify
- Add support for grid items
- Add support for grid patters (aside, main, header, footer, etc)
- Add padding and margin support
- Add typography spacings margins and plus margins etc. 

*/

export default function Grid() {
  const [debug, setDebug] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Alt") {
        setDebug(true)
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Alt") {
        setDebug(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [])

  return (
    <gds-grid
      {...(debug ? { debug: true } : {})}
      gap-v="small"
      gap-h="small"
      padding="small"
      columns="8"
    >
      <gds-cell>
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </gds-cell>
      <gds-cell>
        <h2>Title H2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </gds-cell>
      <gds-cell span="4">
        <gds-grid columns="2">
          <gds-cell>
            <h3>Sub Grid Item</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </gds-cell>
          <gds-cell>
            <h3>Sub Grid Item</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </gds-cell>
          <gds-cell>
            <h3>Sub Grid Item</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </gds-cell>
          <gds-cell>
            <h3>Sub Grid Item</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </gds-cell>
        </gds-grid>
      </gds-cell>
      <gds-cell padding="small">
        <h3>I have custom padding</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </gds-cell>
      <gds-cell>
        <h3>No padding basic</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </gds-cell>
      <gds-cell>
        <h3>6 columns</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </gds-cell>
      <gds-cell>
        <h3>7 columns</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </gds-cell>
      <gds-cell>
        <h3>8 columns</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </gds-cell>
      <gds-cell>
        <h3>9 columns</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </gds-cell>
      <gds-cell>
        <h3>10 columns</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </gds-cell>
      <gds-cell>
        <h3>11 columns</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </gds-cell>
      <gds-cell>
        <h3>12 columns</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </gds-cell>
      <gds-cell>
        <h3>13 columns</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </gds-cell>
    </gds-grid>
  )
}

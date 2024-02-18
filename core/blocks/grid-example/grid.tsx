"use client"

import useGridDebug from "@/utils/grid-debug/grid-debug"

import "@/core/blocks/grid/grid.css"

export default function Grid() {
  const debug = useGridDebug()

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

import "@/core/styles/grid.css"

export default function Grid() {
    return (
        <gds-grid class="debug" columns="8">
            <gds-cell>CELL</gds-cell>
            <gds-cell>CELL</gds-cell>
            <gds-cell span="4">CELL</gds-cell>
            <gds-cell >CELL</gds-cell>
        </gds-grid>
    )

}
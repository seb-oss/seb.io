"use client";

import { useEffect, useState } from 'react';
import "@/core/styles/grid.css"

export default function Grid() {
    const [debug, setDebug] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Alt') {
                setDebug(true);
            }
        };

        const handleKeyUp = (event: KeyboardEvent) => {
            if (event.key === 'Alt') {
                setDebug(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return (
        <gds-grid
            {...(debug ? { debug: true } : {})}
            gap-v="small"
            gap-h="small"
            padding="small"
            columns="8"
        >
            <gds-cell>1</gds-cell>
            <gds-cell>2</gds-cell>
            <gds-cell span="4">
                <gds-grid columns="2">
                    <gds-cell>Sub grid</gds-cell>
                    <gds-cell>Sub Grid</gds-cell>
                    <gds-cell>Sub Grid</gds-cell>
                    <gds-cell>Sub Grid</gds-cell>
                    <gds-cell>Sub Grid</gds-cell>
                    <gds-cell>Sub Grid</gds-cell>
                    <gds-cell>Sub Grid</gds-cell>
                </gds-grid>
            </gds-cell>
            <gds-cell padding="small">4</gds-cell>
            <gds-cell>5</gds-cell>
            <gds-cell>6</gds-cell>
            <gds-cell>7</gds-cell>
            <gds-cell>8</gds-cell>
            <gds-cell>9</gds-cell>
            <gds-cell>10</gds-cell>
            <gds-cell>11</gds-cell>
            <gds-cell>12</gds-cell>
            <gds-cell>13</gds-cell>
            <gds-cell>14</gds-cell>
            <gds-cell>15</gds-cell>
            <gds-cell>16</gds-cell>
            <gds-cell>17</gds-cell>
        </gds-grid>
    );
}
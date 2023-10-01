/*
 * Copyright (c) 2023 [Muhammad Fiaz](https://github.com/muhammad-fiaz/)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS.md OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import grid from '../../../assets/styles/scss/blocks/section.grid.module.scss';

interface SectionGridProps {
	gridSize?: number;
}

export default function SectionGridBG({ gridSize = 4 }: SectionGridProps) {
	function generateGrid(gridSize: number, classProp: string) {
		const grid = [];
		for (let i = 0; i < gridSize + 1; i++) {
			grid.push(<div key={`grid-line-${i}`} className={`${classProp}`} />);
		}
		return grid;
	}

	return (
		<div className={grid.block}>
			<div className={grid.Guides} aria-hidden="true">
				<div className={`${grid.Guides__container} grid-${gridSize}`}>
					{generateGrid(gridSize, grid.Guides__guide)}
					<style jsx>
						{`
              .${grid.Guides__container}.grid-${gridSize} {
                --grid-size: ${gridSize};
              }
            `}
					</style>
				</div>
			</div>
		</div>
	);
}

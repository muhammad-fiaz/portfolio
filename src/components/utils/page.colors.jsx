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
import css from '../../../assets/styles/scss/utils/page.colors.module.scss'


{/* Page Colors */}
export default function ColorOverrides({ colors }) {
	return (
		<>	
			<data id="page-specific-colors" className={css.colors}>
				<Dark colors={colors.dark} />
				<Unicorn colors={colors.unicorn} />
				<Light colors={colors.light} />
				<svg aria-hidden="true" focusable="false">
					<linearGradient id="fa-gradient" x1="0%" y1="0%" x2="175%" y2="175%">
						<stop offset="0%" stopColor="var(--neon-1-2)" />
						<stop offset="100%" stopColor="var(--neon-1-1)" />
					</linearGradient>
				</svg>
			</data>
		</>
	)
}

function Dark({colors}) {
	// dark theme settings
	const children = Object.keys(colors).length
	if ( children !== 0 ) {
		return (	
			<style>
				{`
				:root[data-theme=dark] {
					--mesh-color-1: ${colors.secondaryDark};
					--mesh-color-2: ${colors.secondaryLight};
					--mesh-color-3: ${colors.primaryDark};
					--mesh-color-4: ${colors.primaryLight};
				}
				`}
			</style>
		)
	}
}
function Unicorn({colors}) {
	// unicorn theme settings
	const children = Object.keys(colors).length
	if ( children !== 0 ) {
		return (
			<style>
				{`
				:root[data-theme=unicorn] {
					--mesh-color-1: ${colors.secondaryDark};
					--mesh-color-2: ${colors.secondaryLight};
					--mesh-color-3: ${colors.primaryDark};
					--mesh-color-4: ${colors.primaryLight};
				}
				`}
			</style>
		)
	}
}

function Light({colors}) {
	// light theme settings
	const children = Object.keys(colors).length
	if ( children !== 0 ) {
		return (
			<style>
				{`
				:root[data-theme=light] {
					--mesh-color-1: ${colors.secondaryDark};
					--mesh-color-2: ${colors.secondaryLight};
					--mesh-color-3: ${colors.primaryDark};
					--mesh-color-4: ${colors.primaryLight};
				}
				`}
			</style>
		)
	}
}
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
import {useEffect} from 'react';
import Section from '../structure/section';
import Container from '../structure/container';

export default function SetGridGap() {
	useEffect(() => {
		const setGapSize = () => {
			const root = document.querySelector(':root');
			const container = document.querySelector('.getGapSize__grid_32');

			if (container) {
				const readingWidth = container.clientWidth;
				const grid32 = readingWidth / 32;
				root.style.setProperty('--grid-32', `${grid32}px`);
			}
		};

		setGapSize();
		window.addEventListener('resize', setGapSize);

		return () => {
			window.removeEventListener('resize', setGapSize);
		};
	}, []);

	return (
		<Section classProp={'getGapSize__container'}>
			<Container classProp={'getGapSize__grid_32'}></Container>
		</Section>
	);
}

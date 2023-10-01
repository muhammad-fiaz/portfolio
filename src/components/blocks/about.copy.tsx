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
// Util packages
import Icon from '../utils/icon';

// Define the props for the CopyBlock component
interface CopyBlockProps {
	containerClass: string;
	iconClass: string;
	icon: any;
	title: string;
	copy: string;
}

// This will return the copy block component
export default function CopyBlock({
									  containerClass,
									  iconClass,
									  icon, // Keep it as a string if you're using a string for the icon
									  title,
									  copy,
								  }: CopyBlockProps) {
	// Return the copy block component
	return (
		<div className={containerClass}>
      <span className={iconClass}>
        <Icon icon={icon} />
      </span>
			<h3>{title}</h3>
			<p>{copy}</p>
		</div>
	);
}

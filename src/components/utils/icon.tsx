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
import React, {useEffect, useState} from 'react';
import {IconName, IconPrefix, library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/pro-solid-svg-icons';
import {fat} from '@fortawesome/pro-thin-svg-icons';
import {fal} from '@fortawesome/pro-light-svg-icons';
import {fad} from '@fortawesome/pro-duotone-svg-icons';
import {far} from '@fortawesome/pro-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';

// Icons
library.add(fat, fal, fas, fad, far, fab);

interface IconProps {
	icon: [IconPrefix, IconName];
}

const Icon: React.FC<IconProps> = ({ icon }) => {
	const [iconType, iconKey] = icon;
	const [stateIconKey, setIconKey] = useState<IconName>('circle-notch');

	useEffect(() => {
		setIconKey(iconKey as IconName);
	}, [iconKey]);

	return <FontAwesomeIcon icon={[iconType as IconPrefix, stateIconKey]} />;
};

export default Icon;

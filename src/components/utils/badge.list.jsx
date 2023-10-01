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
import {useEffect} from 'react'
import {m, useAnimation} from "framer-motion"
import {useInView} from 'react-intersection-observer'

// Utility components
import Icon from './icon.tsx'


import badges from '../../../assets/styles/scss/blocks/badges.module.scss';
import BadgesBlockProps from "../blocks/about.badges";



export default function Badges({ list, block, color, fullContainer }) {

	const controls = useAnimation();
	const { ref, inView  } = useInView({
		"threshold": 0.5,
		"triggerOnce": false
	})

	useEffect( () => {
		if ( inView ) {	controls.start("visible") }
		if ( !inView ) { controls.start("hidden") }
	}, [ controls, inView ] );

	const container = {
		hidden: {
			opacity: 1,
			transition: {
				delayChildren: 0.25,
				staggerChildren: 0.025
			}
		},
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.025,
				staggerChildren: 0.1
			}
		}
	}

	const item = {
		hidden: {
			y: 20,
			opacity: -0.5
		},
		visible: {
			y: 0,
			opacity: 1
		}
	}

	return (
		<m.ul
			className={`${badges.list} ${badges[block]} ${badges[fullContainer]}`}
			//Animations
				ref={ref}
				variants={container}
				initial="hidden"
				animate={controls}
				whileHover="hover"
		>
		{
		list.map( ({ key, name, type }) => {
			return (
				<m.li
					key={name}
					className={`${badges.item} ${key}`}
					//Animations
					variants={item} >
					<IconModule iconKey={key} iconType={type} color={color}/>
					<span className={badges.title}>{name}</span>
				</m.li>
				)
			})
		}
		</m.ul>
	)
}

function IconModule({ iconKey, iconType, color }) {
	let colored = 'colored'
	if (color === false) { colored = '' }

	switch (iconType) {
		case 'far':
		case 'fad':
		case 'fat':
		case 'fas':
			return ( <Icon icon={[ iconType, iconKey ]} /> )
		case 'devicon':
			return ( <i className={`devicon-${iconKey}-plain ${colored}`} /> )
		default:
			return ( '' )
	}
}


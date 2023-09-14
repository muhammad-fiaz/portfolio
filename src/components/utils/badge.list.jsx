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


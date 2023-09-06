import {useState} from 'react';
import {TypeAnimation} from 'react-type-animation';

import Section from '../../structure/section';
import Container from '../../structure/container';

import space from '../../utils/spacing';

import HeroBg from '../../blocks/hero.bg/section-bg-color';

import hero from '../../../../assets/styles/scss/sections/index/hero.module.scss';
import button from '../../../../assets/styles/scss/blocks/button.module.scss';

import content from '../../../content/index/hero.json'


export default function Hero() {

	const [, setTypingStatus] = useState('Initializing');

	return (
		<Section classProp={`${hero.section}`}>
			<Container spacing={'VerticalXXXL'}>
				<TypeAnimation className={`${hero.preHeader}`}
					sequence={[
						content.intro.startDelay,
						() => { setTypingStatus('typing') },
						content.intro.start,
						() => {	setTypingStatus('typed') },
						content.intro.deleteDelay,
						() => {	setTypingStatus('deleting') },
						content.intro.end,
						() => {	setTypingStatus('deleted') },
						content.intro.restartDelay,
					]}
					speed={content.intro.speed}
					deletionSpeed={content.intro.deletionSpeed}
					wrapper={content.intro.wrapper}
					repeat={Infinity}
				/>
				<section>
					<h1 className={hero.header}>
						{content.header.name}
						</h1>
					<h1 className={`${hero.header} ${hero.primaryDim}`}>
						{content.header.usp}
					</h1>
				</section>
				<section>
					<p className={`${hero.primaryBright} subtitle ${space(["verticalLrg"])}`}>
						{ content.paragraph }
					</p>					
				</section>
				<section>
					<button	className={`button ${button.primary}`}
							onClick={ () => window.location = 'mailto:s.muhammadfiaz2003@gmail.com' } >
						{content.buttons.primary.title}
					</button>
					<button className={`button ${button.secondary} leaveSite`}
							onClick={ ()=> window.open("https://www.linkedin.com/in/muhammad-fiaz-/", "_blank") } >
						{content.buttons.secondary.title}
					</button>
				</section>
			</Container>
			<HeroBg theme="bg-color-1" />
		</Section>
	)
}
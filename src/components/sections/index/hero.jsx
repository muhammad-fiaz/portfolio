import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import Section from '../../structure/section';
import Container from '../../structure/container';
import Image from 'next/image';

import space from '../../utils/spacing';

import HeroBg from '../../blocks/hero.bg/section-bg-color';

import hero from '../../../styles/scss/sections/index/hero.module.scss';
import button from '../../../styles/scss/blocks/button.module.scss';

import content from '../../../content/index/hero.json';

export default function Hero() {
	const [, setTypingStatus] = useState('Initializing');
	const [isHiremeTooltipVisible, setIsHiremeTooltipVisible] = useState(false);
	const [isYescatTooltipVisible, setIsYescatTooltipVisible] = useState(false);

	return (
		<Section classProp={`${hero.section}`}>
			<Container spacing={'VerticalXXXL'}>
				<TypeAnimation
					className={`${hero.preHeader}`}
					sequence={[
						content.intro.startDelay,
						() => {
							setTypingStatus('typing');
						},
						content.intro.start,
						() => {
							setTypingStatus('typed');
						},
						content.intro.deleteDelay,
						() => {
							setTypingStatus('deleting');
						},
						content.intro.end,
						() => {
							setTypingStatus('deleted');
						},
						content.intro.restartDelay,
					]}
					speed={content.intro.speed}
					deletionSpeed={content.intro.deletionSpeed}
					wrapper={content.intro.wrapper}
					repeat={Infinity}
				/>
				<section>
					<h1 className={hero.header}>{content.header.name}</h1>
					<h1 className={`${hero.header} ${hero.primaryDim}`}>{content.header.usp}</h1>
				</section>
				<section>
					<p className={`${hero.primaryBright} subtitle ${space(['verticalLrg'])}`}>
						{content.paragraph}
					</p>
				</section>
				<section style={{ position: 'relative' }}>
					<button
						className={`button ${button.primary}`}
						onClick={() => (window.location = 'mailto:contact@muhammadfiaz.com')}
						onMouseEnter={() => setIsHiremeTooltipVisible(true)}
						onMouseLeave={() => setIsHiremeTooltipVisible(false)}
					>
						{content.buttons.primary.title}
					</button>
					{isHiremeTooltipVisible && (
						<div className={`${hero.tooltipContent} ${hero.hireme_tooltip}`}>

							<Image src="/gif/hireme.gif" width={100} height={100} alt="Yescat GIF" />

						</div>
					)}
					<button
						className={`button ${button.secondary} leaveSite`}

						onClick={() => window.open('https://www.linkedin.com/in/muhammad-fiaz-', '_blank')}

						onMouseEnter={() => setIsYescatTooltipVisible(true)}
						onMouseLeave={() => setIsYescatTooltipVisible(false)}
					>
						{content.buttons.secondary.title}
					</button>
					{isYescatTooltipVisible && (
						<div className={`${hero.tooltipContent} ${hero.yescat_tooltip}`}>

							<Image src="/gif/yes.gif" width={100} height={100} alt="GIF" />

						</div>
					)}
				</section>
			</Container>
			<HeroBg theme="bg-color-1" />
		</Section>
	);
}

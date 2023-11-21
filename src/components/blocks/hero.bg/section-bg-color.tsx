import hero from '../../../styles/scss/sections/index/hero.module.scss';
export default function sectionBgColor() {
	return (
		<div className={`${hero.heroBackground}`}>
			<div className={`${hero.barContainer} noEvents`}>
				<div className={`${hero.barGradient}`}></div>
			</div>
			<div className={`${hero.radialContainer} noEvents`}>
				<div className={`${hero.radialGradient}`}></div>
			</div>
		</div>
	)
}
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
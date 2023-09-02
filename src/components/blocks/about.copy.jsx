// Util packages
import Icon from '../utils/icon'

// Utility packages

/**
 * About section component block that contains the written copy

 * @returns <CopyBlock />
 */
export default function CopyBlock({ containerClass, iconClass, icon, title, copy }) {
	// return the copy block component
	return (
		<>
		<div className={containerClass}>
			<span className={iconClass}>
				<Icon icon={icon} />
			</span>
			<h3>{title}</h3>
			<p>
				{copy}
			</p>
		</div>
		</>
	)
}
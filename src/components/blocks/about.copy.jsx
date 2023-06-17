// Util packages
import Icon from '../utils/icon'

// Utility packages
import space from '../utils/spacing';

/**
 * About section component block that contains the written copy

 * @returns {jsx} <CopyBlock />
 */
export default function CopyBlock({ containerClass, iconClass, icon, title, copy }) {
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
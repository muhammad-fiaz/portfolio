// Util packages
import Icon from '../utils/icon'


// this will return the copy block component
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
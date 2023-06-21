// Section structure scss
import sections from '../../../assets/styles/structure/section.module.scss';

/**
 * Structural Component
 * 
 * Section / Container / Componenents / Blocks / Utils

 */
export default function Section({ classProp, children }) {

	const _class = classProp ? classProp : '';

	return (
		<div className={`${sections.default} ${_class}`}>
			{children}
		</div>
	);
}
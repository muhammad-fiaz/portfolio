// Utility packages
import Spacing from '../utils/spacing';

// Structure scss
import css from '../../../assets/styles/structure/container.module.scss';

/**
 * Structural Component
 * 
 * Section / Container / Componenents / Blocks / Utils
 *          ¯¯¯¯¯¯¯¯¯¯¯

 * @returns {jsx}	<Container />
 */
export default function Container({ classProp, spacing, children }) {

	const _class = classProp ? classProp : '';

	return ( 
		<div className={`${css.readingWidth} ${_class} ${Spacing(spacing)}`}>
			{children}
		</div>
	);
}
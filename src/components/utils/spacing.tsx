// Utility scss
import spaces from '../../../assets/styles/scss/utils/spacing.module.scss';


export default function Spacing( spacing: string | number | any[] ) {
	let classes = [];
	if ( Array.isArray(spacing) ) {
		spacing.forEach( space => {
			classes.push( spaces[space] );
		});
	} else {
		classes.push( spaces[spacing] );
	}
	return classes.join(' ');
}
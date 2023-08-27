import Color from '../../src/components/utils/page.colors'

import colors from '../../src/content/docs/_colors.json'
import FeaturedDocs from "../../src/components/sections/docs/featured";

// documentation page - under development
export default function docs({}) {
	{/*this page will display the doc posts*/}
	return (
		<>	
			<Color colors={colors} />
			<FeaturedDocs/>
		</>
	)
}
import Color 	from '../../src/components/utils/page.colors'
import Inactivedevelopment from '../../src/components/dev/inactivedevelopment'

import colors 		from '../../src/content/docs/_colors.json'
import settings 	from '../../src/content/_settings.json'
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
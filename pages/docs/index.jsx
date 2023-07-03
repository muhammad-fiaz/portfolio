import Color 	from '../../src/components/utils/page.colors'
import Inactivedevelopment from '../../src/components/sections/inactivedevelopment'

import colors 		from '../../src/content/docs/_colors.json'
import settings 	from '../../src/content/_settings.json'

// documentation page - under development
export default function docs({}) {
	{/*this page will display the doc posts*/}
	return (
		<>	
			<Color colors={colors} />
			<Inactivedevelopment />
		</>
	)
}
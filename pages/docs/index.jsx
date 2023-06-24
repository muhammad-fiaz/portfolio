import Color 	from '../../src/components/utils/page.colors'
import Inactivedevelopment from '../../src/components/sections/inactivedevelopment'

import colors 		from '../../src/content/docs/_colors.json'
import settings 	from '../../src/content/_settings.json'

//
export default function docs({}) {
	return (
		<>	
			<Color colors={colors} />
			<Inactivedevelopment />
		</>
	)
}
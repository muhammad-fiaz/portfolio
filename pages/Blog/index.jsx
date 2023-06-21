import Color 	from '../../src/components/utils/page.colors'
import Inactivedevelopment from '../../src/components/sections/inactivedevelopment'

import colors 		from '../../src/content/blog/_colors.json'
import settings 	from '../../src/content/_settings.json'

//
export default function Blog({}) {
	return (
		<>	
			<Color colors={colors} />
			<Inactivedevelopment />
		</>
	)
}
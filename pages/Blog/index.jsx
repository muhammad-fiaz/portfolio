import Color 	from '../../src/components/utils/page.colors'
import ComingSoon from '../../src/components/sections/comingsoon'

import colors 		from '../../src/content/blog/_colors.json'
import settings 	from '../../src/content/_settings.json'

//
export default function Blog({}) {
	return (
		<>	
			<Color colors={colors} />
			<ComingSoon />
		</>
	)
}
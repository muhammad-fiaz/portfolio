import Color 	from '../../src/components/utils/page.colors'
import ComingSoon from '../../src/components/sections/comingsoon'

import colors 		from '../../src/content/blog/_colors.json'
import settings 	from '../../src/content/_settings.json'

//TODO Signin page
export default function Signin({}) {
    return (
        <>
            <Color colors={colors} />
            <ComingSoon />
        </>
    )
}
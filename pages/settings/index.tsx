import Color 	from '../../src/components/utils/page.colors'
import Inactivedevelopment from '../../src/components/dev/inactivedevelopment'

import colors 		from '../../src/content/settings/_colors.json'

// Settings page
export default function settings({}) {
    {/*this page will display the signing in page*/}
    return (
        <>
            <Color colors={colors} />
            <Inactivedevelopment/>
        </>
    )
}
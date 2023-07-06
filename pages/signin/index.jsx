import Color 	from '../../src/components/utils/page.colors'
import Inactivedevelopment from '../../src/components/dev/inactivedevelopment'

import colors 		from '../../src/content/signin/_colors.json'
import settings 	from '../../src/content/_settings.json'
import Auth from "../../src/components/sections/signin/signin";

// signin page
export default function Signin({}) {
    {/*this page will display the signing in page*/}
    return (
        <>
            <Color colors={colors} />
<Auth/>
        </>
    )
}
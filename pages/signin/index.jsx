import Color from '../../src/components/utils/page.colors'

import colors from '../../src/content/signin/_colors.json'
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
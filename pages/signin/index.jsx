import Color from '../../src/components/utils/page.colors'

import colors from '../../src/content/signin/_colors.json'
import Auth from "../../src/components/sections/signin/signin";
import TitleSignin from "./title.signin";

// signin page
export default function Signin({}) {
    {/*this page will display the signing in page*/}
    return (
        <>
            <TitleSignin/>
            <Color colors={colors} />
<Auth/>
        </>
    )
}
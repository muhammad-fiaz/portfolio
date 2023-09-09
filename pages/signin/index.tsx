import Color from '../../src/components/utils/page.colors'

import colors from '../../src/content/signin/_colors.json'
const Auth  = dynamic(import ("../../src/components/sections/signin/signin"));
import TitleSignin from "./title.signin";
import dynamic from "next/dynamic";

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
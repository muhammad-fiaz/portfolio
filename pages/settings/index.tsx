import Color from '../../src/components/utils/page.colors'

import colors from '../../src/content/settings/_colors.json'

import Settings from '../../src/components/sections/settings/settings'
import TitleSettings from "./title.settings";

// Settings page
export default function settings({}) {
    {/*this page will display the signing in page*/}
    return (
        <>
            <TitleSettings/>
            <Color colors={colors} />
            <Settings/>
        </>
    )
}
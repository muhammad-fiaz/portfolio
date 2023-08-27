import Color from '../../src/components/utils/page.colors'

import colors from '../../src/content/settings/_colors.json'

import Settings from '../../src/components/sections/settings/settings'

// Settings page
export default function settings({}) {
    {/*this page will display the signing in page*/}
    return (
        <>
            <Color colors={colors} />
            <Settings/>
        </>
    )
}
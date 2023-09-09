import Color from '../../src/components/utils/page.colors'

import colors from '../../src/content/settings/_colors.json'

const Settings   = dynamic(import ('../../src/components/sections/settings/settings'));
import TitleSettings from "./title.settings";
import dynamic from "next/dynamic";

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
import Color from '../../src/components/utils/page.colors'

import colors from '../../src/content/docs/_colors.json'
const FeaturedDocs   = dynamic(import ( "../../src/components/sections/docs/featured"));
import TitleDocs from "./title.docs";
import dynamic from "next/dynamic";

// documentation page - under development
export default function docs({}) {
	{/*this page will display the doc posts*/}
	return (
		<>
			<TitleDocs/>
			<Color colors={colors} />
			<FeaturedDocs/>
		</>
	)
}
import Color from '../../src/components/utils/page.colors'

import colors from '../../src/content/docs/_colors.json'
import FeaturedDocs from "../../src/components/sections/docs/featured";
import TitleDocs from "./title.docs";

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
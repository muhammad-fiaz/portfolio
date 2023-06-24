import Hero 		from '../src/components/sections/index/hero'
import Looking 		from '../src/components/sections/index/looking'
import About 		from '../src/components/sections/index/home'
import Technical 	from '../src/components/sections/index/technical'
import Career 		from '../src/components/sections/index/career'
import FeaturedProjects	from '../src/components/sections/projects/featured'

import Color 		from '../src/components/utils/page.colors'

import colors 		from '../src/content/index/_colors.json'
// index.tsx
export default function HomePage() {

	return (
		<>
			<Color colors={colors} />

			<Hero />
		<Looking />
			<FeaturedProjects />
			<About />
			<Technical />
			<Career />

		</>
	);
}
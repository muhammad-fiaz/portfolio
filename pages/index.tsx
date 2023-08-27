import dynamic from 'next/dynamic';
import colors from '../src/content/index/_colors.json';

const Hero = dynamic(() => import('../src/components/sections/index/hero'));
const Looking = dynamic(() => import('../src/components/sections/index/looking'));
const About = dynamic(() => import('../src/components/sections/index/home'));
const Technical = dynamic(() => import('../src/components/sections/index/technical'));
const Career = dynamic(() => import('../src/components/sections/index/career'));
const FeaturedProjects = dynamic(() => import('../src/components/sections/projects/featured'));
const QnA = dynamic(() => import('../src/components/sections/index/qna'));
const Color = dynamic(() => import('../src/components/utils/page.colors'));

export default function HomePage() {
	return (
		<>
			<Color colors={colors} />
			<Hero />
			<Looking />
			<About />
			<FeaturedProjects />
			<Technical />
			<Career />
			<QnA />
		</>
	);
}

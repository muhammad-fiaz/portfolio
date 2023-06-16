// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

// Specing util
import Spacing 		from '../../utils/spacing';

// Section general blocks
import SectionGridBg from '../../blocks/section.grid'
import SectionTitle from '../../blocks/section.title'

// Section scss
import looking 		from '../../../../assets/styles/sections/index/looking.module.scss';
import section 		from '../../../../assets/styles/blocks/section.title.module.scss'

export default function Looking() {
	return (
		<Section classProp={`${looking.section} borderBottom`}>	
			<Container classProp={`${section.title} ${looking.container}`} spacing={['verticalXXXLrg']}>
				<h4>I&apos;m currently looking for Jobs.</h4>
				<h2 className={looking.json}>Jobs : &#123;</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight}>Full Stack Developer</span>,</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight2}>Software Engineer</span></h2>
				<h2 className={looking.json}>&#125;</h2>
				<h4>I am particularly interested in product based positions where I can help make an organization wide impact.</h4>
				{/* <h2>Fresher <span className={looking.highlight}>User Experience</span> Designer</h2> */}
				{/* <p className="subtitle">with a focus on Product Design.</p> */}
			</Container>
		</Section>
	)
}
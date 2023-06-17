
import Container from '../structure/container';

// Section scss
import section from '../../../assets/styles/blocks/section.title.module.scss'

/**
 * Section header component

 * @returns 
 */
export default function SectionTitle({ preTitle, title, subTitle }) {
	return (
		<>
		<div className={`${section.title}`}>
			<h4>{preTitle}</h4>
			<h2>{title}</h2>
			<p className="subtitle">{subTitle}</p>
		</div>
		</>
	)

}
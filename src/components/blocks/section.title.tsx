import React from 'react';
import section from '../../../assets/styles/scss/blocks/section.title.module.scss';

interface SectionTitleProps {
	preTitle: string;
	title: string;
	subTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ preTitle, title, subTitle }) => {
	return (
		<div className={`${section.title}`}>
			<h4>{preTitle}</h4>
			<h2>{title}</h2>
			<p className="subtitle">{subTitle}</p>
		</div>
	);
};

export default SectionTitle;

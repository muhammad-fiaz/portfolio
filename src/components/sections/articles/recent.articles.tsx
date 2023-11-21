import React from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import Image from 'next/image';
import SectionTitle from '../../blocks/section.title';
import Icon from '../../utils/icon';
import css from '../../../styles/scss/sections/articles/recent.module.scss';

// Define the shape of a single medium article
interface MediumArticle {
	title: string;
	pubDate: string;
	link: string;
	author: string;
	thumbnail: string;
	categories: string[];
}

// Define the props for the RecentArticles component
interface RecentArticlesProps {
	mediumArticles: {
		feed: any; // Replace 'any' with the actual type for feed
		items: MediumArticle[];
	};
}

// RecentArticles component
const RecentArticles: React.FC<RecentArticlesProps> = ({ mediumArticles }) => {
	// Extract feed and articles from the props
	const { feed, items: articles } = mediumArticles;

	return (
		<Section classProp="borderBottom">
			<Container spacing={['verticalXXXXLrg']}>
				{/* Section title */}
				<SectionTitle
					title="Recent Medium Articles"
					preTitle="Informative"
					subTitle="A personal quest to become a better creative writer."
				/>
				{/* Article section */}
				<section className={css.projects}>
					{articles.map(({ title, pubDate, link, author, thumbnail, categories }, index) => {
						// Format the article date
						const date = new Date(pubDate).toDateString();
						return (
							<article key={index} className={css.project}>
								{/* Article thumbnail */}
								<span className={css.featuredImage}>
                                    <Image src={thumbnail} height={400} width={600} alt="Article thumbnail" loading="eager" />
                                </span>
								{/* Article title and link */}
								<span className={css.header}>
                                    <a href={link} rel="noreferrer" target="_blank">
                                        {title} <Icon icon={['fad', 'arrow-up-right-from-square']} />
                                    </a>
                                </span>
								{/* Article description container */}
								<span className={css.descriptionContainer}></span>
								{/* Article details */}
								<span className={css.details}>
                                    <p>By {author}</p>
                                    <p className={css.pushedAt}>{date}</p>
                                </span>
								{/* Article categories (topics) */}
								<span className={css.topicsContainer}>
                                    {categories.map((e, index) => (
										<span key={index} className={css.topics}>
                                            <Icon icon={['fab', 'medium']} /> {e}
                                        </span>
									))}
                                </span>
							</article>
						);
					})}
				</section>
			</Container>
		</Section>
	);
};

export default RecentArticles;

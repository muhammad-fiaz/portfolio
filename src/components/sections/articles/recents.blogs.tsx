import React from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title';
import css from '../../../styles/scss/sections/articles/recent.module.scss';
import Image from 'next/image';
import Icon from '../../utils/icon';

interface DevToArticle {
    title: string;
    description: string;
    user: {
        name: string;
    };
    id: string;
    cover_image: string;
    created_at: string;
    tags: string | string[];
}

interface DevToRecentProps {
    devToArticles: DevToArticle[];
}

const DevToRecent: React.FC<DevToRecentProps> = ({ devToArticles }) => {
    if (!devToArticles || !devToArticles.length) {
        return null; // Render nothing if there are no Dev.to articles
    }

    return (
        <Section classProp="borderBottom">
            <Container spacing={['verticalXXXXLrg']}>
                <SectionTitle
                    title="Recent Dev.to Blogs"
                    preTitle="Knowledgable"
                    subTitle="Exploring insights and experiences on Dev.to."
                />
                <section className={css.projects}>
                    {devToArticles.map(({ title, description, user, id, cover_image, created_at, tags }) => {
                        const date = new Date(created_at).toLocaleDateString(); // Convert the created_at to a formatted date

                        // Check if tags is a string, convert it to an array by splitting
                        const tagArray = Array.isArray(tags) ? tags : tags.split(',');

                        return (
                            <article key={id} className={css.project}>
                                <span className={css.featuredImage}>
                                    {cover_image ? (
                                        <Image src={cover_image} height={400} width={600} alt="Article thumbnail" loading="eager" />
                                    ) : (
                                        <Image src="/img/noimageavailable.jpg" height={400} width={600} alt="Default thumbnail" loading="eager" />
                                    )}
                                </span>
                                <span className={css.header}>
                                    <a href="" rel="noreferrer" target="_blank">
                                        {title} <Icon icon={['fad', 'arrow-up-right-from-square']} />
                                    </a>
                                </span>
                                <span className={css.descriptionContainer}>
                                    <h3>{description}</h3>
                                </span>
                                <span className={css.details}>
                                    <p>By {user.name}</p>
                                    <p className={css.pushedAt}>{date}</p>
                                </span>
                                {tagArray.length > 0 && (
                                    <span className={css.topicsContainer}>
                                        {tagArray.map((tag, index) => (
                                            <span key={index} className={css.topics}>
                                                {tag.trim()}
                                            </span>
                                        ))}
                                    </span>
                                )}
                            </article>
                        );
                    })}
                </section>
            </Container>
        </Section>
    );
};

export default DevToRecent;

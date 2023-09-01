import Section from '../../structure/section';
import Container from '../../structure/container';

import Image from 'next/image'
import SectionTitle from '../../blocks/section.title'

import Icon from '../../utils/icon'

import css from '../../../../assets/styles/scss/sections/articles/recent.module.scss'
import docs from '../../../content/docs/featured.json'
import React from "react";

export default function Recent({ }) {


    return (
        <Section classProp="borderBottom">
            {/* @ts-ignore */}
            <Container spacing={'verticalXXXXLrg'}>
                <SectionTitle
                    title="Featured Docs"
                    preTitle="Documentation"
                    subTitle="featured documentation of projects"
                />
                <section className={css.projects}>
                    {
                        docs.map( ({ title, pubDate, link, author, thumbnail, categories }, index) => {
                            const date = new Date(pubDate).toDateString()
                            return (
                                <>
                                    <article key={index} className={css.project}>
								<span className={css.featuredImage}>
                                    <Image src={thumbnail} alt="Documentation thumbnail" height={400} width={600} loading="eager" />
								</span>
                                        <span className={css.header}>
									<a href={link} rel="noreferrer" target="_blank">{title} <Icon icon={[ 'fad', 'arrow-up-right-from-square' ]} /></a>
								</span>
                                        <span className={css.descriptionContainer}>
								</span>
                                        <span className={css.details}>
									<p>By {author}</p>
									<p className={css.pushedAt}>{date}</p>
								</span>
                                        <span className={css.topicsContainer}>
									{
                                        categories.map( (e, index) => {
                                            return ( <span key={index} className={css.topics}><Icon icon={[ 'fab', 'medium' ]} /> {e}</span> )
                                        })
                                    }
								</span>
                                    </article>
                                </>
                            )
                        })
                    }
                </section>
            </Container>
        </Section>
    )
}
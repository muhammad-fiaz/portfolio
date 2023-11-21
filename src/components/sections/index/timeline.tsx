import React from "react";
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title';
import styles from '../../../styles/scss/sections/index/career.module.scss';
import timeline from '../../../styles/scss/sections/index/timeline.module.scss';

const timelineData = [
    { year: '2023', text: 'Lorem ipsum ...' },
    { year: '2022', text: 'Lorem ipsum ...' },
    // Add more timeline items as needed
];

export default function TimeLine() {
    return (
        <Section classProp={`${styles.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle
                    title="My Journey"
                    preTitle="My Way"
                    subTitle=""
                />
                <section className={`${styles.area} ${timeline.timeline}`}>
                    <div className={styles.company}>
                        <div className={styles.companyContent}>
                            <div className={timeline.timeline}>
                                {timelineData.map((item, index) => (
                                    <div key={index} className={`timeline-container ${index % 2 === 0 ? 'left' : 'right'}`}>
                                        <div className={timeline.content}>
                                            <h2>{item.year}</h2>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </Section>
    );
}

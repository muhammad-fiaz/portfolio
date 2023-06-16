// Core packages
import Image from 'next/image'

import Badges 		from '../../utils/badge.list'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title'
import SectionGridBg from '../../blocks/section.grid'

// Career scss
import career from '../../../../assets/styles/sections/index/career.module.scss'


export default function Education() {
    return (
        <Section classProp={`${career.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle
                    title="Education"
                    preTitle="Formal"
                    subTitle="I am currently studying computer science at the Velammal college of engineering and technology."
                />
                <section className={career.area}>

                    <article className={career.company}>
                        <div className={career.companyContent}>
        <span className={career.companyHeader}>
            <h3>Velammal College of Engineering and Technology</h3>
            <h4>Full-time</h4>
            <h4>2021 - 2025 · 4 years</h4>
            <h5>Madurai, Tamil Nadu</h5>
        </span>
                            <p>I am currently pursuing my Bachelors degree in Computer Science and Engineering at Velammal College of Engineering and Technology. This four-year program offers a comprehensive curriculum that covers various aspects of computer science and its applications.</p>
                            <p>During my time at Velammal, I have gained a solid foundation in programming languages such as Java, C/C++, and Python. I have also developed skills in data structures, algorithms, database management, and software engineering principles.</p>
                            <p>As part of my coursework, I have worked on several projects, both individually and in teams, which have enhanced my problem-solving and teamwork abilities. These projects have allowed me to apply theoretical knowledge to real-world scenarios, honing my practical skills in software development, web technologies, and computer networks.</p>
                            <p>Additionally, I have actively participated in extracurricular activities and technical events on campus, which have provided me with opportunities to expand my knowledge, network with fellow students, and enhance my leadership and communication skills.</p>
                            <p>I am excited to continue my journey at Velammal College of Engineering and Technology, further exploring the field of computer science and gaining hands-on experience through internships and industry collaborations.</p>
                        </div>
                        <div className={career.companyAlt}></div>
                    </article>

                </section>
            </Container>
        </Section>
    )
}


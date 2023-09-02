// Core packages
// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title'

// Career scss
import career from '../../../../assets/styles/scss/sections/index/career.module.scss'


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

                        </div>
                        <div className={career.companyAlt}></div>
                    </article>

                </section>
            </Container>
        </Section>
    )
}


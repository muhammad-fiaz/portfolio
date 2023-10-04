import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title';
import styles from '../../../../assets/styles/scss/sections/index/career.module.scss';
import timeline from '../../../../assets/styles/scss/sections/index/timeline.module.scss';
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

                </section>
            </Container>
        </Section>
    );
}
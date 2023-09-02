import React, {useState} from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title';
import career from '../../../../assets/styles/scss/sections/index/career.module.scss';
import qna from '../../../../src/content/index/qna.json';

const QnA = () => {
    const [qnas, setQnas] = useState(qna);

    const toggleAnswer = (index) => {
        setQnas((prevState) => {
            const updatedQnas = [...prevState];
            updatedQnas[index].isOpen = !updatedQnas[index].isOpen;
            return updatedQnas;
        });
    };

    return (
        <Section classProp={`${career.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle title="Q & A" preTitle=""
                              subTitle="Get your Questions answer."
                />

                <div className={career.area}>
                    {qnas.map((qna, index) => (
                        <div key={index} className={career.company}>
                            <div
                                className={career.companyContent}
                                style={{ cursor: 'pointer', fontWeight: 'bold' }}
                                onClick={() => toggleAnswer(index)}
                            >
                                {qna.question}
                            </div>
                            {qna.isOpen && <div className={career.companyContent}>{qna.answer}</div>}
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default QnA;

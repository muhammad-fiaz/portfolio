/*
 * Copyright (c) 2023 [Muhammad Fiaz](https://github.com/muhammad-fiaz/)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS.md OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import React, {useState} from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title';
import career from '../../../../assets/styles/scss/sections/index/career.module.scss';
import qna from '../../../../src/content/index/qna.json';

interface QnAItem {
    question: string;
    answer: string;
    isOpen: boolean;
}

const QnA: React.FC = () => {
    const [qnas, setQnas] = useState<QnAItem[]>(qna);

    const toggleAnswer = (index: number) => {
        setQnas((prevState) => {
            const updatedQnas = [...prevState];
            updatedQnas[index].isOpen = !updatedQnas[index].isOpen;
            return updatedQnas;
        });
    };

    return (
        <Section classProp={`${career.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle title="Q & A" preTitle="" subTitle="Get your Questions answered." />

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

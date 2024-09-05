'use client';

import React, { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import styles from "../../../styles/scss/sections/index/career.module.scss";
import SectionTitle from "../../blocks/section.title";
import Section from "../../structure/section";
import Container from "../../structure/container";

const currentYear = new Date().getFullYear(); // Get the current year

export default function GithubGraphSection() {
    const [year, setYear] = useState<number>(currentYear); // Set the year to the current year

    return (
        <Section classProp={`${styles.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle
                    title="Github Contributions"
                    preTitle="My Way"
                    subTitle={`My GitHub Contributions show my ongoing open-source involvement in ${year}, a fulfilling hobby I engage in during my free time.`}
                />
                <section className={`${styles.area}`}>
                    <div className={styles.company}>
                        <div className={` w-full space-y-6 pb-18 pt-100 md:space-y-12`}>
                            <div className="mt-3 flex flex-wrap gap-3 text-md leading-7">
                                {/* Only display the current year button */}
                                <button
                                    key={currentYear}
                                    className="cursor-pointer text-primary-500 hover:text-primary-800"
                                    onClick={() => setYear(currentYear)}
                                >
                                    {currentYear}
                                </button>
                            </div>
                            <div
                                className="p-4 w-full md:p-6 flex justify-center items-center overflow-hidden rounded-md border-2 border-opacity-60 border-gray-700 transition-all hover:border-primary-900"
                            >
                                <div className="w-full max-w-screen-md">
                                    <GitHubCalendar
                                        key={`${year}-calendar`}
                                        username="muhammad-fiaz"
                                        year={year}
                                        colorScheme="dark"

                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </Section>
    );
}

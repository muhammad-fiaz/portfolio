import Head from 'next/head';
import React from 'react';

export default function TitleArticles() {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
            <title>Articles by Muhammad Fiaz</title>
            <meta name="description" content="Explore articles authored by Muhammad Fiaz, a Full Stack Engineer and Developer." />

            {/*These are the Keywords that will Boost your SEO in Ranking, so Make Sure to include and Update it up to your preference or don't mind this! 😴*/}
            <meta name="keywords" content="Muhammad Fiaz, Muhammad, Fiaz, Full Stack Engineer, Full Stack Developer, Software Engineer, Software Developer, Web Engineer, Web Developer, Frontend Engineer, Frontend Developer, Backend Engineer, Backend Developer, Mobile Engineer, Mobile Developer, Android Engineer, Android Developer, iOS Engineer, iOS Developer, React Engineer, React Developer, React Native Engineer, React Native Developer, Node Engineer, Node Developer, Express Engineer, Express Developer, MongoDB Engineer, MongoDB Developer, MySQL Engineer, MySQL Developer, PostgreSQL Engineer, PostgreSQL Developer, TypeScript Engineer, TypeScript Developer, JavaScript Engineer, JavaScript Developer, HTML Engineer, HTML Developer, CSS Engineer, CSS Developer, SASS Engineer, SASS Developer, SCSS Engineer, SCSS Developer, Next Engineer, Next Developer, NextJS Engineer, NextJS Developer, Next.js Engineer, Next.js Developer" />

        </Head>
    );
}

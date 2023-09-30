/*
 * Copyright (c) 2023 [Muhammad Fiaz](https://github.com/muhammad-fiaz/portfolio)
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


import React, {useEffect, useState} from 'react';
import {Router} from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {Analytics} from '@vercel/analytics/react';
import {domAnimation, LazyMotion} from "framer-motion"
import SetGridGap from '../src/components/utils/set.grid'
import Layout from '../src/components/layout/layout'
import LoadingScreen from "../src/components/intro/splash";
// Global CSS
import "../node_modules/the-new-css-reset/css/reset.css"
import "@fontsource/fira-code/400.css"
import "@fontsource/fira-code/600.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"
import '../node_modules/devicon/devicon.min.css'
import '../assets/styles/css/variables.css'
import '../assets/styles/css/global.css'
import "../assets/styles/css/utils/splash.css";
import "../assets/styles/css/utils/chatbot.css";
import "../assets/styles/css/utils/backtotop.css";
import dynamic from "next/dynamic";
import "../assets/styles/css/sections/404.css";
import "../assets/styles/css/utils/anim.css";
const DevelopmentNotice = dynamic(() => import( "../src/components/dev/status"));
const BackToTop = dynamic(() => import("../src/components/utils/backtotop"));
const Chatbot = dynamic(() => import("../src/components/sections/index/chatbot"));


// NProgress configuration

NProgress.configure({showSpinner: false});
// NProgress start on route change

Router.events.on('routeChangeStart', () => {
    NProgress.start();
});
// NProgress stop on route change

Router.events.on('routeChangeComplete', () => {
    NProgress.done();
});
// NProgress stop on route change error

Router.events.on('routeChangeError', () => {
    NProgress.done();
});

interface MyAppProps {
    Component: React.FC;
    pageProps: any;
}

const MyApp: React.FC<MyAppProps> = ({Component, pageProps}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading ? (
                    <LoadingScreen/>
            ) : (
                <LazyMotion features={domAnimation}>
                    <Layout>

                            <Component {...pageProps} />
                        <DevelopmentNotice/>

                        <Chatbot/>
                        <Analytics/>
                        <SetGridGap/>
                    </Layout>
                    <BackToTop/>
                </LazyMotion>
            )}
        </>
    );
};

export default MyApp;

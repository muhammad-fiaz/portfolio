import {Head, Html, Main, NextScript} from 'next/document'
import Script from 'next/script';
import React from "react";
import TitleDocument from "./title.document";

export default function Document() {
	return (
		<Html lang="en">
			<TitleDocument/>
<Head>

	{/*theme*/}
	<Script id="theme.util.jsx" strategy="beforeInteractive" >
		{`
				let themeLocalStorage = localStorage.getItem('theme')
				let themeSystem       = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
				document.querySelector(':root').dataset.theme = themeLocalStorage ?? themeSystem
				`}
	</Script>

	{/* Google Analytics */}
	<Script async src="https://www.googletagmanager.com/gtag/js?id=G-SDJ0K1Y70X"></Script>
	<script
		dangerouslySetInnerHTML={{
			__html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag() {
                                dataLayer.push(arguments);
                            }
                            gtag('js', new Date());
                            gtag('config', 'G-SDJ0K1Y70X');
                        `
		}}
	/>
</Head>

			<body>
			<Main />
			<NextScript />
			</body>
		</Html>
	)
}

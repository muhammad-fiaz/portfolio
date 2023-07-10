import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';
import React from "react";

export default function Document() {
	return (
		<Html lang="en">
			<title>Muhammad Fiaz</title>
			<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
			<meta name="application-name" content="Muhammad Fiaz" />

			<Head>
				{/*
				Author: Muhammad Fiaz
                 GitHub: Visit the GitHub repository at https://github.com/muhammad-fiaz/muhammadfiaz.com/ for more details.
                 license: MIT License
                  */}

				<meta charSet="utf-8" />
	            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="theme-color" content="#000000" />
				<meta name="title" content="Muhammad Fiaz"/>
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
				<meta name="language" content="English"/>
				<meta name="revisit-after" content="1 days"/>
				<link rel="canonical" href="https://www.muhammadfiaz.com" />
				<meta name="license" content="MIT License" />

				<meta name="author" content="Muhammad Fiaz" />
				<meta
					name="description"
					content="Muhammad Fiaz - Designer, Developer, Full Stack. Passionate about programming, innovation, and shaping the future."
				/>

				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index, follow" />
				<meta name="bingbot" content="index, follow" />

				<meta
					name="description"
					content="Muhammad Fiaz - Full Stack Developer specializing in Cloud, DevOps, ML/AI, and Design. Passionate about programming, innovation, and shaping the future."
				/>
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/favicon.jpg" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.ico" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon.jpg" />
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
				<link rel="manifest" href="/manifest.json" />
				<meta property="og:title" content="Muhammad Fiaz" />
				<meta property="og:description" content="Muhammad Fiaz - Full Stack Developer specializing in Cloud, DevOps, ML/AI, and Design. Passionate about programming, innovation, and shaping the future." />
				<meta property="og:image" content="https://www.muhammadfiaz.com/img/fiaz-org.jpeg" />
				<meta property="og:url" content="https://www.muhammadfiaz.com" />
				<meta property="og:type" content="website" />
				<meta property="og:profile" content="https://github.com/muhammad-fiaz" />
				<meta property="og:site_name" content="Muhammad Fiaz" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@muhammadfiaz_" />
				<meta name="twitter:title" content="Muhammad Fiaz" />
				<meta name="twitter:description" content="Muhammad Fiaz - Designer, Developer, Full Stack. Passionate about programming, innovation, and shaping the future." />
				<meta name="twitter:image" content="https://www.muhammadfiaz.com/img/fiaz-org.jpeg" />
                				<meta name="twitter:creator" content="@muhammadfiaz_" />
				<meta name="twitter:domain" content="https://www.muhammadfiaz.com" />
				<script type="application/ld+json">
										{`
					{
					  "@context": "https://schema.org",
					  "@type": "Person",
					  "name": "Muhammad Fiaz",
					  "url": "https://www.muhammadfiaz.com",
					  "sameAs": [
						"https://github.com/muhammad-fiaz",
						"https://www.linkedin.com/in/muhammad-fiaz-"
					  ]
					}
					`}
				</script>





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

				{/* Google Adsense */}
				<script async
						src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2040560600290490"
						crossOrigin="anonymous"></script>  {/* use your own adsense id or else remove this line */}

				{/* Clarity Analytics */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
                            (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "hle8ty6om9");
                        `
					}}
				/>
			</Head>

			<body>
			<h1></h1>
			<Main />
			<NextScript />
			</body>
		</Html>
	)
}

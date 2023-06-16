import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<meta name="theme-color" content="#000000"/>
				<meta name="author" content="Muhammad Fiaz"/>
				<meta name="keywords"
					  content="Muhammad Fiaz, designer, developer,full stack developer,ux designer,programmer, portfolio, skills, projects, blog, fiaz"/>
				<meta name="robots" content="index, follow"/>
				<meta name="googlebot" content="index, follow"/>
				<meta name="bingbot" content="index, follow"/>
				<meta http-equiv="Content-Language" content="en"/>

				<meta name="description"
					  content="With a deep-rooted fascination for programming and computers from an early age, I have nurtured a lifelong passion in this field. Continuously driven by a thirst for knowledge and growth, my relentless pursuit of excellence empowers me to create innovative solutions and cultivate visionary ideas. Through my unwavering commitment to technological advancement, I aspire to make a profound impact and shape the future with transformative contributions."/>
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/favicon.jpg" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.ico" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon.jpg" />
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
				<link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>

			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
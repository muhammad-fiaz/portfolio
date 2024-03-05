const withPWA = require('next-pwa')({
	disable: process.env.NODE_ENV === 'development',

	dest: 'public',
	scope: '/',
	sw: 'service-worker.js', // Service worker file name
	register: true, // Register service worker

})

module.exports =  withPWA({

	webpack: (config) => {
		// Add your custom Webpack configurations here

		// Return the updated config
		return config;
	},
	//unoptimize: true, // if you want to export
	reactStrictMode: true,
	env: {
		dir: '/',
	},
	swcMinify: true,
	/*
Don't remove these this uses the protocol that are need to function properly
* https://nextjs.org/docs/pages/building-your-application/optimizing/images#adding-structured-data

 */
	images: {

		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.vercel.app',
				pathname: '/api/**'
			},
			{
				protocol: 'https',
				hostname: '**.cloudinary.com',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: '**.vercel.app',
				pathname: '?app=muhammadfiaz-com-git-main-muhammadfiaz.vercel.app'
			},
			{
				protocol: 'https',
				hostname: '**.shields.io',
				pathname: '/badge/**'
			},
			{
				protocol: 'https',
				hostname: '**.shields.io',
				pathname: '/github/**'
			},
			{
				protocol: 'https',
				hostname: '**.githubusercontent.com',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: '**.medium.com',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: '**.dev.to',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: 'github.com',
				pathname: '/muhammad-fiaz/portfolio/**',
			},

		],
	},

/*	output: {
		// Configure your export settings here,
		// For example, if you want to export to the "out" directory:
		directory: 'out',
	},
*/
	// https://nextjs.org/docs/messages/swc-disabled
	experimental: {
		forceSwcTransforms: true,
	},


});

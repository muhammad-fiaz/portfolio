module.exports = {
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		// Add your custom Webpack configurations here

		// Return the updated config
		return config;
	},
	optimize: true, // disable if you want to export
	reactStrictMode: true,
	env: {
		dir: '/',
	},
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.vercel.app',
				pathname: '/api/**'
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

		],
	},
	exportPathMap: async function () {
		return {
			'/': { page: '/' },
		};
	},
	output: {
		// Configure your export settings here
		// For example, if you want to export to the "out" directory:
		directory: 'out',
	},
}

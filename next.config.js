
module.exports = {
	reactStrictMode: true,
	env: {
		dir: '/',
	},
	swcMinify: true,
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.vercel.app',
				pathname: '/api/**',
			},
			{
				protocol: 'https',
				hostname: '**.vercel.app',
				pathname: '?app=muhammadfiaz-com-git-main-muhammadfiaz.vercel.app',
			},
			{
				protocol: 'https',
				hostname: '**.shields.io',
				pathname: '/badge/**',
			},
			{
				protocol: 'https',
				hostname: '**.shields.io',
				pathname: '/github/**',
			},
			{
				protocol: 'https',
				hostname: '**.githubusercontent.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: '**.medium.com',
				pathname: '/**',
			},
		],
	},
	exportPathMap: async function () {
		return {
			'/': { page: '/' },
		};
	},
	output: 'standalone',

}

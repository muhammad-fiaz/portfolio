
module.exports = {
	reactStrictMode: true,
	env: {
		dir: '/',
	},
	swcMinify: true,

	exportPathMap: async function () {
		return {
			'/': { page: '/' },
		};
	},
	output: 'standalone',

}


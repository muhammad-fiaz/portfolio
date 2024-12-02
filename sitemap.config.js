/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://muhammadfiaz.com",
  generateRobotsTxt: false, // due to already generate by nextjs
  generateIndexSitemap: true, // (optional)
  additionalSitemaps: [
    // You can add any additional sitemaps here if needed
  ],
  transform: async (config, path) => {
    // Return transformed config with a priority of 1 for all URLs
    return {
      loc: path, // URL of the page
      priority: 1, // Set the priority to 1
      changefreq: 'daily', // You can customize the frequency if needed
    };
  },
};

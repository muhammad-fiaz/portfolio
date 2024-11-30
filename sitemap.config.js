/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://muhammadfiaz.com",
  generateRobotsTxt: false, // due to already generate by nextjs
  generateIndexSitemap: true, // (optional)
}
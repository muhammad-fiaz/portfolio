export function validateEnvVars() {
  const requiredEnvVars = [
    'GITHUB_TOKEN',
    'GITHUB_SECRET',
    'GITHUB_ID',
    'HASHNODE_API_KEY',
    'HASHNODE_USERNAME'
  ];

  // Check if all required environment variables are set
  requiredEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
      console.error(`Error: Missing environment variable: ${envVar}`);
      process.exit(1); // Terminate application if a required env var is missing
    }
  });

  // Set optional environment variables with default values if not set
  process.env.ADSENSE_ID = process.env.ADSENSE_ID || ''; // not needed
  process.env.SITE_URL = process.env.SITE_URL || 'http://localhost:3000';
  process.env.NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET || 'default_nextauth_secret';
}

export function getEnvVars() {
  return {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    GITHUB_ID: process.env.GITHUB_ID,
    HASHNODE_API_KEY: process.env.HASHNODE_API_KEY,
    HASHNODE_USERNAME: process.env.HASHNODE_USERNAME,
    ADSENSE_ID: process.env.ADSENSE_ID,
    SITE_URL: process.env.SITE_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
  };
}

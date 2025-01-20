import { NextConfig } from 'next';
import { validateEnvVars } from '@/src/configs/envVars';

// Validate and assign default values to environment variables
validateEnvVars();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
        port: '',
        pathname: '/icons'
      },
      {
        protocol: 'https',
        hostname: 'github-profile-trophy.vercel.app',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'github-readme-streak-stats-seven-azure.vercel.app',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'github-contributor-stats.vercel.app',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'github-readme-activity-graph.vercel.app',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'api.daily.dev',
        port: '',
        pathname: '/devcards/v2/**'
      },
      {
        protocol: 'https',
        hostname: 'holopin.me',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
        port: '',
        pathname: '/api/wakatime'
      },
      {
        protocol: 'https',
        hostname: 'wakatime.com',
        port: '',
        pathname: '/**'
      }
    ],
    dangerouslyAllowSVG: true // Allow SVG images
  }
};

export default nextConfig;

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
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
        port: '',
        pathname: '/icons',
      },
    ],
    dangerouslyAllowSVG: true, // Allow SVG images
  },
};

export default nextConfig;

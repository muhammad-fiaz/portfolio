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
      }
    ]
  }
};

export default nextConfig;

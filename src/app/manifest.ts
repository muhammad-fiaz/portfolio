// app/manifest.ts
import type { MetadataRoute } from 'next';
import { siteConfig } from '@/src/configs/config';

// The manifest function returns a metadata object conforming to the MetadataRoute.Manifest type
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.author, // Use author name from the config
    short_name: siteConfig.author_surname, // Short name for the app
    description: siteConfig.metadata.description, // Use description from siteConfig
    start_url: '/', // The starting URL of the app when launched
    display: 'standalone', // Display mode of the app
    background_color: '#ffffff', // Background color for the app
    theme_color: '#000000', // Theme color for the app
    icons: [
      {
        src: '/favicon/favicon.ico', // Path to the icon file
        sizes: '64x64 32x32 24x24 16x16', // Icon sizes
        type: 'image/x-icon', // Icon type
        purpose: 'any' // Valid purpose 'any'
      },
      {
        src: '/favicon/favicon.jpg', // Path to the icon file
        sizes: '192x192', // Icon size
        type: 'image/png', // Icon type
        purpose: 'maskable' // Valid purpose 'maskable'
      },
      {
        src: '/favicon/favicon.jpg', // Path to the icon file
        sizes: '512x512', // Icon size
        type: 'image/png', // Icon type
        purpose: 'maskable' // Valid purpose 'maskable'
      }
    ]
  };
}

/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['images.pexels.com', 'images.unsplash.com']
  },
  typescript: {
    ignoreBuildErrors: true
  },
  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.join(__dirname, 'node_modules/tinymce'),
            to: path.join(__dirname, 'public/assets/libs/tinymce')
          }
        ]
      })
    );
    return config;
  }
};

module.exports = nextConfig;

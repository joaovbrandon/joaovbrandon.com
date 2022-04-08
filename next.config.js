/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: 'akamai',
    path: '',
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;

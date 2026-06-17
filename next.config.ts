/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**',
      },
      // If you are using the other domain from your previous code:
      {
        protocol: 'https',
        hostname: 'sparkleandglow.co.in',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
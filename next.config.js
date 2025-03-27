/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/DonyayeMatloob', // اضافه شد
  assetPrefix: '/DonyayeMatloob/', // اضافه شد
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
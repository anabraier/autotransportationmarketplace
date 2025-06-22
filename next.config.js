// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true, // ✅ disables eslint breaking the build
    },
  };
  
  module.exports = nextConfig;
  
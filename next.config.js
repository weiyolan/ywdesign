/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable:process.env.NODE_ENV === 'development'
  },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  i18n: {
      locales: ['en', 'fr'],
      defaultLocale: 'en',
  },
  

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  reactStrictMode: true,
});

const nextConfig = {
  
}

// module.exports = nextConfig

/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable:process.env.NODE_ENV === 'development'

});

const nextConfig = withPWA({
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  i18n: {
      locales: ['en', 'fr'],
      defaultLocale: 'en',
      
      // domains: [
      //   {
      //     // Note: subdomains must be included in the domain value to be matched
      //     // e.g. www.example.com should be used if that is the expected hostname
      //     domain: 'ywdesign.co',
      //     defaultLocale: 'en',

      //   },
      //   {
      //     domain: 'ywdesign.ch',
      //     defaultLocale: 'fr-CH',
      //     locales: ['fr'],
      //   },
      // ]

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
})

module.exports = nextConfig


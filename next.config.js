/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["tr", "en"],
    defaultLocale: "tr",
    localeDetection: true,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  i18n: {
    locales: ["tr", "en"],
    defaultLocale: "tr",
    localeDetection: false, // <-- MUTLAKA false
  },
};

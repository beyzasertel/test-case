/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./styles/**/*.{css,scss}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/bg-hero-section.svg')",
      },
    },
  },
  plugins: [],
};

export default config;

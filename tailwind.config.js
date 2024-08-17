/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'clash': ['Clash Display', 'sans-serif'],
      },
      backgroundImage: {
        wrapper: "url(/assets/images/Frame.svg)",
        grid: "url(/assets/images/Grid.svg)",
      },
    },
  },
  plugins: [],
};

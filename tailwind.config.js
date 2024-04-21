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
        airnt: ["var(--font-airnt)"],
        febre_black: ["var(--font-febre_black)"],
        agency_fb: ["var(--font-agency_fb)"],
        
      },
    },
  },
  plugins: [],
};

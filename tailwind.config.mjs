/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        cream: "#f7f3ed",
        sand: "#ddd4c8",
        accent: "#7a5c45"
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"]
      },
      maxWidth: {
        content: "1200px"
      },
      boxShadow: {
        soft: "0 12px 30px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};
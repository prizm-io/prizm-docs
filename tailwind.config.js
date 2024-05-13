/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: "fadeIn 3s ease-in-out 1 normal forwards",
        "fade-delay": "fadeIn 3s ease-in-out 1s 1 normal forwards",
        "fade-delay-text": "fadeIn 3s ease-in-out 1.5s 1 normal forwards",
      },
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
      colors: {
        "primary-background": "rgb(3, 4, 32)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"], // Add your font here
        ubuntu: ["Ubuntu", " sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        qwitcher: ["Qwitcher Grypen", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};

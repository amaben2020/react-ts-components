/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      containers: {
        "2xs": "16rem",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};

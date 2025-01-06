/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xs: "124px",
        md: "50px",
        lg: "78px",
        xl: "98px",
      },
    },
    extend: {
      colors: {
        "primary": "var(--primary)",
        "secondary-black": "var(--secondary-black)",
      },
    },
  },
  plugins: [],
};

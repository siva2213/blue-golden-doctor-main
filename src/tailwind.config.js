// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
  // mode: "jit", // Just-in-Time mode for faster builds
  // purge: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Purge unused styles in production
  darkMode: false, // or 'media' or 'class' - Enables dark mode utilities
  theme: {
    extend: {
      // You can extend or override the default theme here
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  variants: {
    extend: {
      // You can extend or override the default variants here
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};

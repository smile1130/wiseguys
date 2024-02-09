module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgPrimary: "#0D0D0D",
      },
      fontSize: {
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        24: "24px",
        32: "32px",
        36: "36px",
        64: "64px",
      },
      height: {
        custom: "calc(100vh - 72px)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

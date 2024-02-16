module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgPrimary: "#0D0D0D",
      },
      fontSize: {
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        24: "24px",
        32: "32px",
        36: "36px",
        40: "40px",
        64: "64px",
      },
      height: {
        custom: "calc(100vh - 72px)",
      },
      width: {
        navLine: "calc(100% - 48px)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

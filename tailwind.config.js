const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    colors: {
      primary: {
        DEFAULT: "#0D141C",
        pale: "#7C7C7C",
      },
      secondary: {
        DEFAULT: "#0D78F2",
        pale: "#4A709C",
      },
      paleBg: "#E8EDF5",
      warningRed: "#E11717",
      white: "#FFFFFF",
      transparent: "#FFFFFFFF",
    },
    fontFamily: {
      pextralight: ["PlusJakartaSans-ExtraLight", "sans-serif"],
      plight: ["PlusJakartaSans-Light", "sans-serif"],
      pregular: ["PlusJakartaSans-Regular", "sans-serif"],
      pmedium: ["PlusJakartaSans-Medium", "sans-serif"],
      psemibold: ["PlusJakartaSans-SemiBold", "sans-serif"],
      pbold: ["PlusJakartaSans-Bold", "sans-serif"],
      pextrabold: ["PlusJakartaSans-ExtraBold", "sans-serif"],
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".button": `h-13 w-full flex text-center align-middle items-center justify-center rounded-xl bg-secondary`,
        ".text-button": `text-base text-white font-pbold text-center`,
      });
    }),
  ],
};

// tailwind.config.js
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      boxShadow: {
        md: "0px 0px 8px -4px rgba(3,27,78,0.61)",
      },
      fontFamily: {
        ProximaNova: ['ProximaNova-Regular', 'sans-serif'], // Fallback to sans-serif
      },
      colors: {
        primary: "#3669E9",
        hoverPrimary:"#235ae5",
        blue:"#031B4E"
      },
    },
  },
  plugins: [],
};

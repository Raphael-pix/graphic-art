module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:{
          "pink":"#FBC1D4",
          "pink-dark":"#F9B8CB",
        },
        secondary:{
          "yellow":"#FED25C",
          "purple":"#C2ABFD",
          "purple-light":"#BBA0FD",
          "black-grey":"#1B1B1B",
        },
        neutral: {
          "black": "#1E1E1E",
          "white":"#FFFFFF",
          "grey":"#374151",
        }

      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        standard: ["Old Standard TT", "serif"],
        cabin:["Cabin", "serif"],
        tinos:["Tinos", "serif"],
      },
    },
  },
  plugins: [],
};

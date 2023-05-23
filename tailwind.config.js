module.exports = {
  content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.tsx", "./src/**/*.ts"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#121212",
          secondary: "#1f1f1f",
          card: "#1c1e20",
          "text-primary": "#dadada",
          "text-secondary": "#878787",
          "text-third": "#70747b",
          text:{
            primary: "#dadada",
            secondary: "#878787",
            third: "#70747b",
          }

        },
        light: {
          primary: "#ffffff",
          secondary: "#e8eaeb",
          card: "#ebedef",
          text:{
            primary: "#060607",
            secondary: "#6b7480",
            third: "#838c98",
          }
        },
      },

    
    },
  },
  variants: {
    extend: {
      display: ["dark"],
      blur: ["group-hover"]
    },
  },
  plugins: [],
};

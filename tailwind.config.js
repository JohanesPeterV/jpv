module.exports = {
  purge: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.tsx",
    "./src/**/*.ts"
],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        dark : {
          primary:'#121212',
          secondary:'#1f1f1f',
          card:'#1c1e20',
          indigo:{
            trans:'#252731'
          },
          'text-primary':'#dadada',
          'text-secondary':'#878787',
          'text-third':'#70747b'
        },
        light : {
          primary:'#ffffff',
          secondary:'#e8eaeb',
          card:'#d2d4d5',
          indigo:{
            trans:'#f6f7ff'
          },
          'text-primary':'#060607',
          'text-secondary':'#6b7480',
          'text-third':'#838c98'
        },
      }
    },
  },
  variants: {
    extend: {
      display:['dark']
    },
  },
  plugins: [],
}

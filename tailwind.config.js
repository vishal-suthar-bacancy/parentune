
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'white': '#ffffff',
          'primary': '#FF6464',
          'light':"#EDF7FA",
          'dark':"#21243D",
          'link':"#00A8CC",
          'secondary':"#142850",
          'dark-70':"#8695A4",
          'gray':'#E0E0E0'
        },
        fontSize:{
            "5xl":'44px',
            "4xl":'36px',
            "3xl":'32px',
            "2xl":'24px',
            "heading2":"30px",
            "heading3":"26px",
            "heading4":"22px",
            'xl':"20px",
            "lg":"18px"
        },
        lineHeight:{
            "10":"48px",
            "8":"36px",
        },
        fontFamily: {
            sans: ['"Heebo"', 'sans-serif']
        },
      
        },
      },
    plugins: [
        
    ],
  }
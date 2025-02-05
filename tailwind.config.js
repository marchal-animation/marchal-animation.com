module.exports = {
  content: ['./src/**/*.{njk,md,html}', './src/**/*.svg'],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  theme: {
    extend: {
      colors: {
        'primary-light' : '#fe387aff',
        'primary-dark' : '#f50152ff',
        'infodark' : '#f68aaeff',
      },
      transitionTimingFunction: {
        'punch': 'cubic-bezier(0.11, 0.54, 0.6, 1.67)',
      },
      keyframes: {
        floating: {
          '0%, 100%':{ transform: 'translateY(-5%)'},
          '50%':{ transform: 'translateY(5%)'},

        }
      },
      animation: {
        floating: 'floating 1s ease-in-out infinite'
      }
    }
  },
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
    {
      risutheme: {
        "primary" : "fe236cff",
        "info" : "f5a3beff",
        "secondary" : "24b0a9ff",
        "success" : "8edbd7ff",
        "accent" : "ffff8dff",
        "neutral" : "ecececff",
        "base-100": "#ffffff",
      }
    }
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
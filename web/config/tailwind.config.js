/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      clipPath: {
        parallelogram: 'polygon(13% 0, 100% 0, 71% 85%, 10% 100%)',
      },
      backgroundImage: {
        'act-pattern': "url('../public/BackgroundActs.png')",
        'cloud-pattern': "url('../public/Mediamodifier-Design.svg')",
        'front': "url('../public/barracks-carlow_0688.jpg')",
      },
      fontFamily: {
        custom: ['CustomFont', 'sans'],
      },
    },
  },
  plugins: [],
}

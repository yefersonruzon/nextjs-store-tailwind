/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient-green': 'radial-gradient(circle, rgba(0, 247, 0, 0.726) 0%, #ffffff00 80%)',
        'radial-gradient-purple': 'radial-gradient(circle, rgba(74,68,255,1) 0%, #ffffff00 80%)'
      },
      colors:{
        'primary': '#00F700'
      }
    },
  },
  plugins: [],
}

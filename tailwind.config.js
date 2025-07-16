/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'gray': {
          50: '#F2F2F2',
          100: '#DADADA',
          500: '#474747'
        },
        // Pink/Red palette
        'custom-pink': {
          50: '#FFDAD8',
          300: '#FF6D91',
          400: '#FF6D91',
          500: "#DE4841"
        },
        // Light blue palette
        'light-blue': {
          50:  '#ECF1F9',
          100: '#8DADDD',
          400: '#9ED7FD',
          500: '#2C527D',
          600: '#5686E1',
        },
        // Royal blue palette
        'royal-blue': {
          600: '#4176c7',
          700: '#2C527D'
        },
        'green': {
          50: '#DFFFD7',
          400: '#469D30',
        }
      }
    },
  },
  plugins: [],
}
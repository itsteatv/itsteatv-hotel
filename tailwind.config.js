/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
      'Poppins': ['"Poppins"', 'sans-serif'],
      'Ubuntu': ['Ubuntu', 'sans-serif'],
    },
    extend: {
      screens: {
        "mobile": { "min": "9.375em", "max": "48.75em" },
        "bookingTable": { "min": "9.375em", "max": "56.25em" },
        "filteringDiscount": { "min": "9.375em", "max": "40em" },
        "settingForm": { "min": "9.375em", "max": "37.5em" },
        "extraSmall": { "min": "9.375em", "max": "28.125em" },
        "singleBookingMQ": { "min": "9.375em", "max": "21.25em" },
        "dashboardStats": { "min": "9.375em", "max": "43.75em" },
      },
      fontSize: {
        clamp: "clamp(0.75rem, 2.3vw + 0.5rem, 1.875rem)",
        dateFont: "clamp(0.5rem, 1.6vw + 0.3rem, 1rem)",
        singleBookingMQFont: "clamp(0.5rem, 4.2vw + 0.1rem, 1rem)",
        singleBookingMQBig: "clamp(0.5rem, 21.1vw - 1.5rem, 3rem)",
      }
    },
  },
  darkMode: 'class',
  plugins: [
    require('flowbite/plugin'),
    require('preline/plugin'),
  ]
}
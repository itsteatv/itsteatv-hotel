/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      screens: {
        "mobile": { "min": "15.625em", "max": "48.75em" },
        "filteringDiscount": { "min": "9.375em", "max": "40em" },
        "settingForm": { "min": "9.375em", "max": "37.5em" },
      },
      fontSize: {
        clamp: "clamp(0.75rem, 2.3vw + 0.5rem, 1.875rem)"
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('preline/plugin'),
  ]
}
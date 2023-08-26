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
        "mobile": { "min": "15.625em", "max": "43.75em" }
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('preline/plugin'),
  ]
}
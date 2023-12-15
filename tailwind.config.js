/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "node_modules/preline/dist/*.js",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin'),
    require('@sira-ui/tailwind'),
  ],
}

// With npm

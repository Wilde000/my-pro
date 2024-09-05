/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    color: {
      transparent:'transpsrent',
      current: 'currentColor',
      DEFAULT : '#2C517E',
      'purple' : '#7B95DA'
    },
    extend: {},
  },
  plugins: [],
}


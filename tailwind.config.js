/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homeSection3': "url('/src/assets/assets/home/chef-service.jpg')",
        'homeSection5': "url('/src/assets/assets/home/featured.jpg')",
       
      }
    }
  },
  plugins: [daisyui],
}


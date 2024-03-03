export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "primary-text-color": "var(--primary-text-color)",
        "primary-link-color": "var(--primary-link-color)",
        "secondary-btn-color": "var(--secondary-btn-color)" 
      },
    },
  },
  plugins: [],
}

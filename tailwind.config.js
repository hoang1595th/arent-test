/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#FFFFFF", // ホワイト

        primary: {
          300: "#FFD93B", // プライマリー / 300
          400: "#FF924C", // プライマリー / 400
          500: "#E16A00", // プライマリー / 500
        },

        secondary: {
          300: "#7EF0DD", // セカンダリー / 300
        },

        dark: {
          500: "#4A4A4A", // ブラック / 500 (text, header, footer)
          600: "#1E1E1E", // ブラック / 600 (background)
        },

        gray: {
          400: "#808080", // グレー / 400
        },

        gradient: {
          "primary-300-400": ["#FFD93B", "#FF924C"], 
        },
      },
      fontFamily: {
        sans: ['NotoSansJP', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        jp: ['NotoSansJP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
   fontSize: {
        'xs-tiny': '0.65rem',    // 10.4px
        'xs-small': '0.75rem',   // 12px
        'xs-base': '0.875rem',   // 14px
      },
  plugins: [],
}


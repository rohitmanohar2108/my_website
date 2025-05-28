/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dm: ['"DM Sans"', "sans-serif"],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        rotate: "rotate 6s linear infinite",
        "radar-spin": "radar-spin 3s linear infinite",
        "border-glow": "border-glow 5s linear infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "radar-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "border-glow": {
          "0%": {
            "--angle": "0deg",
          },
          "100%": {
            "--angle": "360deg",
          },
        },
      },
    },
  },
  plugins: [],
};

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
        "spin-slow" : 'spin 5s linear infinite',
        spotlight: "spotlight 2s ease .75s 1 forwards",
         'slide-x': 'slideX 2s ease-in-out infinite',
        
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
          slideX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-50px)' }, // you can adjust the distance
        },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};

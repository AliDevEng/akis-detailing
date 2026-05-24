/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#070708",
          900: "#0c0c10",
          850: "#111116",
          800: "#1a1a22",
          700: "#262630",
          600: "#3a3a47",
        },
        ember: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
        },
      },
      backgroundImage: {
        "sunset-gradient":
          "linear-gradient(135deg, #fbbf24 0%, #fb923c 35%, #f43f5e 100%)",
        "sunset-soft":
          "linear-gradient(135deg, rgba(251,191,36,0.18) 0%, rgba(251,146,60,0.18) 50%, rgba(244,63,94,0.18) 100%)",
        "grid-fade":
          "linear-gradient(180deg, rgba(7,7,8,0) 0%, rgba(7,7,8,1) 85%)",
      },
      boxShadow: {
        ember: "0 25px 80px -20px rgba(251,146,60,0.35)",
        "ember-sm": "0 10px 30px -10px rgba(251,146,60,0.4)",
        "inner-glow": "inset 0 1px 0 0 rgba(255,255,255,0.06)",
      },
      animation: {
        "spin-slow": "spin 18s linear infinite",
      },
      keyframes: {},
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#38bdf8",
        accent: "#a78bfa",
        darkbg: "#020617",
        glass: "rgba(255,255,255,0.12)",
      },
      boxShadow: {
        neon: "0 0 30px rgba(56,189,248,0.6)",
        glass: "0 25px 60px rgba(0,0,0,0.5)",
        insetGlass: "inset 0 0 25px rgba(255,255,255,0.08)",
      },
      backdropBlur: {
        xl: "20px",
      },
      borderRadius: {
        xl: "20px",
      },
    },
  },
  plugins: [],
};

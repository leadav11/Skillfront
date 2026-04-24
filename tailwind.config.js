/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
  theme: {
    extend: {
      animation: {
        neonOrange: "neonOrangeBlink 1.5s infinite alternate", // Nueva animación naranja
        neonFlicker: "neonFlicker 1.5s infinite alternate",
        move: "moveBackground 30s linear infinite",
      },
      textShadow: {
        neon: "0 0 3px #ff0068, 0 0 6px #ff0068, 0 0 12px #ff0068, 0 0 24px #ff00ff, 0 0 48px #ff00ff",
      },
      fontFamily: {
        arcade: ['Arcade Gamer', 'sans-serif'],
        bree: ['Bree Serif', 'sans-serif'],
        abel: ['Abel Regular', 'sans-serif'], 
        ibm: ['IBM Plex Sans','sans-serif'],
        fredoka: ['"Fredoka"', 'sans-serif'],
        bubblegum: ['"Bubblegum Sans"', 'sans-serif'],
      },
      colors: {
        blanco: "#FFFFFF",
        grisClaro: "#F2F2F2",
        amarilloClaro: "#FFD700", // Color del título
        naranjaBrillante: "#FFA500", // Color del neón
        azulClaro: "#ADD8E6",
        celeste: "#00BFFF",
        negroOscuro: "#000000",
      },
    },
    keyframes: {
      neonOrangeBlink: { // Nueva animación naranja brillante
        "0%, 100%": { textShadow: "0 0 4px #FFA500, 0 0 6px #FFA500" },
        "80%": { textShadow: "0 0 8px #FFA500, 0 0 12px #FFA500" },
      },
      moveBackground: {
        "0%": { backgroundPosition: "0% 0%" },
        "100%": { backgroundPosition: "100% 100%" },
      },

    },
  },
  plugins: [require("tailwindcss-textshadow")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bannerBiblioteca: "url(/section-background-biblioteca.png)",
        bannerGrupoMusical: "url(/section-background-grupo-musical.png)",
      },
      colors: {
        primary: { DEFAULT: "#04b468" },
      },
    },
  },
  plugins: [],
};

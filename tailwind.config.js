/** @type {import('tailwindcss').Config} */
export default {
  content: [ // deternina quais arquivos o tailwind analisará para gerar suas classes css
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { // aqui pode-se estender ou modificar o tema padrão
    extend: {},
  }, // aqui instala-se plugins personalizados do Tailwind
  plugins: [],
}
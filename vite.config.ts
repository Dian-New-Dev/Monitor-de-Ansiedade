import { defineConfig } from 'vite' // importa função defineconfig, que configura uma tipagem para o vite
import react from '@vitejs/plugin-react' // importa o plugin react, para o vite entender JSX/TSX

// https://vitejs.dev/config/
export default defineConfig({ // oferece tipagem e suporte ao autocompletar do TS
  plugins: [react()], // define os plugins usados, aqui nio caso, react
})

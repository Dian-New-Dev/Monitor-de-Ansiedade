import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')!).render( // o ! é ts
<React.StrictMode>
    <App />
</React.StrictMode>,
)

// Strictmode = ferramenta do React para controle de erros:
    // - componentes com efeitos colaterias iniesperados;
    // - Uso de APIs obsoletas
    // - Problemas de renderização
import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent';

//"React.FC" = tipagem para componentes funcionais, incluindo props e children
const App: React.FC = () => {
  return ( //retorna JSX, pois é código HTML dentro de arquivo JS
    <div>
      <header>
        <HeaderComponent />
      </header>
      <main>
        <MainComponent />
      </main>
    </div>
  );
};

export default App;
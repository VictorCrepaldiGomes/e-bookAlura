import React from 'react';
import './App.css';
import Icones from './componentes/Icones/Icones';
import Lancamentos from './componentes/Lancamentos/Lancamentos';
import Logo from './componentes/Logo/Logo';
import Pesquisa from './componentes/Pesquisa/Pesquisa';
import Titulo from './componentes/Titulo/Titulo';
import OpcoesHeader from './OpcoesHeader/Opcoes';







function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <OpcoesHeader />
        <Icones />
        

      </header>

      
      <Pesquisa />
      <Titulo />
      <Lancamentos />
      
      
      




    </div>
  );
}

export default App;
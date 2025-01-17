import './App.css';
import Icones from './componentes/Icones/Icones';
import Logo from './componentes/Logo/Logo';
import Pesquisa from './componentes/Pesquisa/Pesquisa';
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



    </div>
  );
}

export default App;
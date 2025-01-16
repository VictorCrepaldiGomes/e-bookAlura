import './App.css';
import Icones from './componentes/Icones/Icones';
import Logo from './componentes/Logo/Logo';
import OpcoesHeader from './OpcoesHeader/Opcoes';





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <OpcoesHeader />
        <Icones />
      </header>
    </div>
  );
}

export default App;
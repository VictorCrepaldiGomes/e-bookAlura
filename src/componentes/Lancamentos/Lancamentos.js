import './Lancamentos.css';
import { livros } from './LancamentosLivros';
import imagemLivro from '../../imagens/livro2.png' 
import Recomendacao from '../Recomendacao/Recomendacao';

function Lancamentos() {

  return (

    <section className="section">

      <div className="container">
        {livros.map((livro) => (
          <div key={livro.id}>
            <img src={livro.src} alt={livro.nome} />
            <p>{livro.nome}</p>
          </div>
        ))}
      </div>
      <div>
        <Recomendacao 
        titulo="Talvez você tenha interesse por isto:"
        subtitulo="dads"
        descricao="dajsdad"
        imagem={imagemLivro}/>
        
      </div>

    </section>
  );
}

export default Lancamentos;
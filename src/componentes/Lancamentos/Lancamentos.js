import './Lancamentos.css';
import { livros } from './LancamentosLivros';

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
    </section>
  );
}

export default Lancamentos;
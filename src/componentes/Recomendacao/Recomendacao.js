import './Recomendacao.css';

function Recomendacao({ titulo, subtitulo, descricao, imagem }) {
  return (
    <div className="card">
      <div>
        <h3 className="titulo">{titulo}</h3>
        <h4 className="subtitulo">{subtitulo}</h4>
        <p className="descricao">{descricao}</p>
      </div>
      <div>
        <img className="img-livro" src={imagem}  alt={titulo}/>
        <button className="botao">Saiba mais</button>
      </div>
    </div>
  );
}

export default Recomendacao;
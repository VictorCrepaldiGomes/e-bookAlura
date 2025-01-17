import { useState } from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';
import { livros } from './PesquisaLivros';

const PesquisaContainer = styled.div`
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Titulo = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const LivroCard = styled.div`
  background-color: #FFF;
  color: #000;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 150px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const LivroImagem = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  transition: transform 0.2s;

  ${LivroCard}:hover & {
    transform: scale(1.05);
  }
`;

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  return (


    <PesquisaContainer>
      <section className='Pesquisa'>
        <Titulo>Já sabe por onde começar?</Titulo>
        <Subtitulo>Encontre o livro que deseja na estante.</Subtitulo>
        <Input 

        placeholder='Digite aqui' 
        onChange={evento => {
          const textoDigitado = evento.target.value;
          if (textoDigitado === '') {
          setLivrosPesquisados([]);

        } else {

          const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado));
          setLivrosPesquisados(resultadoPesquisa);
          
        }
            
          }}
        />
        
        <ResultadoContainer>
          {livrosPesquisados.map(livro => (
            <LivroCard key={livro.id}>
              <p>{livro.nome}</p>
              <LivroImagem src={livro.src} alt={livro.nome} />
            </LivroCard>
          ))}
        </ResultadoContainer>
      </section>
    </PesquisaContainer>
  );
}

export default Pesquisa;
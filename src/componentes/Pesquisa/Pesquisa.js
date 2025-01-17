import styled from 'styled-components';
import Input from '../Input/Input';

const PesquisaContainer = styled.div`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
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

function Pesquisa() {
  return (
    <PesquisaContainer>
      <section className='Pesquisa'>
        <Titulo>Já sabe por onde começar?</Titulo>
        <Subtitulo>Encontre o livro que deseja na estante.</Subtitulo>
        <Input placeholder='Digite aqui' />
      </section>
    </PesquisaContainer>
  );
}

export default Pesquisa;
import React from 'react';
import { Link } from 'react-router-dom'
import './Opcoes.css';

const textoOpcoes = [
  { texto: 'Categorias', path: '/categorias' },
  { texto: 'Minha estante', path: '/estante' },
  { texto: 'Favoritos', path: '/favoritos' }
];

function OpcoesHeader() {
    return (
        <ul className="opcoes">
        {textoOpcoes.map((opcao) => (
          <li className='opcao' key={opcao.texto}>
            <Link to={opcao.path}>
              <p>{opcao.texto}</p>
            </Link>
          </li>
           

        ))}
        </ul>
    );
}

export default OpcoesHeader
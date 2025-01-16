import './Icones.css';
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';

const icones = [perfil, sacola]

function Icones () {
    return (
        <ul className='icones'>
        {icones.map((icone) => (
        <li className='iconezinho'><img src={icone} alt={icone}></img></li>
         ))}

      </ul>

    )
}

export default Icones
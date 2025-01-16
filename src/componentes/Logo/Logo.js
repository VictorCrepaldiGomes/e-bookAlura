import './Logo.css';
import logo from '../../imagens/logo.svg';

const Logo = () => {
    
    return (
        <div className='logo'>
        <img src={logo} 
        alt='logo' 
        className='ajuste'
        ></img>
        
        <p><strong>Alura</strong>Books</p>
        </div>
    )
}





export default Logo

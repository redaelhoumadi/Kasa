import logo from '../assets/logo_kasa.svg'
import '../styles/Header.scss'
import { Link } from 'react-router-dom'

function Header(){
    return (
        <header className='kasa_header container'>
        <img src={logo} alt="logo Kasa" className='logo_kasa'/>
        <nav className='kasa_nav'>
            <Link to="/">Accueil</Link>
            <Link to="/About">A Propos</Link>
        </nav>
        </header>
    )
}

export default Header
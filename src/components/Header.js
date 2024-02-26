import logo from '../assets/logo_kasa.svg'
import '../styles/Header.scss'
function Header(){
    return (
        <header className='kasa_header'>
        <img src={logo} alt="logo Kasa" />
        <nav className='kasa_nav'>
            <ul >
                <li><a href='#'>Accueil</a></li>
                <li><a href='#'>A Propos</a></li>
            </ul>
        </nav>
        </header>
    )
}

export default Header
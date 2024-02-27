import logo from '../assets/logo_kasa.svg'
import '../styles/Footer.scss'

function Footer(){
return (
    <footer className='footer_kasa'>
    <img className='logo_footer'src={logo} alt='logo kasa'></img>
    <h3>© 2024 Kasa. All rights reserved</h3>
    </footer>
)
}

export default Footer
import '../styles/Banner.scss'
import plage from '../assets/plage.jpg'
function Banner() {
    return (
        <div className="kasa_banner">
            <h1>Chez vous, partout et ailleurs</h1>
            <img src={plage}></img>
        </div>
    )
}

export default Banner
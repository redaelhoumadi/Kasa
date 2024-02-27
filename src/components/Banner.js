import '../styles/Banner.scss'

function Banner(props) {
    return (
        <div className="kasa_banner">
            <h1>{props.tittle}</h1>
            <img src={props.url} alt={props.alt}></img>
        </div>
    )
}

export default Banner
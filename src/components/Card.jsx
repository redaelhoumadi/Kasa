import '../styles/Annonces.scss'

function Card(props) {
    return (
        <a href={`/logement/${props.id}`}>
                <img src={props.cover} alt={props.title}></img>
                <h2 >{props.title}</h2>
                </a>
    )
}

export default Card
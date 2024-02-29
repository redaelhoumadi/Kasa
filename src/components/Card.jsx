import '../styles/Annonces.scss';
import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <Link to={`/logement/${props.id}`}>
            <img src={props.cover} alt={props.title} />
            <h2>{props.title}</h2>
        </Link>
    );
}

export default Card;



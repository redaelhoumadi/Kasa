import logements from '../data/logements'
import Collapse from '../components/Collapse'
import { useParams } from 'react-router-dom'
import Tags from '../components/Tags'
import Host from '../components/Host'
import '../styles/Logement.scss'
import Ratings from '../components/Ratings'
import Error from "../components/Error";

function Logements() {
    const { id } = useParams();

    // Recherchez le logement avec l'ID spécifié dans les paramètres de l'URL
    const myLogement = logements.find((logement) => logement.id === id);

    // Vérifiez si le logement existe
    if (!myLogement) {
        // Si l'ID spécifié ne correspond à aucun logement, affichez un message d'erreur
        return <Error />
    }

    // Si le logement existe, continuez le rendu du composant
    const firstName = myLogement.host.name.split(' ')[0];
    const lastName = myLogement.host.name.split(' ')[1];
    const hostAvatar = myLogement.host.picture;
    const logementTitle = myLogement.title;
    const logementLocation = myLogement.location;
    const logementDescription = myLogement.description;

    return (
        <div className='logement-contenair'>
            <div className='logement-host'>
                <div>
                    <h2 className='logement-title'>{logementTitle}</h2>
                    <h3 className='logement-location'>{logementLocation}</h3>
                    <Tags items={myLogement.tags}/>
                </div>
                <div>
                    <Host firstName={firstName} lastName={lastName} url={hostAvatar}/>
                    <Ratings ratingValue={myLogement.rating}/>
                </div>
            </div>
            <div className='descr-equi'>
                <div className='moite'>
                    <Collapse key={id} title="Description" content={logementDescription} />
                </div>
                <div className='moite'>
                    <Collapse key={id} title="Equipements" items={myLogement.equipments}/>
                </div>
            </div>
        </div>
    );
}

export default Logements;

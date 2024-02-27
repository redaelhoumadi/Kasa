import '../styles/Annonces.scss'
import logements from '../data/logements'

function Annonces(){
    return (
        <main className='annonces'>
            {logements.map((logement) => (
                <article className='card' key={logement.id}>
                <a href='#'>
                <img src={logement.cover} alt={logement.title}></img>
                <h2 >{logement.title}</h2>
                </a>
                </article>
            ))}
        
        </main>
    )
}

export default Annonces
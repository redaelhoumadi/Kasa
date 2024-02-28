import '../styles/Annonces.scss'
import logements from '../data/logements'
import Card from './Card'

function Annonces(){
    return (
        <main className='annonces'>
            {logements.map((logement) => (
                <article className='card' key={logement.id}>
                <Card title={logement.title} cover={logement.cover} id={logement.id}/>
                </article>
            ))}
        
        </main>
    )
}

export default Annonces
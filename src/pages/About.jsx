import montagne from '../assets/montagne.jpg'
import Banner from "../components/Banner"
function About() {
    return (
        <div className='container'>
            <Banner tittle='Nos valeurs' url={montagne} alt='montagne'/>
        </div>
    )
}

export default About
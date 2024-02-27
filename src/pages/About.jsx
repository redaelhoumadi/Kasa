import montagne from '../assets/montagne.jpg'
import Banner from "../components/Banner"
import Collapse from '../components/Collapse'
function About() {
    return (
        <div className='container'>
            <Banner tittle='Nos valeurs' url={montagne} alt='montagne'/>
            <Collapse />
        </div>
    )
}

export default About
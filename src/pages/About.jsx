import montagne from '../assets/montagne.jpg'
import Banner from "../components/Banner"
import Collapse from '../components/Collapse'
import aboutDatas from '../data/About.js'
function About() {
    return (
        <div className='container'>
            <Banner tittle='Nos valeurs' url={montagne} alt='montagne'/>
            <div className='main_about'>
            {aboutDatas.map((about) => (
                <Collapse key={about.id} title={about.title} content={about.content} />
            ))}
            </div>
            
            
        </div>
    )
}

export default About
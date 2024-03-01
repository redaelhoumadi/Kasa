import logements from '../data/logements'
import Collapse from '../components/Collapse'
import { useParams, useNavigate } from 'react-router-dom'
import Tags from '../components/Tags'
import Host from '../components/Host'
import '../styles/Logement.scss'
import React, { useEffect } from 'react';

const checkItemId = (id) => {
    const itemExists = logements.some(item => item.id === id);
    return itemExists;
  };

function Logements() {
    let { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const isValid = checkItemId(id);
        if(!isValid) {
            navigate("/error")
        }
    },[id,navigate])

    const myLogement = logements.find((logement) => logement.id === id);
    console.log(myLogement.equipments);
    const equipements = myLogement.equipments.map(equipement => equipement.equipments);
    //const equipements = myLogement.equipments
    console.log('equipements',equipements);
    const firstName = myLogement.host.name.split(' ')[0]
    const lastName = myLogement.host.name.split(' ')[1]
    const hostAvatar = myLogement.host.picture
    const logementTitle = myLogement.title
    const logementLocation = myLogement.location
    const logementDescription = myLogement.description
    


    return(
        <div className='logement-contenair'>
        <div className='logement-host'>
        <div>
        <h2 className='logement-title'>{logementTitle}</h2>
        <h3 className='logement-location'>{logementLocation}</h3>
        </div>
        <Host firstName={firstName} lastName={lastName} url={hostAvatar}/>
        </div>
        
        <Tags items={myLogement.tags}/>
        <div className='descr-equi'>
        <div className='moite'><Collapse key={id} title="Description" content={logementDescription} /></div>
        <div className='moite'><Collapse title="Equipements" items={myLogement.equipments}/></div>
        </div>
        
        </div>
        
    )
    
}

export default Logements



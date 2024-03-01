import '../styles/Host.scss';

function Host(props) {
    return (
        <div className='host-infos'><p className="host-name">{props.firstName}<br />{props.lastName}</p>
        <img className="host-image" src={props.url} alt={props.alt}/>
        </div>
        
    )

}

export default Host
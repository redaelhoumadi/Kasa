import '../styles/Collapse.scss';
import rowUp from '../assets/row_up.svg'
import List from './List';


function Collapse({items, title, content}) {

    return (
        <div className='collapse'>
        <div className='collapse_title'><h3>{title}</h3><img src={rowUp} alt='row up'/></div>
        <div className='collapse_content'><p>{content}</p>
        <List items={items}/>
    </div>
        </div>
        
    )
}

export default Collapse
import '../styles/Collapse.scss';
import rowUp from '../assets/row_up.svg'

function Collapse(props) {
    return (
        <div className='collapse'>
        <div className='collapse_title'><h3>{props.title}</h3><img src={rowUp}/></div>
        <div className='collapse_content'><p>{props.content}</p></div>
        </div>
    )
}

export default Collapse
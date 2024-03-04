import '../styles/List.scss'

function List({items}) {

    return ( 
        <ul>
      {items && items.map((item,index) => (
        <li key={index} >{item}</li>
      ))}
    </ul>  
    )
}

export default List
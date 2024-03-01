import '../styles/List.scss'

function List({items}) {

    return ( 
        <ul>
      {items && items.map((item) => (
        <li key={item.id}>{item}</li>
      ))}
    </ul>  
    )
}

export default List
import '../styles/Tags.scss'

function Tags({items}){
    
    return ( 
        <div className='tags-contnair'>
      {items && items.map((item) => (
        <span className="tags" key={item.id}>{item}</span>
      ))}
    </div>  
    )
}


export default Tags
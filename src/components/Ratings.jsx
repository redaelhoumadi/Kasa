import '../styles/Ratings.scss'

function Ratings(props){
    const ratingValue = props.ratingValue
    const range = [1, 2, 3, 4, 5]
    return(
        <span className='rating-contnair'>
            {range.map((rangeElem) =>
                ratingValue >= rangeElem ? <i className="fas fa-star full-star" key={rangeElem.toString()}></i> : <i key={rangeElem} className="fas fa-star empty-star"></i> 
            )}
        </span>
    )
    
}

export default Ratings
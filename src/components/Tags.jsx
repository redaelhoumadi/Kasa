import React from 'react';
import '../styles/Tags.scss';

function Tags({items}) {
    return (
        <div className='tags-contnair'>
            {items && items.map((item, index) => (
                <span key={index} className="tags">{item}</span>
            ))}
        </div>
    );
}

export default Tags;

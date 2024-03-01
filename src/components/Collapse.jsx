import React, { useState } from 'react';
import '../styles/Collapse.scss';
import List from './List';

function Collapse({ items, title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${isOpen ? 'open-collapse' : ''}`}>
            <div className='collapse_title' onClick={toggleCollapse}>
                <h3>{title}</h3>
                <i className={isOpen ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
            </div>
            {isOpen && (
                <div className='collapse_content'>
                    <p>{content}</p>
                    <List items={items} />
                </div>
            )}
        </div>
    );
}

export default Collapse;

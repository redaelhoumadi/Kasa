import '../styles/Carrousel.scss'
import prev from '../assets/previous.svg'
import next from '../assets/next.svg'

import React, { useState } from 'react';

const ImageCarousel = ({ pictures }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (pictures.length === 0) {
    return null;
  }

  if (pictures.length === 1) {
    return (
      <div className='logement-carrousel'>
        <img className='show' src={pictures[0]} alt="Single" />
        <p className='counter'>1 / 1</p>
      </div>
    );
  }

  return (
    <div className='logement-carrousel'>
      <img src={prev} className='prev' onClick={goToPrevious} alt='previus'/>
      <img className='show' src={pictures[currentImageIndex]} alt={`${currentImageIndex + 1}`} />
      <img src={next} className='next' onClick={goToNext} alt='next'/>
      <p className='counter'>{currentImageIndex + 1} / {pictures.length}</p>
    </div>
  );
};

export default ImageCarousel;

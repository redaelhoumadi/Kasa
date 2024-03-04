import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ pictures }) => {
  // Vérifie s'il n'y a qu'une seule image dans le carrousel
  const isSingleImage = pictures.length === 1;

  // Si une seule image est présente, ne pas afficher les boutons suivants/précédents
  if (isSingleImage) {
    return (
      <div>
        <img src={pictures[0]} alt="Single" />
      </div>
    );
  }

  return (
    <Carousel infiniteLoop stopOnHover showThumbs={false}>
      {pictures.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;

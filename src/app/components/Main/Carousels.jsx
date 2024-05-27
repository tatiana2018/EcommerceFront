import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import musicImage from '../../../public/images/music.jpg';
import shoppingImage from '../../../public/images/compras.png';
import comunityImage from '../../../public/images/comunidad.jpg';

export const Carousels = () => {
  return (
    <div className="carousel-container" style={{ height: '100vh', overflow: 'hidden' }}>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={musicImage}
            alt="First slide"
            style={{ height: '100%', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={shoppingImage}
            alt="Second slide"
            style={{ height: '100%', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={comunityImage}
            alt="Third slide"
            style={{ height: '100%', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;

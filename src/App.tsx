import React from 'react';
import 'core-js/es/symbol'
import Carousel from 'flat-carousel';


const images = [
  { src: 'some image' }
];


export function App() {
  return (
    <div className="App">
      <Carousel>
        {images.map((image, index) => (
          <div
            key={index}
            className="demo-item"
            style={{ backgroundImage: 'url(' + image.src + ')' }}
          />
        ))}
      </Carousel>
    </div>
  );
}


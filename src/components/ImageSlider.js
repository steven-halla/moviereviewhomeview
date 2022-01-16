import React, {useState} from 'react';
import {SliderData} from "./SliderData";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

export const ImageSlider = () => {
  const [current, setCurrent] = useState(0)
  const length = slides.length



  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

        {SliderData.map((slide, index) => {
         return <img src={slide.image} alt="aliens"/>

      })};
    </div>
  );
};

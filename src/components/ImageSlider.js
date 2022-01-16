import React from 'react';
import {SliderData} from "./SliderData";

export const ImageSlider = () => {
  return (
    <div>
      {SliderData.map((slide, index) => {
         return <img src={slide.image} alt="aliens"/>

      })};
    </div>
  );
};

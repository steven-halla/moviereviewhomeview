import React, {useState} from 'react';
import {SliderData} from "./SliderData";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import styled from "styled-components";

const ImageSliderDiv = styled.div`
  .slider {
    display: flex;
    position: relative;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
  
  .image {
    width: 1000px;
    height: 600px;
    border-radius: 10px;
  }
  
  .rightArrow {
    position: absolute;
    top: 50%;
    right: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }

  .leftArrow {
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }
`



export const ImageSlider = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;



  return (
    <ImageSliderDiv>
      <div className="slider">
        <FaArrowAltCircleLeft className="left-arrow" />
        <FaArrowAltCircleRight className="right-arrow" />

        {SliderData.map((slide, index) => {
          return <img src={slide.image} alt="aliens" className="image"/>

        })};
      </div>
    </ImageSliderDiv>

  );
};

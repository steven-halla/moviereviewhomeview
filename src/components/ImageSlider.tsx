import React, {FC, useState} from 'react';
import styled from "styled-components";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";
import {SliderData} from "./SliderData";

const StyledImageSlider = styled.div`
  
  *, *:before, *:after {
    overflow-x: hidden;
    box-sizing: border-box;
  }
  
  .slider {
    display: flex;
    position: relative;
    height: 50vh;
    justify-content: center;
    align-items: center;
    padding-top: 35px;
  }

  .image {
    width: 100%;
    height: 28vh;
  }

  
  
  .right-arrow {
    position: absolute;
    top: 50%;
    right: 0;
    left: 335px;
    margin: 0 auto;
    font-size: 3rem;
    color: white;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }
 
  
    .left-arrow {
      position: absolute;
      top: 50%;
      left: 0;
      right: 335px;
      margin: 0 auto;
      font-size: 3rem;
      color: white;
      z-index: 10;
      cursor: pointer;
      user-select: none;
    }
  
  

  .slide {
    opacity: 0;
    transition-duration: 1s;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }

  

  
`;

export interface SliderImage {
  image: string;
}


interface ImageSliderProps {
  slides: SliderImage[];
}

export const ImageSlider: FC<ImageSliderProps> = (props) => {
  const { slides } = props;

  const [current, setCurrent] = useState<number>(0);

  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if (slides.length <= 0) {
    return null;
  }

  return (
    <StyledImageSlider>
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>

        {SliderData.map((slide: SliderImage, index: number) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (
                <img src={slide.image} alt="aliens" className="image"/>
              )}
            </div>
          )
        })}
      </section>
    </StyledImageSlider>
  );
};

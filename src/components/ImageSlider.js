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
    width: 500px;
    height: 780px;
    border-radius: 10px;
  }
  
  .right-arrow {
    position: absolute;
    top: 50%;
    right: 32px;
    font-size: 3rem;
    color: white;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }

  .left-arrow {

    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: white;
    
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }
  
  .slide {
    opacity: 0;
    transition-duration: 1s ;
  }
  
  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }

  @media screen and (min-width: 601px) {
    .image {
      width: 1000px;
      height: 900px;
      border-radius: 11px;
    }
    
    @media screen and (min-width: 1100px) {
      .image {
        width: 1600px;
        height: 1500px;
        border-radius: 12px;
      }
    }

    @media screen and (min-width: 1600px) {
      .image {
        width: 2000px;
        height: 1555px;
        border-radius: 13px;
      }
    }

    @media screen and (min-width: 2100px) {
      .image {
        width: 3333px;
        height: 1666px;
        border-radius: 13px;
      }
    }
    }
  
`



export const ImageSlider = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ?  length - 1 : current - 1)
  }



  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }



  return (
    <ImageSliderDiv>
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>

        {SliderData.map((slide, index) => {

          return (
              <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (
                  <img src={slide.image} alt="aliens" className="image"/>
                )}
              </div>
            )
        })};
      </section>
    </ImageSliderDiv>

  );
};

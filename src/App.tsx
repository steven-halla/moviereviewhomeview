import React from 'react';
import styled from "styled-components";
import './App.css'
import {ImageSlider} from "./components/ImageSlider";
import {SliderData} from "./components/SliderData";
//
// const AppDiv = styled.div`
//
// `


export function App() {
  return (
    <div>

        <ImageSlider slides={SliderData}  />;


    </div>
  );
}


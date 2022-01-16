import React from 'react';
import styled from "styled-components";
import './App.css'
import {ImageSlider} from "./components/ImageSlider";
import {SliderData} from "./components/SliderData";
import {Header} from "./components/Header";
//
// const AppDiv = styled.div`
//
// `


export function App() {
  return (
    <div>
        <Header/>
        <ImageSlider slides={SliderData}  />;


    </div>
  );
}


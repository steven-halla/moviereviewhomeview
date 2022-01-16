import React from 'react';
import styled from "styled-components";
import {ImageSlider} from "./components/ImageSlider";
import {SliderData} from "./components/SliderData";

const AppDiv = styled.div`
  body {

  }
`


export function App() {
  return (
    <AppDiv>

        <ImageSlider slides={SliderData}  />;


    </AppDiv>
  );
}


import React from 'react';
import styled from "styled-components";
import {ImageSlider} from "./components/ImageSlider";

const AppDiv = styled.div`
  body {

  }
`


export function App() {
  return (
    <AppDiv>

        <ImageSlider  />;


    </AppDiv>
  );
}


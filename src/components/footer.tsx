import React, {FC} from 'react';

import styled from "styled-components";

const StyleFooterDiv = styled.div`
    
  .Footer-Container {
    height: 109px;
    width: auto;
    background-color: blue;
  }
  
  `

export const Footer: FC = (props) => {
      return(
        <StyleFooterDiv>


          <div className="Footer-Container">

          </div>


        </StyleFooterDiv>
      )
}

import React, {FC} from 'react';

import styled from "styled-components";

const StyleFooterDiv = styled.div`
    
  .Footer-Container {
    height: 209px;
    width: auto;
    background-color: skyblue;
  }
  
  .Social-Media-Container {

    height: 155px;
    width: 222px;
    background-color: lightgray;
  }
  
  `

export const Footer: FC = (props) => {
      return(
        <StyleFooterDiv>


          <div className="Footer-Container">
              <div className="Social-Media-Container">

              </div>
          </div>


        </StyleFooterDiv>
      )
}

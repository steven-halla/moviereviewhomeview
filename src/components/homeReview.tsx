import React, {FC} from 'react';

import styled from "styled-components";

const StyleHeaderDiv = styled.div`
  .tom-rotten-review {
    background-color: grey;
  }
`

export const HomeReview: FC = (props) => {

return (
  <StyleHeaderDiv>
    <p>Movie reviews in 150 characters or less</p>
    <p>This is what a tom rotten review looks like:</p>
    <div className="tom-rotten-review">
      <p>"One review takes up about 150 characters. This means your reviews will be short. At about 3 sentences and no more."</p>
    </div>



  </StyleHeaderDiv>
)
}

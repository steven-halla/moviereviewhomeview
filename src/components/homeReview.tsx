import React, {FC} from 'react';

import styled from "styled-components";

const StyleHeaderDiv = styled.div`
  .tom-rotten-review {
    background-color: grey;
    
    img {
      width: 98%;
      height: auto;
    }
  }
  
  .other-reviews {
    background-color: yellow;

    img {
      width: 98%;
      height: auto;
    }
  }
`

export const HomeReview: FC = (props) => {

return (
  <StyleHeaderDiv>
    <p>Movie reviews in 150 characters or less</p>
    <p>This is what a tom rotten review looks like:</p>
    <div className="tom-rotten-review">
      <p>Title: Aliens</p>
      <img src="http://robf.com.au/wp-content/uploads/2011/12/Aliens-A2S3-Briefing.png" alt="aliens"/>
      <p>Written by: Tom Hanks</p>
      <p>"One review takes up about 150 characters. This means your reviews will be short. At about 3 sentences and no more."</p>
    </div>

  </StyleHeaderDiv>
)
}

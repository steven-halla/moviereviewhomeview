import React, {FC} from 'react';

import styled from "styled-components";

const StyleHeaderDiv = styled.div`
  .tom-rotten-review {
   
    
    img {
      width: 98%;
      height: auto;
      padding-top: 5px;
    }
    
   
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;

  }
  
  .site-about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    padding-left: 4px;
  }
`

export const HomeReview: FC = (props) => {

return (
  <StyleHeaderDiv>
    <p>Movie reviews in 150 characters or less</p>
    <p>This is what a tom rotten review looks like:</p>
    <div className="tom-rotten-review">
      <p className="movie-title">Title: Aliens</p>
      <img src="http://robf.com.au/wp-content/uploads/2011/12/Aliens-A2S3-Briefing.png" alt="aliens"/>

    </div>

    <div className="site-about">
      <p>"One review takes up about 150 characters. This means your reviews will be short. At about 3 sentences and no more."</p>

      <p>Tom Rotten is a movie review website that is made for people that don't want to shift through pages upon pages of reviews.</p>
        <p>Sign up is fast and easy. <a href="">sign up</a></p>
    </div>

  </StyleHeaderDiv>
)
}

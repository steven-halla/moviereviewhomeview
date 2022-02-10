import React, {FC} from 'react';

import styled from "styled-components";

const StyleHeaderDiv = styled.div`
  .tom-rotten-review {
    margin-top: -40px;
    img {
      width: 100%;
      height: auto;
      padding-top: 15px;
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
    padding-left: 5px;
  }
  
  .home-signup-link {
    padding-left: 1.5em;
  }
`

export const HomeReview: FC = (props) => {

return (
  <StyleHeaderDiv>

    <div className="tom-rotten-review">
      <p>Movie reviews in 150 characters or less!</p>
      <p>Mobile Responsive!</p>
      <p>This is what a tom rotten review looks like:</p>
      <p className="movie-title">Title: Aliens</p>
      <img src="http://robf.com.au/wp-content/uploads/2011/12/Aliens-A2S3-Briefing.png" alt="aliens"/>

    </div>

    <div className="site-about">
      <p>"I am not a fan of this movie. The death of the giant bug was the same as the 1st movie. Nightmare fuel."</p>

      <p>Tom Rotten is a movie review website that is made for people that don't want to shift through pages upon pages of reviews.</p>
        <p className="home-signup-link">Sign up is fast and easy. <a href="">sign up</a></p>
    </div>

  </StyleHeaderDiv>
)
}

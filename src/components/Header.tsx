import React, {FC} from 'react';

import styled from "styled-components";

const StyleHeaderDiv = styled.div`
  .header-container {
    z-index: 5;
    position: fixed;
    width: 98%;
    background: linear-gradient(to right, #cc0404, #d74646);
    height: auto;
    padding-top: 10px;


    .title {
      z-index: 5;

      display: flex;
      align-items: center;
      justify-content: center;
      height: 55px;
      font-size: 1.9em;
      font-family: "Noto Sans Old Italic";
      background: linear-gradient(to right, #cc0404, #d74646);
      color: white;
      width: 100%;
      
      
      
    }
    
    .links {
      z-index: 5;

      display: flex;
      flex-flow: row nowrap;
      justify-content: space-evenly;
      align-items: center;
      height: 22px;
      margin-bottom: -15px;
      color: white;
      font-size: 1em;
      background: linear-gradient(to right, #cc0404, #d74646);
      width: 97%;
      
    }
    
  }
  
`;

export const Header: FC = (props) => {

  return (
    <StyleHeaderDiv>
      <div className="header-container">
        <div className="title">
          <p>Tom Rotten</p>
        </div>
        <div className="links">
          <p>Movies</p>
          <p>Log out</p>
          <p>Profile</p>
          <p>Home</p>
        </div>
      </div>
    </StyleHeaderDiv>
  );
}



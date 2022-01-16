import React, {FC, useContext} from 'react';

import styled from "styled-components";

import clsx from "clsx";

const StyleHeaderDiv = styled.div`
  &.top-header {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    padding: 0 0;
    margin: 0 30px 0 0;

    .links {
      width: 100%;
      width: 100%;
      max-width: 800px;
      background: linear-gradient(to right, #cc0404, #d74646);
      display: flex;
      flex-flow: row nowrap;
      //justify-content: flex-start;
      justify-content: space-evenly;
      align-items: center;
      padding: 20px 10px;
      margin-bottom: -15px;
      

      .link {
  
        height: 100%;
        line-height: 50px; // set line-height = height of container (50px) and this will vertically center text.
        white-space: nowrap;


        &:hover {
          border-bottom: 2px solid black;
        }
        
        // do this for bigger screens
        //&:last-child {
        //  margin-left: auto;
        //  text-align: right;
        //  text-wrap: none;
        //}
      }

      .selected {
        border-bottom: 2px solid black;
      }
    }

    a,
    a:visited,
    a:hover {
      text-decoration: none;
      color: black;
    }
  }
`;

export const Header: FC  = (props) => {


    return (
      <StyleHeaderDiv className="top-header">
        <div className="links">
          <a href="">Movies</a>
          <a href="">Critics</a>
          <a href="">Contact</a>
          <a href="">Profile</a>
        </div>
      </StyleHeaderDiv>
    );

}




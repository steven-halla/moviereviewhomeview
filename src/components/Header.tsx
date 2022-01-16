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
      height: 100%;
      max-width: 800px;
      background: linear-gradient(to right, #cc0404, #d74646);
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;

      .link {
        margin: 10px;

        height: 100%;
        line-height: 50px; // set line-height = height of container (50px) and this will vertically center text.
        white-space: nowrap;


        &:hover {
          border-bottom: 2px solid black;
        }

        &:last-child {
          margin-left: auto;
          text-align: right;
          text-wrap: none;
        }
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
          <a href="">profile</a>
        </div>
      </StyleHeaderDiv>
    );

}




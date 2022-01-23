import React, {FC} from 'react';

import styled from "styled-components";

const StyleHeaderDiv = styled.div`
  .header-container {
    background-color: blue;
    z-index: 10;
    position: fixed;
    width: 100%;
    
    .title {
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
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-evenly;
      align-items: center;
      height: 22px;
      margin-bottom: -15px;
      color: white;
      font-size: 1em;
      background: linear-gradient(to right, #cc0404, #d74646);
      width: 100%;
      
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



//
// .title {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: fixed;
//   font-size: 1.9em;
//   font-family: "Noto Sans Old Italic";
//   height: 60px;
//   width: 100%;
//   background: linear-gradient(to right, #cc0404, #d74646);
//   color: white;
//
// }
//
// .header-wrapper {
//   z-index: 1000;
// }
//
// .top-header {
//
//   position: fixed;
//   width: 100%;
//   height: 80px;
//   display: flex;
//   justify-content: center;
//   padding: 0 0;
//   margin: 0 30px 0 0;
//   color: white;
//
// .links {
//
//     position: fixed;
//     width: 100%;
//     max-width: 800px;
//     background: linear-gradient(to right, #cc0404, #d74646);
//     display: flex;
//     flex-flow: row nowrap;
//     //justify-content: flex-start;
//     justify-content: space-evenly;
//     align-items: center;
//     padding: 20px 10px;
//     margin-bottom: -15px;
//     color: white;
//
//     p {
//       font-size: 50px;
//       padding-bottom: 25px;
//       flex-direction: column;
//     }
//
//   .link {
//       height: 100%;
//       line-height: 50px; // set line-height = height of container (50px) and this will vertically center text.
//       white-space: nowrap;
//       color: white;
//
//
//     &:hover {
//         border-bottom: 2px solid black;
//       }
//
//       // do this for bigger screens
//       //&:last-child {
//       //  margin-left: auto;
//       //  text-align: right;
//       //  text-wrap: none;
//       //}
//     }
//
//   .selected {
//       border-bottom: 2px solid black;
//     }
//   }
//
//   a,
//     a:visited
//   {
//     font-size: 1.4em;
//     text-decoration: none;
//     color: white;
//   }
//   a:hover {
//     font-size: 1.8em;
//     color: black;
//   }
// }

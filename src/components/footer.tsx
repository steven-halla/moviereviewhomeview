import React, {FC} from 'react';

import styled from "styled-components";

const StyleFooterDiv = styled.div`
    
  .Footer-Container {
    height: 209px;
    width: auto;
    background-color: skyblue;
  }
  
  .Social-Media-Container {
    display: flex;
    margin: 0 auto;
    flex-flow: row;
    justify-content: space-evenly;
    height: 155px;
    width: 222px;
    background-color: lightgray;
    
    img {
      display: flex;

      height: 35px;
      width: auto;
    }
  }
  
  `

export const Footer: FC = (props) => {
      return(
        <StyleFooterDiv>


          <div className="Footer-Container">
              <div className="Social-Media-Container">
                {/*<h2>Like what you see? Connect with us on Social media!</h2>*/}
                <p><a href="https://www.facebook.com/" target="_blank"><img
                  src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png" height="60"
                  width="60" alt=""/></a></p>
                <p><a href="https://twitter.com/" target="_blank"><img
                  src="https://d1e2bohyu2u2w9.cloudfront.net/education/sites/default/files/product/twitter-product-image.png"
                  height="60" width="60" alt=""/></a></p>
                <p><a href="https://www.linkedin.com/" target="_blank"><img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS4s3k1pIajgk3Rf-07CLW-WqbfKXE2VDXFA&usqp=CAU&ec=45761791"
                  height="60" width="60" alt=""/></a></p>
                <p><a href="https://www.pinterest.com/" target="_blank"><img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEgxnwMTT4WrNoXdjQlJZE4Vxj1Gnd8v1OGg&usqp=CAU&ec=45761791"
                  height="60" width="60" alt=""/></a></p>
              </div>
          </div>


        </StyleFooterDiv>
      )
}

import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./assets/DarkBlue.jpg";

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}

body {
    background-image: url(${BGImage});
    // background-size: cover;
    margin: auto;
   
}
* {
    box-sizing: border-box;
    font-family: 'Catamaran', san-serif;
}
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10%;

  > p {
    color: #fff;
  }
  h1 {
    font-family: Playfair, "Arial Narrow Bold", sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 3rem;
    font-weight: 400;
    text-align: center;
    margin: 5%;
  }
  img {
    width: 30%;
    padding: 2%;
    border-radius: 10%;
    border: solid 4px black;
  }
`;

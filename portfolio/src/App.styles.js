import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './assets/DarkBlue.jpg';

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}

body {
    background-image: url(${BGImage});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
   
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
  justify-content: center;
  padding: 10%;

  > p {
    color: #fff;
  }
  h1 {
    font-family: Playfair, 'Arial Narrow Bold', sans-serif;
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
  }
  h4 {
    font-family: Playfair, 'Arial Narrow Bold', sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 1rem;
    font-weight: 200;
    text-align: center;
  }
  @media screen and (max-width: 500px) {
    .main-pic {
      margin-left: 250px;
      padding: 15%;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 15%;

    h1,
    h4 {
      margin-top: 5%;
      font-size: 1rem;
      font-weight: 200;
      margin-left: 15%;
    }
  }
  @media screen and (max-width: 768px) {
    .main-pic {
      margin-left: 200px;
    }
    h1 {
      margin-top: 5%;
      font-size: 1.5rem;
      font-weight: 300;
    }
  }
  @media screen and (max-width: 375px) {
    .main-pic {
      margin-left: 200px;
    }
    h1 {
      margin-top: 5%;
      font-size: 1.5rem;
      font-weight: 200;
    }
    display: flex;
    align-items: center;
  }
  img {
    width: 30%;

    overflow: hidden;
    padding: 2%;
    border-radius: 10%;
    border: solid 4px black;
  }
`;

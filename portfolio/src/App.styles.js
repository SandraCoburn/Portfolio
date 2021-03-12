import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './assets/DarkBlue.jpg';

export const GlobalStyle = createGlobalStyle`
html {
    height: 100vh;
    padding: 0;
    margin: 0;
}

body {
  background: lightgray;
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
  padding: 5%;

  .navBar {
    font-size: 0;
  }

  > p {
    color: #fff;
  }

  .icon.brands:before {
    font-family: 'Font Awesome 5 Brands';
  }

  .copyright {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    color: #666;
    font-size: 1rem;

    list-style: none;
    padding-left: 2%;
    margin-bottom: 0;
  }
  .copyright div {
    display: inline-block;
    border-left: solid 1px rgba(0, 0, 0, 0.5);
    box-shadow: -1px 0px 0px 0px rgba(255, 255, 255, 0.1);
    padding: 0 0 0 1em;
    margin: 0 0 0 1em;
  }
  .copyright div:first-child {
    border: 0;
    box-shadow: none;
    padding-left: 0;
    margin-left: 0;
  }
  .copyright a {
    -moz-transition: color 0.2s ease-in-out;
    -webkit-transition: color 0.2s ease-in-out;
    -ms-transition: color 0.2s ease-in-out;
    transition: color 0.2s ease-in-out;
    color: inherit;
  }
  .copyright a:hover {
    color: #777;
  }

  .copyright {
    font-size: 1em;
    margin: 0;
  }

  .copyright li {
    display: block;
    margin: 1em 0 0 0;
    padding: 0;
    box-shadow: none;
    border-left: 0;
  }
  .copyright li:first-child {
    margin-top: 0;
  }
  h2 {
    font-family: Playfair, 'Arial Narrow Bold', sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
  }
  h4 {
    font-family: Playfair, 'Arial Narrow Bold', sans-serif;
    color: #1f2833;
    /* background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 0.9rem;
    font-weight: 100;
    text-align: left; */
  }
  @media screen and (max-width: 500px) {
    padding-top: 10%;
    width: auto;
    overflow: hidden;
    .main-pic {
      margin-left: 25%;
    }

    justify-content: center;
    h1 {
      margin-top: 5%;
      font-size: 1rem;
      font-weight: 200;
    }
    h4 {
      font-size: 0.75rem;
      font-weight: 100;
      text-align: center;
      padding: 0 10%;
    }
  }
  @media screen and (max-width: 768px) {
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
    h4 {
      background-size: 50%;
      font-size: 0.5rem;
      font-weight: 100;
      text-align: center;
    }
    display: flex;
    align-items: center;
  }
`;

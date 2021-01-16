import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-top: 4%;
  img {
    width: 17%;
    overflow: hidden;
    padding: 2%;
    border-radius: 10%;
    letter-spacing: 2px;
  }
  a {
    margin-left: 39%;
  }
  #react {
    border-style: none;
    padding-left: 0;
    margin-left: -30px;
  }
  .smoke {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .smoke ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .smoke ul li {
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
    list-style: none;
    letter-spacing: 2px;
    font-weight: bold;
    color: #fff;
  }
  .smoke ul:hover li {
    animation: smoke 2s linear forwards;
  }
  @keyframes smoke {
    0% {
      transform: rotate(0deg) translateY(0px);
      opacity: 1;
      filter: blur(1px);
    }
    100% {
      transform: rotate(45deg) translateY(-200px);
      opacity: 0;
      filter: blur(20px);
    }
  }
  .smoke ul li:nth-child(1) {
    animation-delay: 0s;
    display: flex;
    align-items: center;
    min-width: 150px;
    margin-right: 20px;
  }
  .smoke ul li:nth-child(2) {
    animation-delay: 0.4s;
  }
  .smoke ul li:nth-child(3) {
    animation-delay: 0.8s;
  }
  .smoke ul li:nth-child(4) {
    animation-delay: 1.2s;
  }
  .smoke ul li:nth-child(5) {
    animation-delay: 1.6s;
  }
  .smoke ul li:nth-child(6) {
    animation-delay: 2s;
  }
  .smoke ul li:nth-child(7) {
    animation-delay: 2.4s;
  }
  .smoke ul li:nth-child(8) {
    animation-delay: 2.8s;
  }
  .smoke ul li:nth-child(9) {
    animation-delay: 3.2s;
  }
  .smoke ul li:nth-child(10) {
    animation-delay: 3.6s;
  }
  .smoke ul li:nth-child(11) {
    animation-delay: 4s;
  }
  .smoke ul li:nth-child(12) {
    animation-delay: 4.4s;
  }
  .smoke ul li:nth-child(13) {
    animation-delay: 4.8s;
  }
  .smoke ul li:nth-child(14) {
    animation-delay: 5.2s;
  }
  @media screen and (max-width: 500px) {
    justify-content: center;
    .smoke {
      top: 22%;
    }
  }
  @media screen and (max-width: 750px) {
    justify-content: center;
    .smoke {
      top: 22%;
    }
  }
`;

export const SkillsWrapper = styled.div`
  display: flex;
  padding: 2%;
  margin-top: 2%;
  justify-content: space-around;
`;
export const AboutWrapper = styled.div`
  margin-top: 14%;
  justify-content: start;
  padding: 2%;

  @media screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

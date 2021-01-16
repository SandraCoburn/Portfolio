import styled from 'styled-components';

export const StyledCard = styled.div`
  img {
    width: 35%;
    overflow: hidden;
    padding: 2%;
    border-radius: 10%;
  }

  width: 85%;
  max-width: 1260px;
  margin: 3% 8%;

  .cards {
    display: flex;
  }
  h5 {
    color: #262626;
    font-size: 1rem;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 5px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #666666;
  }
  .corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 0 4px 0 32px;
    width: 35px;
    height: 35px;
    overflow: hidden;
    top: 0;
    left: 0;
  }
  .card {
    display: block;
    position: relative;
    width: 465px;
    height: 250px;
    margin: auto;
    background: #f2f8f9;
    border-radius: 4px;
    padding: 32px 34px;
    overflow: hidden;
    z-index: 0;
    cursor: pointer;
    transition: padding-bottom 0.3 ease-out;
  }
  .front-end-icons {
    position: absolute;
    right: 0;
    bottom: -100px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background: #ff9800;
    padding: 1px 0;
  }
  .front-end-icons img {
    color: #fff;
  }
  span.arrow {
    color: #fff;
    margin-top: -5px;
    margin-right: -5px;
  }
  .card:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -15px;
    background: #005fec;
    height: 35px;
    width: 35px;
    border-radius: 35px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.3s ease-out;
  }
  .card:hover:before {
    transform: scale(25);
  }
  .card:hover p {
    transition: all 0.3s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }
  .card:hover h5 {
    transition: all 0.3s ease-out;
    color: #fff;
  }
  .card:hover .front-end-icons {
    transition: all 0.3s ease-out;
    bottom: 0;
  }
  .card:hover {
    padding-bottom: 152px;
  }
  @media screen and (max-width: 500px) {
    padding-top: 20%;
    padding-right: 10%;
    align-items: center;
    margin: 3% 0;
    .cards {
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 2%;
    }
    .card {
      margin: 2px;
    }
  }
  @media screen and (max-width: 750px) {
    width: 100%;
    padding-top: 15%;

    align-items: center;
    margin: 3% 0;
    .cards {
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 2%;
      margin: 5px;
      width: 100%;
    }
    .card {
      text-align: center;
      margin: 8px;
      width: 565px;
      height: 250px;
      margin: auto;
    }
  }
`;

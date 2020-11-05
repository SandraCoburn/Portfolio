import styled from 'styled-components';

export const SkillsWrapper = styled.div`
  display: flex;
  padding: 2%;
  justify-content: space-around;
  @media screen and (max-widthl 500px) {
    align-items: center;
    padding-left: 196px;
  }
`;
export const ImgWrapper = styled.div`
  width: 300px;
  img {
    width: 30px;
  }
  @media screen and (max-width: 500px) {
    img {
      display: none;
    }
  }
`;

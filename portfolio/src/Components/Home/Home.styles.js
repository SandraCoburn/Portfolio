import styled from 'styled-components';

export const SkillsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-widthl 500px) {
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

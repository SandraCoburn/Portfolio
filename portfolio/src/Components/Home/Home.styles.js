import styled from 'styled-components';

export const SkillsWrapper = styled.div`
  display: flex;
  padding: 2%;
  justify-content: space-around;
`;
export const AboutWrapper = styled.div`
  text-alignment: center;
  padding: 2%;
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

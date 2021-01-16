import styled from 'styled-components';

export const Wrapper = styled.div`
  img {
    width: 30%;
    overflow: hidden;
    padding: 2%;
    border-radius: 10%;
    border: 2px solid #000;
  }
  width: 450px;

  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 10%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  // text-align: center;

  p {
    font-size: 0.75rem;
  }
  h5 {
    font-size: 1.1rem;
  }
  .grow:hover {
    -webkit-transform: scale(3.5);
    -ms-transform: scale(3.5);
    transform: scale(3.9);
  }
`;
export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2%;
`;

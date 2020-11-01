import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Typography } from "antd";
import Picture from "./assets/sandraProfile.jpg";

import { GlobalStyle, Wrapper } from "./App.styles";

const { Title } = Typography;

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <GlobalStyle />

      <Wrapper>
        <div className="container">
          <Title level={1}>Sandra G Coburn</Title>
          <img src={Picture} />
          <Title level={1}>Full Stack Web Developer </Title>
        </div>
      </Wrapper>
    </>
  );
}

export default App;

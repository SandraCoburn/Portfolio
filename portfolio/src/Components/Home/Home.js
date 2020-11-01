import React from "react";
import { Typography } from "antd";
import Picture from "../../assets/sandraProfile.jpg";

const { Title } = Typography;

const Home = () => {
  return (
    <div className="container">
      <Title level={1}>Sandra G Coburn</Title>

      <img src={Picture} />
      <Title level={1}>Full Stack Web Developer </Title>
    </div>
  );
};
export default Home;

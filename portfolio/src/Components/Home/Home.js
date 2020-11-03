import React from 'react';
import Picture from '../../assets/sandraProfile.jpg';

import { Typography } from 'antd';
import { SkillsWrapper } from './Home.styles';

import Skills from './Skills';
const { Title } = Typography;

const Home = () => {
  return (
    <div className="container">
      <Title level={1}>Sandra G Coburn</Title>
      <Title level={4}>sandra.g.coburn@gmail.com</Title>
      <SkillsWrapper>
        <img src={Picture} />
        <Skills />
      </SkillsWrapper>

      <Title level={1}>Full Stack Web Developer </Title>
    </div>
  );
};
export default Home;

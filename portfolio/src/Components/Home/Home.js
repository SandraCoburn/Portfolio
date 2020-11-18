import React from 'react';
import Picture from '../../assets/sandraProfile.jpg';
import Footer from './Footer';

import { Typography } from 'antd';
import { SkillsWrapper, AboutWrapper } from './Home.styles';

import Skills from './Skills';
const { Title } = Typography;

const Home = () => {
  return (
    <div className="container">
      <Title level={1}>Sandra G Coburn</Title>
      <Title level={4}>sandra.g.coburn@gmail.com</Title>
      <SkillsWrapper>
        <div className="main-pic">
          <img src={Picture} style={{ height: '300px', width: 300 }} />
        </div>
        <Skills />
      </SkillsWrapper>

      <Title level={1}>Full Stack Web Developer </Title>
      <AboutWrapper>
        <h4>
          Years ago I wanted to be an elementary school teacher. I loved kids
          and thought teaching was my calling. While in college I had to take an
          elective class and thought Intro to computers would do. Oh man! I got
          hooked. I wanted to learn more so I changed my major to Computer
          Information Systems. Favorite classes were Web Design and Javascript.
          Took a break to raise my kids and now I'm back! I still love Web
          Design and Javascript but when I discovered React and the concept of
          Single Page Applications, I was blown away. And of course learning
          NodeJS and express to build the backend was amazing. I am learning
          Typescript right now and I am loving it. I can't wait to see what else
          I will get my hands into.{' '}
        </h4>
      </AboutWrapper>
      <Footer />
    </div>
  );
};
export default Home;

import React from 'react';
import Picture from '../../assets/sandraProfile.jpg';
import Footer from './Footer';

import { Typography } from 'antd';
import { SkillsWrapper, AboutWrapper, StyledContainer } from './Home.styles';

import Skills from './Skills';
import SkillsCard from './SkillsCard';
const { Title } = Typography;

const Home = () => {
  return (
    <StyledContainer>
      <div className="smoke">
        <ul>
          <li>
            <img
              src={Picture}
              style={{ height: '150px', width: 150 }}
              alt="Sandra Coburn"
            />
          </li>
          <li>S</li>
          <li>A</li>
          <li>N</li>
          <li>D</li>
          <li>R</li>
          <li>A</li>
          <li>
            <img
              id="react"
              alt="React"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
            />
          </li>
          <li>C</li>
          <li>O</li>
          <li>B</li>
          <li>U</li>
          <li>R</li>
          <li>N</li>
        </ul>
      </div>
      <Title level={2}>Full Stack Web Developer </Title>
      <Title level={4}>
        <a href="mailto:sandra.g.coburn@gmail.com">sandra.g.coburn@gmail.com</a>
      </Title>

      <AboutWrapper>
        <SkillsCard />
        <hr />
        <h2>About Me</h2>
        <h4>
          Years ago I wanted to be an elementary school teacher. I loved kids
          and thought teaching was my calling. While in college I had to take an
          elective class and thought Intro to computers would do. Oh man! I got
          hooked. I wanted to learn more so I changed my major to Computer
          Information Systems. Favorite classes were Web Design and Javascript.
          After getting my AA I Took a break to raise my kids and now I'm back!
          I still love Web Design and Javascript but when I discovered React and
          the concept of Single Page Applications, I was blown away. And of
          course learning NodeJS and express to build the backend was amazing. I
          am learning Typescript right now and I am loving it. I can't wait to
          see what else I will get my hands into!
        </h4>
        <h4>
          For many years I have volunteer in organizations where I've developed
          my interpersonal skills. Volunteer positions gave me the opportunity
          to interact with different types of people with different backgrounds
          and different mind sets. Planning activities involving several groups
          can be challenging but working on keeping everybody focused and
          motivated have sharpened my planning, leadership and communication's
          skills. I've practiced planning with the end results in mind but also
          being open minded about improvising and changing routes when things
          don’t work out following the original plan. All these skills will be
          useful when working in a team as a developer.
        </h4>
        <h4>
          Interpersonal skills:
          <ul>
            <li>Self-Confidence </li>
            <li> Work Ethic</li>
            <li> Relationship Management</li>
            <li> Receptiveness to Feedback </li>
            <li>Body Language </li>
            <li>Listening</li>
            <li>Collaboration</li>
            <li> Conflict Management</li>
            <li> Positive Attitude</li>
          </ul>
        </h4>
      </AboutWrapper>
      <Footer />
    </StyledContainer>
  );
};
export default Home;

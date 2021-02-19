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
          Years ago I wanted to become an elementary school teacher. I loved
          kids and thought teaching was my calling. In college I had to choose
          one elective class and thought Intro to computers and Web Desing would
          do. Oh man! I got hooked. I wanted to learn more so I changed my major
          to Computer Information Systems. Favorite classes were Web Design and
          Javascript but enjoyed network administration classes as well. After
          getting out of college other priorities kept me out of the tech
          industry. I can finally say I'm back to one of my passions. I
          refreshed my computer skills by attending a 9 month program focused on
          Full Stack web development. I still love Web Design and Javascript but
          learning React and the concept of Single Page Applications made me
          realize how fun and effective this industry has become. Larning NodeJS
          and express to build backend APIs was also amazing. I am learning
          Typescript and Graphql right now and I am loving it. I can't wait to
          see what else I will get my hands into!
        </h4>
        <h4>
          For many years I have volunteered in several organizations helping me
          sharpen my interpersonal skills. Volunteer positions gave me the
          opportunity to interact with many people with different backgrounds
          and different mind sets. Planning activities involving several groups
          can be challenging but working on keeping everybody focused and
          motivated have refined my planning, leadership and communication
          skills. Success come from planning with the end results in mind but
          also being open minded about improvising and changing routes when
          things don’t work as planned. I can't wait to share all my skills with
          my team on my dream job. I would love to work for a company that
          values individuality, hard work and stretches their employees to be
          the best we can be. I truly believe that the succes of a company is
          the result of a team of positive, caring and productive employees.
        </h4>
      </AboutWrapper>
      <Footer />
    </StyledContainer>
  );
};
export default Home;

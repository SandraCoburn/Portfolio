import React from 'react';
import { StyledCard } from './SkillsCard.styles';

const SkillsCard = () => {
  return (
    <StyledCard>
      <div className="cards">
        <div className="card">
          <h5>Front End Development Skills</h5>

          <p>Experience with HTML5, CSS3. ReactJS, Redux, JavaScript</p>
          <p>Jira, Confluence, GitHub, GitLab, Whimsical, Figma</p>

          <p>Great team player</p>
          <p>
            Commited to finding the best solution and delivering quality code
          </p>
          <p>Researches and learn new technologies on own time</p>

          <div className="corner">
            <span className="arrow">{'->'}</span>
          </div>

          <ul className="front-end-icons">
            <li>
              <img
                align="left"
                alt="React"
                width="26px"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
              />
              <p>ReactJS</p>
            </li>
            <li>
              <img
                align="left"
                alt="Visual Studio Code"
                width="26px"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png"
              />
              <p>Visual Studio Code</p>
            </li>
            <li>
              <img
                align="left"
                alt="HTML5"
                width="26px"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
              />
              <p>HTML5</p>
            </li>
            <li>
              <img
                align="left"
                alt="CSS3"
                width="26px"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
              />
              <p>CSS3</p>
            </li>
            <li>
              <img
                align="left"
                alt="JavaScript"
                width="16px"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
              />
              <p>JavaScript</p>
            </li>
          </ul>
        </div>
        <div className="card">
          <h5>Back End Development Skills</h5>
          <p>Reliable and focused on completing commited tasks</p>
          <p>Strong understanding of client/server model</p>
          <p>RESTfull API's</p>
          <p>
            Experience with NodeJS, Express, MongoDB, Sqlite3, SQL, JSON,
            Phython
          </p>
          <div className="corner">
            <span className="arrow">{'->'}</span>
          </div>

          <ul className="front-end-icons">
            <li>
              <img
                align="left"
                alt="Node.js"
                width="26px"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
              />
              <p>NodeJS</p>
            </li>
            <li>
              <img
                align="left"
                alt="GitHub"
                width="26px"
                src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png"
              />
              <p>GitHub</p>
            </li>
            <li>
              <img
                align="left"
                alt="Terminal"
                width="26px"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png"
              />
              <p>Command Line</p>
            </li>
          </ul>
        </div>
      </div>
    </StyledCard>
  );
};
export default SkillsCard;

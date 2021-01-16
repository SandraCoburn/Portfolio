import React from 'react';
import { Row } from 'antd';
import Project from './Project';
import { ListWrapper } from './Project.styles';
import { Projects } from '../../utils/projects';

const ProjectList = () => {
  return (
    <Row>
      {Projects.map((project, idx) => {
        return (
          <ListWrapper>
            <Project
              key={idx}
              title={project.title}
              description={project.description}
              details={project.participation}
              url={project.url}
              deployed={project.deployed}
              image={project.image}
            />
          </ListWrapper>
        );
      })}
    </Row>
  );
};
export default ProjectList;

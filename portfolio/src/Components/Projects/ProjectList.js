import React from "react";
import { Col, Row } from "antd";
import Project from "./Project";
import { ListWrapper } from "./Project.styles";
import { Projects } from "../../utils/projects";

const ProjectList = () => {
  return (
    <Row>
      {Projects.map((project, idx) => {
        return (
          <ListWrapper>
            <Project
              title={project.title}
              url={project.url}
              description={project.description}
              details={project.participation}
              image={project.image}
            />
          </ListWrapper>
        );
      })}
    </Row>
  );
};
export default ProjectList;

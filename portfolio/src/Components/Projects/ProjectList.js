import React from "react";
import { Col, Row } from "antd";
import Project from "./Project";
import { ListWrapper } from "./Project.styles";

const ProjectList = () => {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <ListWrapper>
          <Project title="Project" />
        </ListWrapper>
      </Col>
    </Row>
  );
};
export default ProjectList;

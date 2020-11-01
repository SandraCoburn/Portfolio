import React from "react";
import { Wrapper } from "./Project.styles";
import { Card, Col, Row } from "antd";

const Project = (props) => {
  return (
    <Wrapper>
      {/* <Card title="project" bordered={false} className="card"> */}
      <h2>Project title:</h2>
      <p>Description: {props.title}</p>

      {/* </Card> */}
    </Wrapper>
  );
};

export default Project;

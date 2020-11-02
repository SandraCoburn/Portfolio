import React from "react";
import { Wrapper } from "./Project.styles";

const Project = (props) => {
  return (
    <Wrapper>
      {/* <Card title="project" bordered={false} className="card"> */}
      <h2>Project: {props.title}</h2>
      <img src={props.image} />
      <p>
        <a href={props.url}>GitHub Link</a>
      </p>
      <p>{props.description}</p>
      <p>{props.details}</p>

      {/* </Card> */}
    </Wrapper>
  );
};

export default Project;

import React from 'react';
import { Wrapper } from './Project.styles';

const Project = (props) => {
  return (
    <Wrapper>
      <h2>{props.title}</h2>
      <p>
        <a href={props.url}>GitHub Link</a>
      </p>
      <p>
        <a href={props.deployed}>Deployed site</a>
      </p>

      <a href={props.url}>
        <img className="grow" src={props.image} alt="project-visual" />
      </a>

      <p>{props.description}</p>
      <p>Personal Contribution: </p>
      <p>{props.details}</p>
    </Wrapper>
  );
};

export default Project;

import conWays from "../assets/projects-imgs/conWays.gif";
import nasa from "../assets/projects-imgs/nasa-pic.jpg";
import recipe from "../assets/projects-imgs/recipeBook.jpg";
import story from "../assets/projects-imgs/story-squad.png";
import plants from "../assets/projects-imgs/water-plants.jpg";

export const Projects = [
  {
    title: "Story Squad",
    description:
      "A custom, serialized novel geared toward children in 3rd-6th grade. Children read a story, get a prompt to invite them to handwrite and draw part of the story then upload it to a database where it will be analyzed to match them up with same level story tellers.",
    participation:
      "Created and styled React components to build the Front End UI using Ant Design, Redux, Axios, LESS and Jest for unit testing. Wrote the frontend documentation using Markdown markup language",
    url: "https://github.com/Lambda-School-Labs/story-squad-fe-b",
    image: story,
  },
  {
    title: "Secret Family Recipe",
    description:
      "App's API database stored and displayed family recipes. Users could add, read, update and delete recipes",
    participation:
      "Helped create backend API with Node, Express, Sqlite3, Knex.JS, Bcrypt, Jest unit testing. Wrote the documentation using Postman. Deployed backend using Heroku services.",
    url: "https://kd-secret-family-recipes-cookbook.github.io/UI-Developers/",
    image: recipe,
  },
  {
    title: "Water My Plants App",
    description:
      "An App where the user can register, log in and create water schedules for their plants. ",
    participation:
      "Helped create the frontend using React, React Router with protected routes, axios, useState and useFoorm hooks. Yup to validate forms. Frontend pulls and sends data to a backend API created with Node.js and Express. Deployed frontend using Vercel services",
    url: "https://github.com/WaterMyPlants3/front-end",
    image: plants,
  },
  {
    title: "Conway's Game of Life",
    description:
      "A game where player can click on cells to make a custom pattern to initiate a simulation of John Conway's 'Game of Life.' ",
    participation:
      "Solo project using CRA, Javascript, React Router, immer library and CSS.",
    url: "https://github.com/SandraCoburn/ConwayGameOfLife",
    image: conWays,
  },
  {
    title: "Nasa Picture of the Day",
    description:
      "React App displays a picture from Nasa where user can choose a date to see the picture of that day archives. ",
    participation:
      "Project created using CRA, Bootstrap, React Hooks and Axios.",
    url: "https://github.com/SandraCoburn/nasa-photo-of-the-day",
    image: nasa,
  },
];

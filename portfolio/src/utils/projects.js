import conWays from '../assets/projects-imgs/conWays.gif';
import nasa from '../assets/projects-imgs/nasa-pic.jpg';
import recipe from '../assets/projects-imgs/recipeBook.jpg';
import story from '../assets/projects-imgs/story-squad.png';
import plants from '../assets/projects-imgs/water-plants.jpg';
import landingpage from '../assets/projects-imgs/familyrecipe.png';
import chow from '../assets/projects-imgs/chow-expert.png';
import portfolio from '../assets/projects-imgs/portfolio.png';
import bakery from '../assets/projects-imgs/midnight-bakery.png';
import ecommerce from '../assets/projects-imgs/ecommerce.jpeg';

export const Projects = [
  {
    title: 'Midnight Bakery',
    description:
      'A work in progress website I am building for a friend. She bakes at night and makes the most wonderful cakes and cookies. We are planning to make this website fully operational where users can select a cake, order and pay online',
    participation:
      'Built using ReactJS, Vanilla CSS, React Reveal, Redux, MongoDB, NodeJS, Express. Deployed with Heroku services using mongodb cloud services for database.',
    url: 'https://github.com/SandraCoburn/bakery-shopping',
    deployed: 'https://bakery-shopping-test.herokuapp.com',
    image: bakery,
  },

  {
    title: 'Story Squad - Front End',
    description:
      'A custom, serialized novel geared toward children in 3rd-6th grade. Children read a story, get a prompt to invite them to handwrite and draw part of the story then upload it to a database where it will be analyzed to match them up with same level story tellers. Created by a team of one UX Designer, 3 Data Scientists and 5 Full Stack Engineers.',
    participation:
      'Created and styled some of the React components to build the Front End UI for version 2.0 using Ant Design, Redux, Axios, LESS and Jest for unit testing. Wrote the frontend documentation using Markdown markup language',
    url: 'https://github.com/SandraCoburn/story-squad-fe-b',
    deployed: 'https://contest.storysquad.app/',
    image: story,
  },
  {
    title: 'Ecommerce Store Sample',
    description:
      'Sample eccomerce store built with React, Redux, React router, GraphQL. LESS to style components. Used Firebase for login. Integrated Stripe for payments. Deployed to Heroku cloud platform.',
    participation:
      'Followed a tutorial to build app. Wrote documentation using Markdown markup language. Deployed to Heroku.',
    url: 'https://github.com/SandraCoburn/ecommerce-store-sample',
    deployed: 'https://ecommerce-store-sample.herokuapp.com/',
    image: ecommerce,
  },
  {
    title: 'Chow Expert Static Landing Page - UI',
    description:
      'Work in progress static page to remember a family member. Will continue to add more information and styling',

    participation:
      'A website sample project created mainly using HTML, Material Design Lite, CSS Grid and some Javascript. Deployed using GitHub pages.',

    url: 'https://github.com/SandraCoburn/chow-expert',
    deployed: 'https://sandracoburn.github.io/chow-expert/',
    image: chow,
  },
  {
    title: 'Portfolio Website',
    description: 'This portfolio website to diplay projects samples.',

    participation:
      'Planned and designed Portfolio website using React, AntD, Styled components. Deployed using Netlify services.',

    url: 'https://www.sandracwebdeveloper.com/',
    deployed: 'https://github.com/SandraCoburn/Portfolio',
    image: portfolio,
  },
  {
    title: 'Secret Family Recipe Landing Page - UI',
    description:
      'A website project created by 5 web devopers where users would be able to display and store family recipes.',
    participation:
      'Designed and created the Landing page and About page using html and LESS/CSS',
    url: 'https://github.com/SandraCoburn/Family-Recipes-UI',
    deployed: 'https://sandracoburn.github.io/Family-Recipes-UI/',
    image: landingpage,
  },
  {
    title: 'Secret Family Recipe - Back End',
    description:
      "App's API database stored and displayed family recipes. Users could add, read, update and delete recipes.",
    participation:
      'Helped create backend API with Node, Express, Sqlite3, Knex.JS, Bcrypt, Jest unit testing. Wrote the documentation using Postman. Deployed backend using Heroku services.',
    url: 'https://github.com/bw-family-recipes-cookbook-2/bw-cookbook-Backend',
    deployed:
      'https://documenter.getpostman.com/view/10351835/SzKZtcL5?version=latest',
    image: recipe,
  },
  {
    title: 'Water My Plants App - Front End',
    description:
      'An App where the user can register, log in and create water schedules for their plants. ',
    participation:
      'Helped create the frontend using React, React Router with protected routes, axios, useState and useForm hooks. Yup to validate forms. Frontend integrated with backend API created with Node.js and Express. Deployed frontend using Vercel services',
    url: 'https://github.com/WaterMyPlants3/front-end',
    deployed: 'https://water-my-plants-web26.netlify.app/',
    image: plants,
  },
  {
    title: "Conway's Game of Life - Front End",
    description:
      "A game where player can click on cells to make a custom pattern to initiate a simulation of John Conway's 'Game of Life.' ",
    participation:
      'Solo project using CRA, Javascript, React Router, immer library and CSS.',
    url: 'https://github.com/SandraCoburn/ConwayGameOfLife',
    deployed: ' https://cowgameoflife.netlify.app/',
    image: conWays,
  },
  {
    title: 'Nasa Picture of the Day - UI',
    description:
      'React App displays a picture from Nasa where user can choose a date to see the picture of that day archives. ',
    participation:
      'Solo project created using CRA, Bootstrap, React Hooks and Axios.',
    url: 'https://github.com/SandraCoburn/nasa-photo-of-the-day',
    deployed: 'https://tender-lumiere-5c663d.netlify.com/',
    image: nasa,
  },
];

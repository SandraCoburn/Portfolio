import React from 'react';
const Footer = () => {
  return (
    <div className="copyright">
      <p>Built and Designed by Sandra Coburn</p>
      <p>&copy; 2020 All rights reserved</p>
      <div>
        <a
          href="https://www.linkedin.com/in/sandra-borunda-coburn/"
          className="icon brands fa-linkedin-in"
        >
          <span className="label"> LinkedIn</span>
        </a>
      </div>
      <div>
        <a href="https://twitter.com/home" className="icon brands fa-twitter">
          <span className="label"> Twitter</span>
        </a>
      </div>
      <div>
        <a
          href="https://github.com/SandraCoburn"
          className="icon brands fa-github"
        >
          <span className="label"> Github</span>
        </a>
      </div>
    </div>
  );
};
export default Footer;

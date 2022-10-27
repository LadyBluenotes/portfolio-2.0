import React from "react";

import FooterStyles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={FooterStyles.footer}>
      <div className={FooterStyles.secondcontainer}>
        <p>&copy; Copyright Sarah Gerrard. All Rights Reserved.</p>
        <ul>
          <li>
            <a href="https://github.com/ladybluenotes">
            <i className="devicon-github-original"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sarahgerrard/">
            <i className="devicon-linkedin-plain"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/LadyBluenotes">
            <i className="devicon-twitter-original"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

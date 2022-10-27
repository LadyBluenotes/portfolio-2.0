import React, { useState } from "react";
import AboutStyles from "../styles/about.module.css";
import { motion } from "framer-motion";

const About = () => {

  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: "100vw", opacity: 0 }}
      transition={{
        delay: 0.15,
        duration: 0.5,
        type: "spring",
        stiffness: 130,
      }}
      exit="exit"
      variants={{
        exit: {
          x: "-100vw",
          transition: { ease: "easeInOut" },
        },
      }}
      className={AboutStyles.about}
    >
      <h1>About Me</h1>
      <div className={AboutStyles.text}>
        <p>
        I am a creative, detail-oriented, software developer with drive to continuously improve my skills. I have a proven track record of creating and implementing successful front and back-end web applications. Currently, I'm looking to bring my skills to a tech company with global reach targeting full-stack, front-end, or back-end roles.
        </p>

        <p>
        Utilizing my skills in both front-end and back-end development, I am able to create and implement web applications that are both functional and visually appealing while maintaining a detailed git history for all projects I work on.
        </p>
      </div>
      <div>
        <p>Connect with me on my socials!</p>
        <ul className={AboutStyles.iconlinks}>
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

    </motion.div>
  );
};

export default About;

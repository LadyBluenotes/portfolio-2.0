import React, { useState } from "react";

import TechStyles from "../styles/techns.module.css";

import Technology from "./technology";

const Technologies = () => {
  const [tech, setTech] = useState([
    {
      id: "1",
      tech: "devicon-react-original",
      title: "React",
      para: "A JavaScript library used in web development to build interactive elements on websites.",
    },
    {
      id: "2",
      tech: "devicon-nodejs-plain",
      title: "Node",
      para: "An open source development platform for executing JavaScript code server-side.",
    },
    {
      id: "3",
      tech: "devicon-express-original",
      title: "Express",
      para: "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    },
    {
      id: "4",
      tech: "devicon-mongodb-plain-wordmark",
      title: "MongoDB",
      para: "An open source NoSQL database management program.",
    },
    {
      id: "5",
      tech: "devicon-javascript-plain",
      title: "JavaScript",
      para: "A text-based programming language used both on the client-side and server-side that allows you to make web pages interactive.",
    },
    {
      id: "6",
      tech: "devicon-css3-plain",
      title: "CSS3",
      para: "The standard used in the styling and formatting of web pages.",
    },
    {
      id: "7",
      tech: "devicon-github-original",
      title: "GitHub",
      para: "A code hosting platform for version control and collaboration.",
    },
    {
      id: "8",
      tech: "devicon-html5-plain",
      title: "HTML5",
      para: "The markup language used for structuring and presenting content.",
    },
    {
      id: "9",
      tech: "devicon-visualstudio-plain",
      title: "Visual Studio Code",
      para: "A code editor redefined and optimized for building and debugging modern web and cloud applications.",
    },
    {
      id: "10",
      tech: "devicon-nextjs-original",
      title: "Next.js",
      para: "An open-source web development framework enabling React-based web applications with server-side rendering and generating static websites.",
    },
    {
      id: "11",
      tech: "devicon-bootstrap-plain",
      title: "Bootstrap",
      para: "A free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
    },
    {
      id: "11",
      tech: "devicon-tailwindcss-plain",
      title: "Tailwind",
      para: "An open source CSS framework.",
    },
  ]);

  return (
    <div className={TechStyles.technologies} id="technologies">
      <h1>Technologies</h1>
      <p>
        I've worked with a range a technologies in the web development world, collectively creating my full-stack experience.
      </p>

      <div className={TechStyles.techgroup}>
        {tech.map((t) => {
          return (
            <Technology
              title={t.title}
              para={t.para}
              tech={t.tech}
              key={t.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;

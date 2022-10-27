import React from "react";

import Link from "next/link";

import NavStyle from "../styles/nav.module.css";

import { motion } from "framer-motion";

const Nav = () => {
  return (
    <nav className={NavStyle.nav}>
      <motion.h1 drag>
        <motion.span
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            delay: 0.25,
            duration: 0.5,
            type: "spring",
            stiffness: 150,
          }}
        >
        </motion.span>
        Sarah Gerrard
      </motion.h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <ul className={NavStyle.iconlinks}>
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
    </nav>
  );
};

export default Nav;

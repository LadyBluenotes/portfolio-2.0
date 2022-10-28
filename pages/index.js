import BackgroundAnimation from "../components/Background";
import Projects from "../components/Projects";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

import React from "react";

import HomeStyles from "../styles/Home.module.css";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <motion.div
        className={HomeStyles.home}
        exit="exit"
        variants={{
          exit: {
            y: "100vw",
            transition: { ease: "easeInOut" },
          },
        }}
      >
        <div className={HomeStyles.photo}>
                <Image 
                  src={"/computer.png"}
                  width={500}
                  height={500}/>
        </div>
        <div className={HomeStyles.introtext}>
          <motion.h1
            animate={{ scale: 1, opacity: 1, y: "0" }}
            transition={{
              delay: 0.25,
              duration: 0.75,
              type: "spring",
              stiffness: 190,
            }}
            initial={{ scale: 0, opacity: 0, y: "-100vh" }}
          >
            Sarah Gerrard
            <TypeAnimation
              sequence={['Full-Stack Software Developer', 1000, 'Freelancer', 1000, 'Tech Aficianado', 1000]}
                            //  Replacing previous Text
              style={{ 
                fontSize: '.4em' }}
              wrapper="h2"
              repeat={Infinity}
            />
          </motion.h1>
          <motion.p
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.75 }}
            initial={{ scale: 0, opacity: 0 }}
          >
            Utilizing my skills in both front and back-end development to create and implement web applications that are both functional and visually appealing.
          </motion.p>
        </div>

        <BackgroundAnimation />
      </motion.div>

      <Projects />
      <Technologies />
      <Footer />
    </>
  );
}

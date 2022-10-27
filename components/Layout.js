import LayoutStyle from "../styles/layout.module.css";

import React, { useState, useEffect } from "react";

import Nav from "../components/Nav";

import Head from "next/head";

const Layout = ({ children }) => {
  const [showScroll, setShowScroll] = useState(false);

  const scrolling = () => {
    if (!showScroll && window.scrollY > 300) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY < 300) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", scrolling);
  });

  return (
    <>
      <Head>
        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-ExtraLightItalic.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <title>Portfolio</title>
      </Head>

      <div className={LayoutStyle.container}>
        <Nav />
        <hr className={LayoutStyle.hr} />
        <main className={LayoutStyle.main}>
          {children}
          <div
            className={LayoutStyle.scroll}
            onClick={scrollTop}
            style={{ right: showScroll ? "3%" : "-30%" }}
          >
            <i className="fas fa-arrow-circle-up"></i>
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;

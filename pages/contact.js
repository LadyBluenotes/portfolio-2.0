import React from "react";

import { motion } from "framer-motion";


import ContactStyles from "../styles/contact.module.css";

const contact = () => {
  return (
    <motion.div
      className={ContactStyles.contact}
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: "100vw", opacity: 0 }}
      transition={{
        delay: 0.15,
        duration: 0.5,
        type: "spring",
        stiffness: 130,
      }}
      exit="exit"
      variants={{
        exit: {
          y: "100vw",
          transition: { ease: "easeInOut" },
        },
      }}
    >
      <h1>Get in Touch !</h1>

      <form method="POST"
        name="contact-form"
        action="/"
        data-netlify="true">
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="email" placeholder="Email" required />
        <textarea
          name="message"
          id=""
          cols="95"
          rows="10"
          placeholder="Your message here..."
        ></textarea>
        <button
          type="submit"
          className={ContactStyles.sendbutton}
          formNoValidate
        >Submit</button>
      </form>
    </motion.div>
  );
};

export default contact;
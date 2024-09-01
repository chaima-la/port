import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import {motion} from "framer-motion"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <motion.h1 className={styles.title}>Hi, I'm Chaima</motion.h1>
        <p className={styles.description}>
          I'm a cs student and full-stack developer using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:chaimalaouarstahi@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

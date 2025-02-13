import React from "react";
import heroImage from "../../assets/hero/heroImage.png";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nahima Machingal</h1>
        <p className={styles.description}>
          I'm a full-stack developer specialized in building scalable solutions using Python, Django, and React. I am constantly evolving and innovating to create efficient and impactful applications. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:mhnahima@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

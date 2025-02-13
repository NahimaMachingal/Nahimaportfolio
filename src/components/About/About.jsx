import React from "react";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import aboutImage from "../../assets/about/aboutImage.png";
import heroImage from "../../assets/hero/heroImage.png"
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={heroImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Python Developer </h3>
              <br />
              <p>
              I am Nahima Machingal, a passionate Python Developer dedicated to building scalable applications and solving complex digital challenges. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
                
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              I specialize in designing intuitive and visually appealing web applications. My expertise includes crafting user-friendly interfaces and developing comprehensive design systems to ensure consistency and scalability.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

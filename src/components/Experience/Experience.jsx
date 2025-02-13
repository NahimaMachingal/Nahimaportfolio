import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

// Import all images from "src/assets/skills"
const skillImages = import.meta.glob("../../assets/skills/*", { eager: true });

// Import all images from "src/assets/history"
const historyImages = import.meta.glob("../../assets/history/*", { eager: true });

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
        {skills.map((skill, id) => {
            // Convert "skills/html.png" -> "../../assets/skills/html.png"
            const imagePath = `../../assets/${skill.imageSrc}`;
            const image = skillImages[imagePath]?.default || skillImages[imagePath];
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                {image ? (
                    <img src={image} alt={skill.title} />
                  ) : (
                    <p>Image not found</p>
                  )}
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
        {history.map((historyItem, id) => {
            // Convert "history/google.png" -> "../../assets/history/google.png"
            const imagePath = `../../assets/${historyItem.imageSrc}`;
            const image = historyImages[imagePath]?.default || historyImages[imagePath];

            return (
              <li key={id} className={styles.historyItem}>
                <div className={styles.historyItemImageContainer}>
                  {image ? (
                    <img src={image} alt={`${historyItem.organisation} Logo`} />
                  ) : (
                    <p>Image not found</p>
                  )}
                  </div>

                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

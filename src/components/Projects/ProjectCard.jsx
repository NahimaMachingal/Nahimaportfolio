import React from "react";
import styles from "./ProjectCard.module.css";

// Import all project images dynamically
const projectImages = import.meta.glob("../../assets/projects/*", { eager: true });

export const ProjectCard = ({ project }) => {
  const { title, imageSrc, description, skills, demo, source } = project;
  
  // Convert "projects/project.png" -> "../../assets/projects/project.png"
  const imagePath = `../../assets/${imageSrc}`;
  const image = projectImages[imagePath]?.default || projectImages[imagePath];

  return (
    <div className={styles.container}>
      {image ? (
        <img src={image} alt={`Image of ${title}`} className={styles.image} />
      ) : (
        <p>Image not found</p>
      )}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">Demo</a>
        <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">Source</a>
      </div>
    </div>
  );
};

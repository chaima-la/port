import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../utils';

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, screenshots },
}) => {
  const navigate = useNavigate(); // Use useNavigate

  const handleDemoClick = () => {
    navigate('/screenshots', { state: { screenshots, description } }); 
  };

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
     
      <div className={styles.links}>
        <button onClick={handleDemoClick} className={styles.link}>
          More
        </button>
      </div>
    </div>
  );
};

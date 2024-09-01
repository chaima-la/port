import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ScreenshotPage.module.css';
import { getImageUrl } from '../../utils';

export const ScreenshotPage = () => {
  const location = useLocation();
  const { screenshots, description } = location.state || { screenshots: [], description: '' }; // Extract description
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div className={styles.container}>
      <h1>Screenshots</h1>
      <p>{description}</p>
      <div className={styles.slider}>
        <button onClick={prevSlide} className={styles.arrow}>‹</button>
        <img
          src={getImageUrl(screenshots[currentIndex])}
          alt={`Screenshot ${currentIndex + 1}`}
          className={styles.screenshot}
        />
        <button onClick={nextSlide} className={styles.arrow}>›</button>
      </div>
    </div>
  );
};

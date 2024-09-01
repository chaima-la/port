import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>

        <li className={styles.link}>
          <a href="https://www.facebook.com/profile.php?id=100073310405989&locale=fr_FR">contact on facebook</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:chaimalaouarstahi@gmail.com">chaimalaouarstahi@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="www.linkedin.com/in/chaima-laouar-stahi-ab4489285">linkedin.com/chaima</a>
        </li>
      </ul>
    </footer>
  );
};

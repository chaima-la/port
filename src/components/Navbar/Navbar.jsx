import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.title}>Portfolio</Link>
      <div className={styles.menuBtn} onClick={toggleMenu}>
        ☰ {/* Unicode character for menu icon */}
      </div>
      <div ref={menuRef} className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <ul className={styles.menuItems}>
          <li><Link to="/" className={styles.link} onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" className={styles.link} onClick={closeMenu}>About</Link></li>
          <li><Link to="/experience" className={styles.link} onClick={closeMenu}>Experience</Link></li>
          <li><Link to="/projects" className={styles.link} onClick={closeMenu}>Projects</Link></li>
        </ul>
      </div>
    </nav>
  );
};

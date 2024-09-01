import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { ScreenshotPage } from "./components/ScreenShots/ScreenShotPage";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { fadeIn } from "./variants";
import { motion } from 'framer-motion';





function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
              <motion.div
                className={styles.section}
                variants={fadeIn(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
              >
                <Hero />
              </motion.div>

               <motion.div
                className={styles.section}
                variants={fadeIn(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
              >
                <About />
              </motion.div>

              <motion.div
                className={styles.section}
                variants={fadeIn(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
              >
                <Experience />
              </motion.div>

              <motion.div
                className={styles.section}
                variants={fadeIn(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
              >
                <Projects />
              </motion.div>

              <motion.div
                className={styles.section}
                variants={fadeIn(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
              >
                <Contact />
              </motion.div>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                className={styles.section}
                variants={fadeIn(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
              >
                <About />
              </motion.div>
            }
          />

          <Route
            path="/experience"
            element={
              <motion.div
                className={styles.section}
                variants={fadeIn(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
              >
                <Experience />
              </motion.div>
            }
          />
          <Route
            path="/projects"
            element={
              <motion.div
                className={styles.section}
                variants={fadeIn(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
              >
                <Projects />
              </motion.div>
            }
          />
          <Route path="/screenshots" element={<ScreenshotPage />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;

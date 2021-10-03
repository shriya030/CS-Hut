import React from "react";
import "./Tags.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { duration } from "@material-ui/core";

const variants = {
  in: {
    scaleX: 1,
  },
  out: {
    scaleX: 0,
  },
};

function Tags() {
  return (
    <motion.div
      variants={variants}
      initial="out"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
    >
      <div className="tags">
        <div className="headings">Tags</div>
        <div class="wrapper">
          <div
            class="card"
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            initial={{ opacity: 0, rotate: -90 }}
            exit={{ opacity: 0 }}
          >
            <h3 class="card___title">PROGRAMMING LANGUAGES</h3>
            <div class="card__content">
              <div class="card__text">C</div>
              <div class="card__text">C++</div>
              <div class="card__text">Java</div>
              <div class="card__text">Python</div>
            </div>
            <Link to="/languages">
              <button class="card-btn">Know More</button>
            </Link>
          </div>
          <div class="card">
            <h3 class="card___title">FRAMEWORKS/LIBRARIES</h3>
            <div class="card__content">
              <div class="card__text">Angular JS</div>
              <div class="card__text">ReactJS</div>
              <div class="card__text">Pygame</div>
            </div>
            <Link to="/frameworks">
              <button class="card-btn">Know More</button>
            </Link>
          </div>
          <div class="card">
            <h3 class="card___title">DATABASES</h3>
            <div class="card__content">
              <div class="card__text">SQL</div>
              <div class="card__text">MongoDB</div>
            </div>
            <Link to="/databases">
              <button class="card-btn">Know More</button>
            </Link>
          </div>
          <div class="card">
            <h3 class="card___title">TOOLS</h3>
            <div class="card__content">
              <div class="card__text">GitHub</div>
              <div class="card__text">VS Code</div>
              <div class="card__text">Sublime Text</div>
              <div class="card__text">NPM</div>
              <div class="card__text">Linux Terminal</div>
            </div>
            <Link to="/tools">
              <button class="card-btn">Know More</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Tags;

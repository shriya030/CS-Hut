import React from "react";
import NavBar from "../HomePage/NavBar";
import "./Languages.css";
import languages from "../Data/Languages.js";
import { Link } from "react-router-dom";

function Languages() {
  return (
    <div>
      <div class="techLang">
        {languages.map(lang => (
          <div class="flip-card-container">
            <div class="flip-card">
              <div class="card-front">
                <figure>
                  <div class="img-bg"></div>
                  <img src={lang.image} alt="" />
                  <figcaption>{lang.name}</figcaption>
                </figure>
                <ul>
                  <p>{lang.description}</p>
                </ul>
              </div>

              <div class="card-back">
                <figure>
                  <div class="img-bg"></div>
                  <img src={lang.image} alt="Brohm Lake" />
                </figure>

                <Link to={lang.learnPath}>
                  <button>Learn</button>
                </Link>

                <button>Projects</button>

                <div class="design-container">
                  <span class="design design--1"></span>
                  <span class="design design--2"></span>
                  <span class="design design--3"></span>
                  <span class="design design--4"></span>
                  <span class="design design--5"></span>
                  <span class="design design--6"></span>
                  <span class="design design--7"></span>
                  <span class="design design--8"></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Languages;

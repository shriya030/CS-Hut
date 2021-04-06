import React from "react";
import "./Tech.css";
import technologies from "../Data/Technologies";
import { Link } from "react-router-dom";
function ProjectIdeas() {
  return (
    <div>
      <div className="headings">Technologies</div>
      <div class="technology modifier">
        {technologies.map(tech => (
          <div class="flip-card-container">
            <div class="flip-card">
              <div class="card-front">
                <figure>
                  <div class="img-bg"></div>
                  <img className="langpic techpic" src={tech.image} alt="" />
                  <figcaption>{tech.heading}</figcaption>
                </figure>
                <ul>
                  <p>{tech.description}</p>
                </ul>
              </div>

              <div class="card-back">
                <figure>
                  <div class="img-bg"></div>
                  <img className="langpic" src={tech.image} alt="" />
                </figure>

                <button>Learn</button>
                <Link to={tech.projPath}>
                  <button>Projects</button>
                </Link>

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

export default ProjectIdeas;

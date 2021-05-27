import React from "react";
// import "./Tech.css";
import technologies from "../Data/Technologies";
import { Link } from "react-router-dom";
function ProjectIdeas() {
  return (
    <div className="lang">
      <div className="headings">Technologies</div>
      <div class="languages">
        {technologies.map(tech => (
          <div class="flip-card-container">
            <div class="flip-card">
              <div class="card-front">
                <figure>
                  <div class="img-bg"></div>
                  <img src={tech.image} alt="" />
                  <figcaption>{tech.heading}</figcaption>
                </figure>
              </div>

              <div class="card-back">
                <figure>
                  <div class="img-bg"></div>
                  <img src={tech.image} alt="Brohm Lake" />
                </figure>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ marginBottom: "5%", marginLeft: "9vh" }}>
                    <Link to={tech.learnPath}>
                      <button>Learn</button>
                    </Link>
                  </div>
                  <div style={{ marginLeft: "3vh" }}>
                    <Link to="">
                      <button>Documentation</button>
                    </Link>
                  </div>
                </div>

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

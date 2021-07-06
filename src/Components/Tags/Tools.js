import React from "react";
import tools from "../../Data/Tools";
import "./styles.css";
import { Link } from "react-router-dom";

function Tools() {
    return(
        <div className="lang">
      <div className="headings">Tools</div>
      <div class="languages">
        {tools.map(tool => (
          <div class="flip-card-container">
            <div class="flip-card">
              <div class="card-front">
                <figure>
                  <div class="img-bg"></div>
                  <img src={tool.image} alt="" />
                  <figcaption>{tool.title}</figcaption>
                </figure>
              </div>

              <div class="card-back">
                <figure>
                  <div class="img-bg"></div>
                  <img src={tool.image} alt="Brohm Lake" />
                </figure>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ marginBottom: "5%", marginLeft: "9vh" }}>
                    <Link to={tool.path}>
                      <button>Learn</button>
                    </Link>
                  </div>
                  <div style={{ marginLeft: "3vh" }}>
                    <a href={tool.documentation} target="_blank" rel="noreferrer">
                      <button>Documentation</button>
                    </a>
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
    )
}

export default Tools;
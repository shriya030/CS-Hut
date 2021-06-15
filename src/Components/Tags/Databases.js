import React from "react";
import Databases from "../../Data/Databases";
import "./styles.css";
import { Link } from "react-router-dom";

function Database() {
  return (
    <div className="lang">
      <div className="headings">Databases</div>
      <div class="languages">
        {Databases.map(database => (
          <div class="flip-card-container">
            <div class="flip-card">
              <div class="card-front">
                <figure>
                  <div class="img-bg"></div>
                  <img src={database.image} alt="" />
                  <figcaption>{database.title}</figcaption>
                </figure>
              </div>

              <div class="card-back">
                <figure>
                  <div class="img-bg"></div>
                  <img src={database.image} alt="Brohm Lake" />
                </figure>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ marginBottom: "5%", marginLeft: "9vh" }}>
                    <Link to={database.path}>
                      <button>Learn</button>
                    </Link>
                  </div>
                  <div style={{ marginLeft: "3vh" }}>
                    <a href={database.documentation}>
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
  );
}

export default Database;

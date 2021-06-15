import React from "react";
import "./Tags.css";
import { Link } from "react-router-dom";

function Tags() {
  return (
    <div className="tags">
      <div className="headings">Tags</div>
      <div class="cards">
        <Link to="/languages">
          <div class="cards__item">
            <div class="card">
              <div class="card__content">
                <div class="card__title">Programming Languages</div>
                <p class="card__text">C, C++, Java, Python,....</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/frameworks">
          <div class="cards__item">
            <div class="card">
              <div class="card__content">
                <div class="card__title">Frameworks/Libraries</div>
                <p class="card__text">AngularJS, ReactJS, Pygame,....</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/databases">
          <div class="cards__item">
            <div class="card">
              <div class="card__content">
                <div class="card__title">Databases</div>
                <p class="card__text">SQL, MongoDB, ....</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Tags;

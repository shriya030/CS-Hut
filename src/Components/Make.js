import React from "react";
import "./Make.css";

function Make(props) {
  console.log(props);
  return (
    <div class="make">
      <div className="headings">{props.name}</div>
      <div class="container">
        {props.resources.map(resource => (
          <div class="cards">
            <div class="face face1">
              <div class="content">
                <a href={resource.link}>
                  <img src={resource.image} alt="" />
                </a>

                <h3>{resource.name}</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>{resource.description}</p>
                <a href={resource.link}>Start Exploring!</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Make;

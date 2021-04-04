import React from "react";
import "./Learn.css";

function Learn(props) {
  return (
    <div>
      <div class="new">
        <div className="headings">{props.name}</div>
        <div class="box">
          {props.resources.map(resource => (
            <div class="card">
              <div class="imgBx">
                {console.log("*********" + props.name)}
                <a href={resource.link}>
                  <img src={resource.image} alt="images" />
                </a>
              </div>
              <div class="details">
                <h2>{resource.name}</h2>
                <a className="harry" href={resource.image}>
                  {resource.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Learn;

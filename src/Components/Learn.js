import React from "react";
import "./Learn.css";

function Learn(props) {
  return (
    <div className="learn">
      <div className="headings">{props.name}</div>
      <div class="container">
        <div class="card">
          <h3 class="title">Youtube</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle class="stroke" cx="60" cy="60" r="50" />
            </svg>
          </div>
        </div>
        <div class="card">
          <h3 class="title">Websites</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle class="stroke" cx="60" cy="60" r="50" />
            </svg>
          </div>
        </div>
        <div class="card">
          <h3 class="title">Courses</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle class="stroke" cx="60" cy="60" r="50" />
            </svg>
          </div>
        </div>
        <div class="card">
          <h3 class="title">Tips/Tricks</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle class="stroke" cx="60" cy="60" r="50" />
            </svg>
          </div>
        </div>
        <div class="card">
          <h3 class="title">Github</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle class="stroke" cx="60" cy="60" r="50" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;

{
  /* <div class="new">
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
</div>; */
}

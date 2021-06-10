import React from "react";
import "./Learn.css";
import { FaYoutube, FaLightbulb, FaBookOpen, FaGithub } from "react-icons/fa";
import { MdBookmark } from "react-icons/md";

function Learn(props) {
  console.log(props.content.courses);
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
          <ul>
            {props.content.youtube.map((link, i) => (
              <li>
                <a style={{ color: "white" }} href={link} target="_blank">
                  <FaYoutube
                    size={20}
                    style={{ fill: "white", marginRight: "1vw" }}
                  />
                  Watch
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div class="card">
          <h3 class="title">Websites</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <ul>
            {props.content.websites.map((link, i) => (
              <li>
                <a style={{ color: "white" }} href={link} target="_blank">
                  <MdBookmark
                    size={20}
                    style={{ fill: "white", marginRight: "1vw" }}
                  />
                  Open
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div class="card">
          <h3 class="title">Courses</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <ul>
            {props.content.courses.map((link, i) => (
              <li>
                <a style={{ color: "white" }} href={link} target="_blank">
                  <FaBookOpen
                    size={20}
                    style={{ fill: "white", marginRight: "1vw" }}
                  />
                  Learn
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div class="card">
          <h3 class="title">Tips/Tricks</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <ul>
            {props.content.tips.map((link, i) => (
              <li>
                <a style={{ color: "white" }} href={link} target="_blank">
                  <FaLightbulb
                    size={20}
                    style={{ fill: "white", marginRight: "1vw" }}
                  />
                  Tips
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div class="card">
          <h3 class="title">Github</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <ul>
            {props.content.github.map((link, i) => (
              <li>
                <a style={{ color: "white" }} href={link} target="_blank">
                  <FaGithub
                    size={20}
                    style={{ fill: "white", marginRight: "1vw" }}
                  />
                  Clone
                </a>
              </li>
            ))}
          </ul>
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

import React from "react";
import "./Learn.css";
import { FaYoutube, FaLightbulb, FaBookOpen, FaGithub } from "react-icons/fa";
import { MdBookmark } from "react-icons/md";
import {motion} from 'framer-motion'

function Learn(props) {
  console.log(props.content.courses);
  return (
    <motion.div initial={{scaleY:0}} animate={{scaleY:1}} transition={{duration:0.5}} >
    <div  className="learn" >
      <div className="headings">{props.name}</div>
      <div className="course-container">
        <div className="course-card">
          <h3 className="course-title">Youtube</h3>
          <ul className="course-list">
            {props.content.youtube.map((link, i) => (
              <li key={link} className="course-list-item">
                <a style={{ color: "white" }} href={link} target="_blank" rel="noopener noreferrer">
                  <FaYoutube
                    size={20}
                    style={{ fill: "white", marginRight: "1vw" }}
                  />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="course-card">
          <h3 className="course-title">Websites</h3>
          <ul className="course-list">
            {props.content.websites.map((link, i) => (
              <li key={link} className="course-list-item">
                <a style={{ color: "white" }} href={link} target="_blank" rel="noopener noreferrer">
                  <MdBookmark
                    size={20}
                    style={{ fill: "white", marginRight: "1vw" }}
                  />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="course-card">
          <h3 className="course-title">Courses</h3>
          <ul className="course-list">
            {props.content.courses.map((link, i) => (
              <li key={link} className="course-list-item">
                <a style={{ color: "white" }} href={link} target="_blank" rel="noopener noreferrer">
                  <FaBookOpen
                    size={20}
                    style={{ fill: "white", marginRight: "1vw" }}
                  />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="course-card">
          <h3 className="course-title">Tips/Tricks</h3>
          <ul className="course-list">
            {props.content.tips.map((link, i) => (
              <li key={link} className="course-list-item">
                <a style={{ color: "white" }} href={link} target="_blank" rel="noopener noreferrer">
                  <FaLightbulb
                    size={20}
                    style={{ fill: "white", marginRight: "1vw" }}
                  />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="course-card">
          <h3 className="course-title">Github</h3>
          <ul className="course-list">
            {props.content.github.map((link, i) => (
              <li key={link} className="course-list-item">
                <a style={{ color: "white" }} href={link} target="_blank" rel="noopener noreferrer">
                  <FaGithub
                    size={20}
                    style={{ fill: "white", marginRight: "1vw" }}
                  />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default Learn;

  /* <div className="new">
  <div classNameName="headings">{props.name}</div>
  <div className="box">
    {props.resources.map(resource => (
      <div className="card">
        <div className="imgBx">
          {console.log("*********" + props.name)}
          <a href={resource.link}>
            <img src={resource.image} alt="images" />
          </a>
        </div>
        <div className="details">
          <h2>{resource.name}</h2>
          <a classNameName="harry" href={resource.image}>
            {resource.title}
          </a>
        </div>
      </div>
    ))}
  </div>
</div>; */

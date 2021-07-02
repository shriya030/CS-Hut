import React from "react";
import "./Learn.css";
import { FaYoutube, FaLightbulb, FaBookOpen, FaGithub } from "react-icons/fa";
import { MdBookmark } from "react-icons/md";
import {motion} from 'framer-motion'
const pageTransition ={
  in:{
      opacity:1,
        x:0
  },
  out:{
      opacity:0,
       x:"-100%"
      
  }
}
const pageTransition2 ={
  in:{
      opacity:1,
        x:0
  },
  out:{
      opacity:0,
       x:"100%"
      
  }
}
function Learn(props) {
  console.log(props.content.courses);
  return (
    <motion.div initial={{scaleY:0}} animate={{scaleY:1}} transition={{duration:0.5}} >
    <div  className="learn" >
      <div classNameName="headings">{props.name}</div>
      <div className="container">
        <motion.div exit='out' animate="in" initial="out" transition={{delay:0.5}} variants={pageTransition} className="card">
          <h3 className="title">Youtube</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <ul>
            {props.content.youtube.map((link, i) => (
              <li>
                <a style={{ color: "white" }} href={link} target="_blank" rel="noreferrer">
                  <FaYoutube
                    size={20}
                    style={{ fill: "white", marginRight: "1vw" }}
                  />
                  Watch
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div exit='out' animate="in" initial="out" variants={pageTransition} transition={{delay:0.5}} className="card">
          <h3 className="title">Websites</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <ul>
            {props.content.websites.map((link, i) => (
              <li>
                <a style={{ color: "white" }} href={link} target="_blank" rel="noreferrer">
                  <MdBookmark
                    size={20}
                    style={{ fill: "white", marginRight: "1vw" }}
                  />
                  Open
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
        <div className="card">
          <h3 className="title">Courses</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <ul>
            {props.content.courses.map((link, i) => (
              <li>
                <a style={{ color: "white" }} href={link} target="_blank" rel="noreferrer">
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
        <motion.div className="card" variants={pageTransition2} initial="out" transition={{delay:0.5}} animate="in" exit="out" >
          <h3 className="title">Tips/Tricks</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <ul>
            {props.content.tips.map((link, i) => (
              <li>
                <a style={{ color: "white" }} href={link} target="_blank" rel="noreferrer">
                  <FaLightbulb
                    size={20}
                    style={{ fill: "white", marginRight: "1vw" }}
                  />
                  Tips
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div className="card"  variants={pageTransition2} initial="out" transition={{delay:0.5}} animate="in" exit="out">
          <h3 className="title">Github</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <ul>
            {props.content.github.map((link, i) => (
              <li>
                <a style={{ color: "white" }} href={link} target="_blank" rel="noreferrer">
                  <FaGithub
                    size={20}
                    style={{ fill: "white", marginRight: "1vw" }}
                  />
                  Clone
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
    </motion.div>
  );
}

export default Learn;

{
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
}

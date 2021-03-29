import React from "react";
import NavBar from "../HomePage/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TechLang.css";
import { Link } from "react-router-dom";

function TechLang() {
  return (
    <div className="divider">
      <div className="ques">What would you like to get help with today?</div>
      <div className="resources rheading">
        <Link
          to="/Languages"
          style={{ textDecoration: "none", color: "white" }}
        >
          Languages
          <p className="para">
            Explore a variety of learning resources based on the choice of your
            interest
          </p>
        </Link>
      </div>

      <div className="projects pheading">
        {/* <Link> will essentially return a standard <a> tag, which is why we apply textDecoration rule there. */}
        <Link to="/Tech" style={{ textDecoration: "none", color: "white" }}>
          Technologies
          <p className="para">
            Discover a list of interesting topics on different domains
          </p>
        </Link>
      </div>
    </div>
  );
}

export default TechLang;

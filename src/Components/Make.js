import React from "react";
import "./Maketemp.css";

function Make(props) {
  console.log(props);
  return (
    <div className="make">
      <div class="make-container">
        {props.resources.map(resource => (
          <div class="make-card">
            <div class="make-face make-face1">
              <div class="make-content">
                <div class="icon">
                  {/* <i class="fa fa-linkedin-square" aria-hidden="true"></i> */}
                  <img src={resource.image} alt="" />
                </div>
              </div>
            </div>
            <div class="make-face make-face2">
              <div class="make-content">
                <h3>
                  <a
                    href="https://www.linkedin.com/in/adamdipinto/"
                    target="_blank"
                  >
                    _adamdipinto
                  </a>
                </h3>
                <p>
                  This is where I network and build my professional protfolio.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Make;

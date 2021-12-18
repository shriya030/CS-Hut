import React from "react";
import "./Banner.css";
import BackGround from "../Video/bannerback.mp4";
import Typed from "react-typed";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: "50%",
          width: "100%",
          height: "100%",
          left: "50%",
          right: "50%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: -1
        }}
      >
        <source src={BackGround} type="video/mp4" />
      </video>
      <div className="banner-heading">
        <h2>CS Hut</h2>
        <p>
          {" "}
          <Typed
            strings={[
              "Your Guide to learn and apply in-demand technologies, all under one HUT !!"
            ]}
            typeSpeed={40}
          ></Typed>{" "}
        </p>

        <Link to="/tags">
          <button variant="contained">Let's Begin</button>
        </Link>
      </div>

      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
    </div>
  );
}

export default Banner;

import React from "react";
import "./Banner.css";
import BackGround from "../Video/bannerback.mp4";
import Typed from "react-typed";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      {/* <div className='banner-img'>
            <div class="waveWrapper waveAnimation">
  <div class="waveWrapperInner bgTop">
    <div class="wave waveTop"></div>
  </div>
  <div class="waveWrapperInner bgMiddle">
    <div class="wave waveMiddle"></div>
  </div>
  <div class="waveWrapperInner bgBottom">
    <div class="wave waveBottom"></div>
  </div>
</div>
            </div> */}
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
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            ]}
            typeSpeed={40}
            backSpeed={0}
            loop={true}
          ></Typed>{" "}
        </p>

        <Link to="/techLang">
          <button variant="contained">Let's Begin</button>
        </Link>
      </div>

      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
    </div>
  );
}

export default Banner;

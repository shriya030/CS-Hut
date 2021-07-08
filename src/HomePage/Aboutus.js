import React from "react";
import "./Aboutus.css";
import Banner from "./Banner";
import Footer from "./Footer";
import weblogo from "./Images/logo.png";

function Aboutus() {
  return (
    
      <div id="ab">
        {/*About us Header */}
        <Banner />
    <div className="aboutus">
      <h1>About us</h1>
      <br className="line" />
      <div className="about">
        <img src={weblogo} alt="" />

        <div className="about-content">
          <h1>Who we are</h1>
          <p>
            Talent is Universal, but opportunities are not. With access to
            online learning resources and instruction, anyone, anywhere, can
            gain skills and trasnsform their lives in meaningful ways. We
            believe that world's best teachers aren't always found in
            classrooms. They can come from virtually every country !! That's why
            we have tried to gather the best resources from instructors and
            organisations who are passionate about sharing their knowledge and
            helping students. They are experts who stay active in their fields
            in order to deliver the most up-to-date content. In short, we have
            done our best possible to help you in your journey to excel.
          </p>
        </div>
      </div>
    </div>
    {/*About us Footer */}
    <Footer />
      </div>
  );
}

export default Aboutus;

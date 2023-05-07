import React from "react";
import "./ContactUs.css";
import { motion } from "framer-motion";
export default function ContactUs() {
  const pageTransition = {
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: "-100%"
    }
  };

  return (
    <motion.div
      exit="out"
      animate="in"
      initial="out"
      transition={{ duration: 1 }}
      variants={pageTransition}
    >
      <section style={{ marginTop: "-35px" }}>
        <div className="container">
          <div className="parent_div ">
            <div className="child_div">
              <h1 className="h1tag"> contact us </h1>
            </div>

            <form
              className="form"
              action="https://formsubmit.co/ashreyjairath@gmail.com"
              method="POST"
            >
              <div className="form-group">
                <label className="labels"> Full Name </label>
                <input
                  name="user-name"
                  type="text"
                  className="form-control boder shadow"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label className="labels"> Email address </label>
                <input
                  name="email"
                  type="email"
                  className="form-control boder shadow"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label className="labels"> message </label>
                <textarea
                  name="message"
                  className="form-control boder shadow"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  style={{ resize: "none" }}
                  required
                >
                  {" "}
                </textarea>
              </div>
              <br></br>
              <button
                type="submit"
                className="btn"
                style={{ background: "skyblue" }}
              >
                {" "}
                <span> Submit </span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

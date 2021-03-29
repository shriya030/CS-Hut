import React from "react";
import "./Learn.css";
import NavBar from "../HomePage/NavBar";

function Learn(props) {
  return (
    <div>
      <div class="new">
        {/* <div className='headings'>C++</div> */}
        <div class="box">
          <div class="card">
            <div class="imgBx">
              {console.log("*********" + props.name)}
              <a href={props.link}>
                <img src={props.image} alt="images" />
              </a>
            </div>
            <div class="details">
              <h2>{props.name}</h2>
              <a className="harry" href={props.image}>
                Start Learning !
              </a>
            </div>
          </div>

          <div class="card">
            <div class="imgBx">
              <img
                src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="images"
              />
            </div>
            <div class="details">
              <h2>SomeOne Famous</h2>
            </div>
          </div>

          <div class="card">
            <div class="imgBx">
              <img
                src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="images"
              />
            </div>
            <div class="details">
              <h2>SomeOne Famous</h2>
            </div>
          </div>

          <div class="card">
            <div class="imgBx">
              <img
                src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="images"
              />
            </div>
            <div class="details">
              <h2>SomeOne Famous</h2>
            </div>
          </div>

          <div class="card">
            <div class="imgBx">
              <img
                src="https://images.unsplash.com/photo-1548094878-84ced0f6896d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="images"
              />
            </div>
            <div class="details">
              <h2>SomeOne Famous</h2>
            </div>
          </div>

          <div class="card">
            <div class="imgBx">
              <img
                src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="images"
              />
            </div>
            <div class="details">
              <h2>SomeOne Famous</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;

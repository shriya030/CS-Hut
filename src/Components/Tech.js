import React from 'react'
import './TechLang.css';
import NavBar from '../HomePage/NavBar.js'
import Technologies from '../Data/Technologies.json';
import {Link} from 'react-router-dom';
function  ProjectIdeas() {
    return (
        <div>
            <NavBar />
            <div class='techLang' >
            {Technologies.map((tech) => (
              <div class="flip-card-container" >
  <div class="flip-card">

    <div class="card-front">
      <figure>
        <div class="img-bg"></div>
        <img className='langpic techpic' src={tech.image} alt=""  />
        <figcaption>{tech.name}</figcaption>
      </figure>
      <ul>
       <p>{tech.description}</p>
      </ul>

      
      
    </div>

    <div class="card-back">
      <figure>
        <div class="img-bg"></div>
        <img className='langpic' src={tech.image} alt="" />
      </figure>

      <button>Learn</button>
      <React.Fragment>
      <Link to ={tech.proj}>
      <button>Projects</button>
      </Link>
      
      </React.Fragment>
     
      

      <div class="design-container">
        <span class="design design--1"></span>
        <span class="design design--2"></span>
        <span class="design design--3"></span>
        <span class="design design--4"></span>
        <span class="design design--5"></span>
        <span class="design design--6"></span>
        <span class="design design--7"></span>
        <span class="design design--8"></span>
      </div>
    </div>

  </div>
</div>
            ))}
            



</div>

        </div>
    )
}

export default ProjectIdeas;
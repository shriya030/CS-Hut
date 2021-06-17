import React from 'react';
import './Resources.css';

function Resources() {
    return (
        <div className="container">
  <div className="card cs">
    <h2>Learning Frontend</h2>
    <p>🎥<a href="https://thegymnasium.com/" >Gynasium:</a> learn web development with online video courses</p>
    <p>💻 <a href="https://www.freecodecamp.org/" >freeCodeCamp:</a> learn hands-on with guided interactive tutorials</p>
    <p>💻<a href="https://developer.mozilla.org/en-US/docs/Learn" > MDN: Learn Web Development:</a> read guides and experiment with interactive examples</p>
    <p>🎥[Paid] <a href ="https://frontendmasters.com/" >Frontend Masters:</a> video courses on specific technologies from some of today's best experts</p>
  </div>
  <div className="card cs">
  <h2>CSS Resources</h2>
  <p>📃<a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"> CSS-Tricks Flexbox Cheatsheet: </a> a single-page reference for flexbox</p>
  <p>🎥<a href="https://cssgrid.io/"> CSSGrid.io Video Course: </a> a video course from Wes Bos teaching CSS Grid layout</p>
  <p>📖<a href="https://gridbyexample.com/"> GridByExample:</a> articles and examples of CSS Grid layout techniques by Rachel Andrew</p>
  <p>📃<a href="https://css-tricks.com/snippets/css/complete-guide-grid/"> CSS-Tricks Grid Cheatsheet:</a> single-page reference for CSS Grid layout</p>
  </div>
<div className="card cs">
<h2>Learning Full Stack</h2>
<p>🎓 <a href="https://www.coursera.org/browse/computer-science/mobile-and-web-development">Coursera:</a> courses from universities including video, text, and interactive environments on many topics</p>
<p>📖<a href="https://www.theodinproject.com/"> The Odin Project:</a> learn web development through building a Ruby on Rails application with this guidebook</p>
<p>💻<a href="https://www.codecademy.com/"> Codecademy:</a> follow interactive tutorials to learn  new web development and programming skills </p>
</div>
<div className="card cs">
<h2>Learning Programming</h2>
<p>🔍<a href="https://hackr.io/">Hackr.io:</a>  find programming tutorials and courses by language</p>
<p>💻<a href="https://exercism.io/"> Exercism:</a> a community for doing coding exercises</p>
</div> 
  </div>
   )
}

export default Resources;

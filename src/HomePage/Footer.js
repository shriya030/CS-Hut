import React from "react";
import {Link} from 'react-router-dom'
import "./Footer.css";
function Footer() {
  const currentyear = new Date().getFullYear();
  return (
    <div>
      <div className="footer">
        <ul className="list">
          <li className="item">© {currentyear} All rights reserved</li>
          <li className="item">Efforts By Shriya</li>
          <Link style={{"width":"100%", textDecoration: 'none',"color":"white","margin-top":"30px","margin-left":"50px","border-bottom":"1px solid white" }} to="/contactus">
          <li>Send US Feedback</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

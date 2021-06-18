import React from "react";
import {Link} from 'react-router-dom'
import "./Footer.css";
function Footer() {
  return (
    <div>
      <div className="footer">
        <ul className="list">
          <li className="item">© 2021 All rights reserved</li>
          <li className="item">Efforts By Shriya</li>
          <Link style={{"width":"100%", textDecoration: 'none',"color":"white","margin-top":"30px","margin-left":"50px","border-bottom":"1px solid white" }} to="/feedback">
          <li>Send US Feedback</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

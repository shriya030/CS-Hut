import React, { useState } from "react";
import "./NavBar.css";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconContext } from "react-icons";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { MdComputer, MdContactMail } from "react-icons/md";
import NavLogo from "./Images/NavLogo.png";
//Hashlink to go to about section from any page
import { HashLink } from "react-router-hash-link";

function NavBar() {
  const [NavBar, setNavBar] = useState(false);

  const ChangeBackground = () => {
    if (window.scrollY > 220) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", ChangeBackground);
  return (
    <IconContext.Provider
      value={{ color: "white", size: "2rem", padding: "20px" }}
    >
      <div>
        <Navbar
          fixed="top"
          expand="lg"
          variant="dark"
          className={NavBar ? "navBar active" : "navBar"}
        >
          <Navbar.Brand href="/">
            <img src={NavLogo} alt="" className="nav-img" />
            CS Hut
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="custom-toggler"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <FaHome />
              <Nav.Link href="/">Home</Nav.Link>
              <div className="borderbottom"></div>
              <MdComputer />
              <Nav.Link href="/Tags">Resources</Nav.Link>
              <div className="borderbottom"></div>
              <FaInfoCircle />
              <Nav.Link>
                <HashLink className="hash-link" to="/#ab">
                  About
                </HashLink>
              </Nav.Link>
              <div className="borderbottom"></div>
              <MdContactMail />
              <Nav.Link href="/contactus">Contact</Nav.Link>
              <div className="borderbottom"></div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </IconContext.Provider>
  );
}

export default NavBar;

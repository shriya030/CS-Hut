import React, { useState } from "react";
import "./NavBar.css";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconContext } from "react-icons";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { MdComputer, MdContactMail } from "react-icons/md";
import NavLogo from "./NavLogo.png";

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
          <Navbar.Brand href="#home">
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
              <MdComputer />
              <Nav.Link href="#link">Resources</Nav.Link>
              <FaInfoCircle />
              <Nav.Link href="#about">About</Nav.Link>
              <MdContactMail />
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </IconContext.Provider>
    // <div className='navbar'>
    // <div className="brandName">
    //     <img className='logo' src={brandIcon} alt='' />
    //     <h1 className='title'>TITLE</h1>
    // </div>
    // <div className="navbutton">
    //     <img src={homeIcon} alt='' /><a href='#home'>HOME</a>
    //     <a href='#about'>ABOUT</a>
    //     <a href='#resources'>RESOURCES</a>
    //     <a href='#contact'>CONTACT</a>
    // </div>
    //     </div>
  );
}

export default NavBar;

import React from "react";
import "./navbar.css";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { useState } from "react";

const Navbar = () => {
  const [ active, setActive ] = useState("navBar");
  // function for toggle navbar

  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  // Remov navbar
  const removeNavbar = () => {
    setActive('navBar');
  };

  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="navbar" className="logo flex">
            <h1>
              <SiYourtraveldottv className="icon" />. Tours & Travels.
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItems">
              <a href="Home" className="navLink-1" id="home-nav">
                Home
              </a>
            </li>
            <li className="navItems">
              <a href="Packeges" className="navLink">
                Packeges
              </a>
            </li>
            <li className="navItems">
              <a href="Shop" className="navLink">
                Shop
              </a>
            </li>
            <li className="navItems">
              <a href="About" className="navLink">
                About
              </a>
            </li>
            <li className="navItems">
              <a href="Pages" className="navLink">
                Pages
              </a>
            </li>
            <li className="navItems">
              <a href="News" className="navLink">
                News
              </a>
            </li>
            <li className="navItems">
              <a href="Contact" className="navLink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="Book Now">Book Now</a>
            </button>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <PiDotsNineBold className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;

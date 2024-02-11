import React, { useEffect, useRef, useState } from "react";
import "../Style/Component/Navbar.css";
import {FaBars, FaInstagramSquare, FaLinkedin, FaWhatsappSquare} from 'react-icons/fa'
// import {MdOutlineClose} from "react-icons/md"
import logo from "../Assets/a_initial-removebg-preview 1.png"

const Navbar = () => {
  document.title = "Amar Abdullah"
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  let handleMenuItemClick = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    let handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleMenuItemClick);
    };
  }, []);

  return (
    <nav >
      <ul className="nav-bar">
        <li className="logo"><a><img src={logo} alt="logo" /></a></li>
        <span className="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#tools">Tools</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#certificate">Certificate</a></li>
        </span>
        <label className={`open-menu ${isOpen ? 'open' : ""}`} onClick={toggleMenu}><i className="fas fa-bars"><FaBars/></i></label>
      </ul>
      <div ref={menuRef} className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className="">
          <li><a href="#home" onClick={handleMenuItemClick}>Home</a></li>
          <li><a href="#about" onClick={handleMenuItemClick}>About</a></li>
          <li><a href="#skills" onClick={handleMenuItemClick}>Skills</a></li>
          <li><a href="#tools" onClick={handleMenuItemClick}>Tools</a></li>
          <li><a href="#project" onClick={handleMenuItemClick}>Project</a></li>
          <li><a href="#certificate" onClick={handleMenuItemClick}>Certificate</a></li>
        </ul>
        <div className="contact">
          <a href=""><FaWhatsappSquare/></a>
          <a href=""><FaInstagramSquare/></a>
          <a href=""><FaLinkedin/></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

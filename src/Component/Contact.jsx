import React from "react";
import "../Style/Component/Contact.css";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  let contact = [
    { nama: <FaWhatsappSquare />, title: "Whatsapp", href: ''},
    { nama: <FaInstagramSquare />, title: "Instagram", href: 'https://www.instagram.com/75_mar/' },
    { nama: <FaLinkedin />, title: "Linkedin", href: 'https://www.linkedin.com/in/amar-abdullah/' },
  ];

  return (
    <>
      {contact.map((item) => {
        return (
          <div className="contact-container">
            <div className="left">
              <Link to={item.href}>{item.nama}</Link>
            </div>
            <div className="right">
              <p><Link to={item.href}>{item.title}</Link></p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Contact;

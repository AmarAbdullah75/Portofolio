import React, { useState } from "react";
import "../Style/Page/Certificate.css";
import react from "../Assets/React + Redux.png";
import web from "../Assets/Web Development.png";
import responsive from "../Assets/Responsive Web Design.png";
import figma from "../Assets/Get Start With Figma.png";
import { MdZoomOutMap } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import {FaGoogleDrive} from 'react-icons/fa'
import { Link } from "react-router-dom";

const Certificate = () => {
  const [tampil, setTampil] = useState(false);
  const [gambarIndex, setGambarIndex] = useState(0);

  let certificate = [
    { nama: react, alt: "React + Redux" },
    { nama: web, alt: "Web Development" },
    { nama: responsive, alt: "Responsive Web Design" },
    { nama: figma, alt: "Get Start With Figma" },
  ];
  let showDetail = (index) => {
    setGambarIndex(index);
    setTampil(true);
  };

  return (
    <article className="certificate" id="certificate">
      <div className="certificate-title">CERTIFICATE</div>
      <div className="certificate-container">
        {certificate.map((item, id) => {
          return (
            <div key={id} className="certificate-card">
              <div className="certificate-content">
                <img src={item.nama} alt={item.alt} />
                <MdZoomOutMap
                  className="certificate-icon"
                  onClick={() => showDetail(id)}
                />
              </div>
              {tampil && gambarIndex === id && (
                <div className="certificate-detail">
                  <div className="certificate-gambar">
                    <img
                      src={certificate[gambarIndex].nama}
                      alt={certificate[gambarIndex].alt}
                    />
                  </div>
                  <div
                    onClick={() => setTampil(false)}
                    className="certificate-close"
                  >
                    <IoMdClose />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="certificate-button">
        <button><Link to="https://drive.google.com/drive/u/0/folders/1Qh4A38arxQWC9zHH3AFXdq-5b7Ruu9tV"><FaGoogleDrive/>Click for more</Link></button>
      </div>
    </article>
  );
};

export default Certificate;

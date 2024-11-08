import React, { useState } from 'react';
import '../Style/Page/Certificate.css';
import react from '../Assets/React + Redux.png';
import web from '../Assets/Web Development.png';
import responsive from '../Assets/Responsive Web Design.png';
import figma from '../Assets/Get Start With Figma.png';
import { MdZoomOutMap } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { FaGoogleDrive } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Certificate = () => {
    const [tampil, setTampil] = useState(false);
    const [gambarIndex, setGambarIndex] = useState(0);
    const [open, setOpen] = useState(false);

    let certificate = [
        { nama: react, alt: 'React + Redux' },
        { nama: web, alt: 'Web Development' },
        { nama: responsive, alt: 'Responsive Web Design' },
        { nama: figma, alt: 'Get Start With Figma' },
    ];
    let showDetail = (index) => {
        setGambarIndex(index);
        setTampil(true);
    };

    let openForm = () => {
        setOpen(true);
    };

    let closeForm = () => {
        setOpen(false);
    };

    return (
        <section className="certificate" id="certificate">
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
                                    <div onClick={() => setTampil(false)}
                                        className="certificate-close">
                                        <IoMdClose />
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            <div className="certificate-button">
                <button onClick={openForm}>Selengkapnya</button>
            </div>
            {open && (
                  <div class="formbold-main-wrapper">
                  <div class={`formbold-form-wrapper ${open ? 'active' :''}`}>
                    <form action="https://formbold.com/s/FORM_ID" method="POST">
                        {/* <div class="formbold-steps">
                            <ul>
                                <li class="formbold-step-menu1 active">
                                    <span>1</span>
                                    Sign Up
                                </li>
                                <li class="formbold-step-menu2">
                                    <span>2</span>
                                    Message
                                </li>
                                <li class="formbold-step-menu3">
                                    <span>3</span>
                                    Confirm
                                </li>
                            </ul>
                        </div> */}
                
                        <div class="formbold-form-step-1 active">
                          <div class="formbold-input-flex">
                            <div>
                                <label for="firstname" class="formbold-form-label"> First name </label>
                                <input
                                type="text"
                                name="firstname"
                                placeholder="Andrio"
                                id="firstname"
                                class="formbold-form-input"
                                />
                            </div>
                            <div>
                                <label for="lastname" class="formbold-form-label"> Last name </label>
                                <input
                                type="text"
                                name="lastname"
                                placeholder="Dolee"
                                id="lastname"
                                class="formbold-form-input"
                                />
                            </div>
                          </div>
                  
                          <div class="formbold-input-flex">
                              <div>
                                  <label for="dob" class="formbold-form-label"> Date of Birth </label>
                                  <input 
                                  type="date" 
                                  name="dob" 
                                  id="dob" 
                                  class="formbold-form-input"
                                  />
                              </div>
                              <div>
                                  <label for="email" class="formbold-form-label"> Email Address </label>
                                  <input
                                  type="email"
                                  name="email"
                                  placeholder="example@mail.com"
                                  id="email"
                                  class="formbold-form-input"
                                  />
                              </div>
                          </div>
                  
                          <div>
                              <label for="address" class="formbold-form-label"> Address </label>
                              <input
                              type="text"
                              name="address"
                              id="address"
                              placeholder="Flat 4, 24 Castle Street, Perth, PH1 3JY"
                              class="formbold-form-input"
                              />
                          </div>
                        </div>
                
                        <div class="formbold-form-step-2">
                          <div>
                            <label for="message" class="formbold-form-label"> Message </label>
                            <textarea
                              rows="6"
                              name="message"
                              id="message"
                              placeholder="Type your message"
                              class="formbold-form-input"
                            ></textarea>
                          </div>
                        </div>
                
                        <div class="formbold-form-step-3">
                          <div class="formbold-form-confirm">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                            </p>
                
                            <div>
                              <button class="formbold-confirm-btn active">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11" cy="11" r="10.5" fill="white" stroke="#DDE3EC"/>
                                <g clip-path="url(#clip0_1667_1314)">
                                <path d="M9.83343 12.8509L15.1954 7.48828L16.0208 8.31311L9.83343 14.5005L6.12109 10.7882L6.94593 9.96336L9.83343 12.8509Z" fill="#536387"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1667_1314">
                                <rect width="14" height="14" fill="white" transform="translate(4 4)"/>
                                </clipPath>
                                </defs>
                                </svg>
                                Yes! I want it.
                              </button>
                
                              <button class="formbold-confirm-btn">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11" cy="11" r="10.5" fill="white" stroke="#DDE3EC"/>
                                <g clip-path="url(#clip0_1667_1314)">
                                <path d="M9.83343 12.8509L15.1954 7.48828L16.0208 8.31311L9.83343 14.5005L6.12109 10.7882L6.94593 9.96336L9.83343 12.8509Z" fill="#536387"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1667_1314">
                                <rect width="14" height="14" fill="white" transform="translate(4 4)"/>
                                </clipPath>
                                </defs>
                                </svg>
                                No! I don’t want it.
                              </button>
                            </div>
                          </div>
                        </div>
                
                        <div class="formbold-form-btn-wrapper">
                          <button class="formbold-back-btn">
                            Back
                          </button>
                
                          <button class="formbold-btn">
                              Next Step
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1675_1807)">
                              <path d="M10.7814 7.33312L7.20541 3.75712L8.14808 2.81445L13.3334 7.99979L8.14808 13.1851L7.20541 12.2425L10.7814 8.66645H2.66675V7.33312H10.7814Z" fill="white"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_1675_1807">
                              <rect width="16" height="16" fill="white"/>
                              </clipPath>
                              </defs>
                              </svg>
                          </button>
                        </div>
                    </form>
                  </div>
                </div>
                )}
        </section>
    );
};

export default Certificate;

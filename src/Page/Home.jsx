import React, { useState } from 'react';
import '../Style/Page/Home.css';
import videoSrc from '../Assets/video/video.mp4';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
    let job = ["Programmer","Freelancer","Designer"]
    const [currentRole, setCurrentRole] = useState(job[0]);
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        let interval = setInterval(()=>{
            setIndex((prevIndex) => (prevIndex+1)%job.length)
        },2000)
        return () => clearInterval(interval)
    })
    useEffect(()=>{
        setCurrentRole(job[index])
    },[index])

    return (
        <section className="video-container" id="home">
            <video src={videoSrc} autoPlay loop muted>
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <h1>Hi I'm Amar Abdullah</h1>
                {/* <p>I'm <span class="typed">{currentRole}</span></p> */}
                {/* <input type="text" name="" id="" /> */}
                <button><a href="/#about">Selengkapnya</a></button>
                
            </div>
        </section>
    );
};

export default Home;

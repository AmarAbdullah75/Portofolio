import React from 'react';
import '../Style/Page/Project.css';
import Carousel from 'react-bootstrap/Carousel';
import drypit from '../Assets/img/drypit.png';
import aboga from '../Assets/img/aboga.png';
import muslimindo from '../Assets/img/muslimindo.png';
import warungmadura from '../Assets/img/warungmadura.png';

function UncontrolledExample() {
    let gambar = [
        { nama: drypit, title: 'DRYPIT' },
        { nama: aboga, title: 'ABOGA' },
        { nama: muslimindo, title: 'MUSLIM INDONESIA' },
        { nama: warungmadura, title: 'WARUNG MADURA' },
    ];
    return (
        <section className="project" id="project">
            <h1 className="project-title">PROJECT</h1>
            <Carousel className="carousel-container">
                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block mx-auto"
                        src={drypit}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>DRYPIT</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block mx-auto"
                        src={aboga}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>ABOGA</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block mx-auto"
                        src={muslimindo}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>MUSLIM INDONESIA</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                        className="d-block mx-auto"
                        src={warungmadura}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>WARUNG MADURA</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
}

export default UncontrolledExample;

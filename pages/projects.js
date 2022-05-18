import Image from 'next/image';
import React from "react";
import { Fade } from "react-awesome-reveal";
import remusis1 from '../assets/proyectosimg/remusis1.png';
import remusis2 from '../assets/proyectosimg/remusis2.png';
import Navbar from '../components/navbar';

export default function projects() {
    return (
        <React.Fragment>
            <Navbar />
            <div className='container mt-4'>
                <h1 className='text-white'>Sistema de remuneraciones</h1>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <Fade cascade='2' direction='down'>
                                <Image src={remusis1} className="d-block w-100" alt='Logo' />
                            </Fade>
                        </div>
                        <div className="carousel-item">
                            <Fade cascade='2' direction='down'>
                                <Image src={remusis2} className="d-block w-100" alt='Logo' />
                            </Fade>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <h3 className='text-white mt-3'>Diseñado con React js y Django REST</h3>

            </div>
        </React.Fragment>
    )
}

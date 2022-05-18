import Image from 'next/image'
import React from 'react'
import bannerpy from '../assets/img/bannerpy.png'
import mongodbimg from '../assets/img/mongodbimg.png'
import logoreact from '../assets/img/react-logo.png'

export default function carousel() {
    return (
        <div className='my-5'>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {/* <img src={logodjango}  alt="..." /> */}
                        <Image src={logoreact} className="d-block w-100" alt='Logo' />
                    </div>
                    <div className="carousel-item">
                        <Image src={mongodbimg} className="d-block w-100" alt='Logo' />
                    </div>
                    <div className="carousel-item">
                        <Image src={bannerpy} className="d-block w-100" alt='Logo' />
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
        </div>
    )
}

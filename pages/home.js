import React from 'react';
import { Fade } from "react-awesome-reveal";
import Navbar from '../components/navbar';
import Carrusel from '../pages/carousel';
import Styles from '../styles/home.module.css';

export default function home() {
    return (
        <React.Fragment>
            <Navbar />
            <div className={`${Styles.contenedor}`}>
                <header className={`${Styles.banner} d-flex justify-content-center align-items-center`}></header>
                <main className={Styles.contenedorMain}>
                    <section className='container mt-5 text-white'>
                        <Fade cascade direction='left'>
                            <h1>Bienvenido a mi portafolio</h1>
                        </Fade>
                        <Fade cascade direction='right'>
                            <p>
                                Hola, soy Israel Cabrera, soy un desarrollador de frontend, me apasiona programar y aprender cosas
                                nuevas por mi mismo, actualmente estoy aprendiendo Next.js y backend con Django Framework.
                                Mi objetivo es convertirme en un desarrollador FullStack.
                            </p>
                        </Fade>
                    </section>
                    <section className='container text-white'>
                        <Fade cascade='2' direction='left'>
                            <div>
                                <button className={Styles.botoncv}>DESCARGAR CV</button>
                            </div>
                        </Fade>
                    </section>
                    <section className='container mt-5'>
                        <Fade cascade='2' direction='left'>
                            <h3 className='text-white'>Proyectos recientes</h3>
                            <Carrusel />
                        </Fade>
                    </section>
                </main>
                {/* <div className={Styles.contenedorDots}>
                <li><a className="text-white p-2 fs-2 bi bi-github"></a></li>
                <li><a className="text-white p-2 fs-2 bi bi-linkedin"></a></li>
                <li><i className={`${Styles.dots} fs-1`}></i></li>
            </div> */}
                <footer className={`${Styles.piePagina} d-flex justify-content-center align-items-center`}>
                    <h3>Diseñado por Chaleco© 2022</h3>
                </footer>
            </div>
        </React.Fragment>
    )
}
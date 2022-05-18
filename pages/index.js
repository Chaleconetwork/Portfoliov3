import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Styles from '../styles/index.module.css';

export default function index() {
    return (
        <React.Fragment>
            <div className={`${Styles.contenedor} row`}>
                <div className={`${Styles.divs} mt-5 col-8 d-flex justify-content-center align-items-center`}>
                    <Fade cascade direction='down' duration={1000} fraction={0}>
                        <h1 className="text-white">Hola, soy Israel Cabrera</h1>
                    </Fade>
                </div>
                <div>
                    <Fade cascade direction='left' duration={1000} fraction={0}>
                        <h2 className="text-white">
                            Soy un programador Frontend que le encanta diseñar y aprender
                            cosas nuevas todos los días
                        </h2>
                    </Fade>
                </div>
                <div>
                    <Fade cascade direction='up' duration={1000} fraction={0}>
                        <Link href='/home'>
                            <button className={Styles.boton}>Comencemos!</button>
                        </Link>
                    </Fade>
                </div>
            </div>
        </React.Fragment>
    )
}

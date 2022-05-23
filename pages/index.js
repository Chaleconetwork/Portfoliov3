import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Styles from '../styles/index.module.css';

export default function index() {
    return (
        <React.Fragment>
            <div>
                <div className={`${Styles.sideleft}`}>
                    <div className={`${Styles.up} mt-5 mx-5 d-flex justify-content-center`}>
                        <Fade cascade direction='up' duration={1000} fraction={0}>
                            <h1 className="mt-5">Hola, soy Israel Cabrera</h1>
                        </Fade>
                    </div>
                    <div className={`${Styles.middle} d-flex justify-content-center`}>
                        <Fade cascade direction='up' duration={1000} fraction={0}>
                            <h2 className="text-white mx-5">
                                Soy un desarrollador web que disfruta 
                                de aprender cosas nuevas todos los días
                            </h2>
                        </Fade>
                    </div>
                    <div className={`${Styles.down} mt-5 d-flex justify-content-center`}>
                        <Fade cascade direction='up' duration={1000} fraction={0}>
                            <Link href='/home'>
                                <button className={Styles.boton}>Comencemos!</button>
                            </Link>
                        </Fade>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

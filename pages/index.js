import Router from "next/router";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Progressbar from '../components/progressbar';
import Styles from '../styles/index.module.css';

export default function Index() {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoading(
                Router.push('/home')
            )
        }, 7000);
    }, [])

    return (
        <React.Fragment>
            <div>
                <div className={`${Styles.sideleft}`}>
                    <div className={`${Styles.up} mt-5 mx-5 d-flex justify-content-center`}>
                        <Fade cascade direction='left' duration={2000} fraction={0}>
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
                    <div className="container">
                        <Progressbar />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

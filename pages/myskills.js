import React from "react";
import { Fade } from "react-awesome-reveal";
import Skills from '../components/skills';
import Styles from '../styles/myskills.module.css';

export default function myskills() {
    return (
        <React.Fragment>
            <div className={`${Styles.skills}`}>
                <div className="container border p-4 mt-5">
                    <Fade cascade='2' direction='down'>
                        <div className='container mb-5 text-white'>
                            <h1>Mis habilidades y conocimientos</h1>
                        </div>
                        <Skills nombre='HTML5' porcentaje='80' barra={Styles.html} />
                        <Skills nombre='Python' porcentaje='70' barra={Styles.python} />
                        <Skills nombre='Bootstrap' porcentaje='60' barra={Styles.bootstrapp} />
                        <Skills nombre='CSS3' porcentaje='50' barra={Styles.css3} />
                        <Skills nombre='JavaScript' porcentaje='50' barra={Styles.jscript} />
                        <Skills nombre='React js/Next js' porcentaje='50' barra={Styles.reactjs} />
                    </Fade>
                </div>
            </div>
        </React.Fragment>
    )
}

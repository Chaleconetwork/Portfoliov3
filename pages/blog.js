import Image from 'next/image';
import React from "react";
import { Fade } from "react-awesome-reveal";
import llayllayimg from '../assets/img/llayllayimg.png';
import pseintimg from '../assets/imgrecuerdos/pseint.webp';
import vbnetimg from '../assets/imgrecuerdos/vbnetimg.jpg';
import Styles from '../styles/blog.module.css';

export default function blog() {
    return (
        <React.Fragment>
            <div className='row'>
                <section className='p-5 text-white mt-5 col-sm-7'>
                    <Fade cascade direction='down'>
                        <h3 className='mb-5'>¿Te interesa saber un poco más de mi?</h3>
                    </Fade>
                    <Fade cascade direction='left'>
                        <p>
                            Comencé estudiando programación cuando estaba en tercero medio en una carrera técnica recién
                            implementada el 2019, en una pequeña comuna llamada LlayLlay, donde aprendimos lógica con
                            la herramienta pseint y con visual basic for applications, para después pasar a un lenguaje
                            llamado Visual Basic.NET, fue una experiencia entretenida y muy única, ya que fue la primera
                            carrera de programación implementada en la comuna de LlayLlay.
                        </p>
                    </Fade>
                </section>
                <section className={`${Styles.imagenesize} p-5 mt-5 col-sm-2`} >
                    <Image src={llayllayimg} alt='Image not found' />
                </section>
                <section className={`${Styles.imagenesize} p-5 mt-5 col-sm-2`} >
                    <Image src={pseintimg} alt='Image not found' />
                </section>
                <section className={`${Styles.imagenesize} p-5 mt-5 col-sm-2`} >
                    <Image src={vbnetimg} alt='Image not found' />
                </section>
                <section className='text-white mt-5 col-sm-12 p-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nesciunt. Provident adipisci, amet in at quisquam neque beatae quibusdam labore ex repellendus, odit architecto nam, eum blanditiis fuga. Vero, maxime!
                </section>
            </div>
        </React.Fragment>
    )
}

import React from "react";
import { Fade } from "react-awesome-reveal";
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Styles from '../styles/aboutme.module.css';

export default function aboutme() {
    return (
        <React.Fragment>
            <Navbar />
            <div className={`${Styles.altura} container mt-5`}>
                <Fade cascade direction='down'>
                    <h1 className="text-white">Sobre mi</h1>
                </Fade>
                <Fade cascade direction='left'>
                    <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est earum amet vel, quo quisquam incidunt tempora sunt iure in sit repudiandae consequuntur sequi voluptatum cupiditate, suscipit fugiat tempore consectetur harum.
                    </p>
                    <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, alias dolorem natus error nemo excepturi quas porro iste nostrum delectus totam animi nulla quia fugit non cumque fugiat laudantium. Quae impedit maxime et neque nemo rerum assumenda illo delectus magni, molestias perferendis veritatis nesciunt quisquam temporibus ab eos officia earum ipsum atque aliquid dignissimos mollitia a. Eius temporibus animi, iure ratione maiores id nihil odio voluptate, natus in perferendis, aliquam necessitatibus laudantium sint itaque reiciendis nemo reprehenderit eos sed ab ipsam blanditiis esse totam quo! Saepe laboriosam sit fuga! Repellat amet rem sed. Eveniet accusantium totam consequuntur quas reprehenderit iusto possimus quis, quos animi assumenda quidem aperiam repellat, est ad saepe sint, at ipsum explicabo. Quae nam accusamus vero ex? Et veritatis perferendis fuga, in vero magnam sunt amet tempore tenetur inventore nobis, porro, vel debitis exercitationem dolores ducimus magni asperiores totam commodi sequi doloribus. Eligendi consectetur ullam in id. Earum, est minus, nemo quam dolorum sit accusamus numquam saepe quod placeat inventore illum omnis? Voluptatem porro aliquid nihil qui ipsam eius voluptatibus ab placeat natus impedit! Necessitatibus exercitationem dolore laborum reiciendis quibusdam amet molestias ratione fugit inventore deleniti. Possimus tempore ullam vitae saepe ab animi dignissimos, mollitia tenetur adipisci.
                    </p>
                </Fade>
            </div>
            <Footer />
        </React.Fragment>
    )
}

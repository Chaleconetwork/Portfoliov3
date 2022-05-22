import React from 'react';
import Styles from '../styles/home.module.css';

export default function footer() {
    return (
        <footer className={`${Styles.piePagina} d-flex justify-content-center align-items-center`}>
            <h3>Diseñado por Chaleco© 2022</h3>
        </footer>
    )
}

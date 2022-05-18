import React from 'react'
import Styles from '../styles/myskills.module.css'

export default function skills({nombre, porcentaje, barra}) {
    return (
        <div className={`${Styles.line} mb-3`}>
            <div className={`${Styles.info} text-white`}>
                <span>{nombre} </span>
                <span>{porcentaje}%</span>
            </div>
            <div className={`${Styles.bars} ${barra}`}></div>
        </div>
    )
}

import React from 'react'
import Styles from '../styles/progressbar.module.css'

export default function progressbar() {
    return (
        <div className={`${Styles.line} mb-3`}>
            <div className={`${Styles.info} text-white`}></div>
            <div className={`${Styles.bars} ${Styles.progress}`}></div>
        </div>
    )
}

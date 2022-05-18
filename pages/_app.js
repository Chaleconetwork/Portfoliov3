import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {

    if (typeof window !== 'undefined') {
        require('bootstrap/dist/js/bootstrap.js')
    }

    return (
        <React.Fragment>    
            <Component {...pageProps} />
        </React.Fragment>
    )
}
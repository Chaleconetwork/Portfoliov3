import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps, ...appProps }) {

    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl(appProps.router.pathname)
    }, [appProps]);

    if (typeof window !== 'undefined') {
        require('bootstrap/dist/js/bootstrap.js')
    }

    return (
        <React.Fragment>

            {
                url !== '/' && (
                    <Navbar />
                )
            }

            <Component {...pageProps} />

            {
                url !== '/' && (
                    <Footer />
                )
            }

        </React.Fragment>
    )
}
import Link from 'next/link'
import React from 'react'

export default function navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand bi bi-laptop"></a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/home">
                                <a className="nav-link" aria-current="page">Inicio</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/aboutme">
                                <a className="nav-link">Sobre mi</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/myskills">
                                <a className="nav-link">Mis skills</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/projects">
                                <a className="nav-link" href="#">Proyectos</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

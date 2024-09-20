import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import { HashLink, NavHashLink } from 'react-router-hash-link';



function Nav() {
    return (
        <>
            <div className=' p-4 px-5 pb-5'>

                <nav class="navbar navbar-expand-lg position-fixed w-100 z-3">
                    <div class="container-fluid">
                        <span className=""><ThemeSwitcher /></span>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className='w-100 d-flex justify-content-center me-custom'>
                                <div class="navbar-nav  navbar-expand-lg">
                                    <ul class=" navbar-nav nav nav-underline bg-light rounded-5 p-2 px-custom shadow-lg mt-md-0 mt-2">
                                        <li class="nav-item">
                                            <NavHashLink className="nav-link text-dark p-0" to="/">Home</NavHashLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavHashLink className="nav-link text-dark p-0" to="/Projects">Projects</NavHashLink >
                                        </li>
                                        <li class="nav-item">
                                            <NavHashLink className="nav-link text-dark p-0" to="/Contact">Contact</NavHashLink >
                                        </li>
                                        <li class="nav-item">
                                            <NavHashLink className="nav-link text-dark p-0" to="/About">About</NavHashLink >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Nav
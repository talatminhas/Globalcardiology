import React from 'react'
import "./Links.css"
import { NavLink } from 'react-router-dom'




const Links = () => {
    return (
        <div>
            <section className='pkp-screen'>
                <article className='container'>
                    <div className="heading-editor d-flex justify-content-between align-items-center py-5 mt-0">
                        <NavLink to="/" className="text-decoration-none main-heading fw-bold text-white "><h1>GLOBAL CARDIOLOGY</h1></NavLink>
                        <article className='information'>
                            <span className='status text-white fw-semibold px-2'>Editor-in-Chief: </span>
                            <span className='name text-white'>Andrew J.S. Coats, Australia</span>
                        </article>
                    </div>
                </article>
            </section>
            <div className='number-bg text-white'>
                <p className='py-1 container'>eISSN 2975-2728</p>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light p-0">
                <div className="container">
                    <ul className="navbar-nav gap-3">
                        <li className=" nav-item">
                            <NavLink to="/about" className="nav-link fw-medium">ABOUT THE JOURNAL</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/editorial"className="nav-link fw-medium">EDITORIAL BOARD</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/publication"className="nav-link fw-medium">PUBICATION ETHICS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/current"className="nav-link fw-medium">CURRENT</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/achives"className="nav-link fw-medium">ARCHIVES</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/copy"className="nav-link fw-medium">COPYRIGHT & LICENSING</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Links;
import React, { useRef } from 'react';
import BHRC_LOGO from '../img/BHRC_LOGO.png';
import { NavLink, Outlet, Link } from 'react-router-dom';
// import Form from '../forms/Generated.pdf';

function Navbar() {

    const navRef = useRef()
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_navbar")
    }

    const handleClick = () => showNavbar(!navRef)

    const showNav = () => {
        document.getElementById("navbar").classList.toggle('navbar-mobile')
        // this.classList.toggle('bi-list')
        // this.classList.toggle('bi-x')
    }

    const showDropDown = () => {
        window.addEventListener('click', '.navbar .dropdown > a', function(e){
            if(document.getElementById("navbar").classList.contains("navbar-mobile")){
                e.preventDefault()
                this.nextElementSibling.classList.toggle("dropdown-active")
            }
        }, true)
    }

    return (
        <>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                    <h1 className="logo me-auto">
                        <Link to="/" className="logo me-auto">
                            <img src={BHRC_LOGO} alt="..." className="img-fluid" />
                        </Link>

                        <Link to="/">Brighthomes</Link>
                    </h1>

                    <nav id="navbar" className="navbar order-last order-lg-0" ref={navRef}>
                        <ul>
                            <li>
                                <NavLink to="/" className="nav-links" >
                                    Home
                                </NavLink>
                                {/* <a className="active" href="index.html">Home</a> */}
                            </li>
                            <li>
                                <NavLink to="about" className="nav-links">
                                    About
                                </NavLink>
                                {/* <a href="about.html">About</a> */}
                            </li>

                            <li className="dropdown">
                                {/* <a href="explore.html"><span>Explore BHRC</span> <i className="bi bi-chevron-down"></i></a> */}
                                <NavLink to="explore" className="nav-links">
                                    <span>Explore BHRC</span> <i className="bi bi-chevron-down"></i>
                                </NavLink>
                                <ul>
                                    <li className="dropdown">
                                        {/* <a href="units/alpine.html"><span>Alpine County</span> <i
                                        className="bi bi-chevron-right"></i></a> */}
                                        <NavLink to="explore/alphine-county">
                                            <span>Alpine County</span><i class="bi bi-chevron-right"></i>
                                        </NavLink>
                                        <ul>
                                            <li>
                                                <NavLink to="explore/alphine-county/celine">Celine</NavLink>
                                            </li>
                                            <li><a href="units/alpine.html">Karen</a></li>
                                        </ul>
                                    </li>

                                    <li className="dropdown">
                                        {/* <a href="units/bulacan.html"><span>Bulacan Meadows</span> <i class="bi bi-chevron-right"></i></a> */}
                                        <NavLink to="explore/bulacan-meadows">
                                            <span>Bulacan Meadows</span><i class="bi bi-chevron-right"></i>
                                        </NavLink>
                                        <ul>
                                            <li><a href="units/bulacan.html">Queen Elizabeth I</a></li>
                                            <li><a href="units/bulacan.html">Queen Elizabeth II</a></li>
                                        </ul>
                                    </li>

                                    <li className="dropdown">
                                        {/* <a href="units/elPueblo.html"><span>El Pueblo del Rio</span> <i class="bi bi-chevron-right"></i></a> */}
                                        <NavLink to="explore/el-pueblo">
                                            <span>El Pueblo del Rio</span> <i class="bi bi-chevron-right"></i>
                                        </NavLink>
                                        <ul>
                                            <li><a href="units/elPueblo.html">Katrina Royale</a></li>
                                            <li><a href="units/elPueblo.html">Ysabella</a></li>
                                            <li><a href="units/elPueblo.html">Patrizia</a></li>
                                            <li><a href="units/elPueblo.html">Arabella</a></li>
                                            <li><a href="units/elPueblo.html">Eliza</a></li>
                                        </ul>
                                    </li>

                                    <li className="dropdown">
                                        {/* <a href="units/primeville.html"><span>Primeville Residences</span> <i class="bi bi-chevron-right"></i></a> */}
                                        <NavLink to="explore/prime-ville">
                                            <span>PrimeVille Residences</span> <i class="bi bi-chevron-right"></i>
                                        </NavLink>
                                        <ul>
                                            <li>
                                                <NavLink to="explore/prime-ville">
                                                    Princess Catherine
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="explore/prime-ville">
                                                    Kathryn
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>
                            </li>

                            <li className="dropdown">
                                {/* <a href="guides.html"><span>Guides</span> <i class="bi bi-chevron-down"></i></a> */}
                                <NavLink to="guides" className="nav-links">
                                    <span>Guides</span> <i className="bi bi-chevron-down"></i>
                                </NavLink>
                                <ul>
                                    <li className="dropdown"><NavLink to="guides"><span>For Buyers</span></NavLink></li>
                                    <li className="dropdown"><a href="guides.html"><span>For Sellers</span></a></li>
                                    <li className="dropdown"><a href="guides.html"><span>Online payment</span></a></li>
                                </ul>
                            </li>

                            <li><NavLink to="news" className="nav-links">What's new?</NavLink></li>

                        </ul>
                        <i class="bi bi-list mobile-nav-toggle" onClick={showNav}></i>
                    </nav>

                    {/* <a href={Form} download={Form} className="get-started-btn">Download</a> */}

                </div>
            </header>

            <main>
                <Outlet />
            </main>

        </>
    )
}

export default Navbar
import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

import Patrizia from '../img/content/patrizia.jpg';
import Zen from '../img/content/zen.jpg';
import Eliza from '../img/content/eliza.jpg';
import Kathryn from '../img/content/kathryn.jpg';
import Amenities1 from '../img/content/amenities1.jpg';
import Amenities2 from '../img/content/amenities2.jpg';
import Amenities3 from '../img/content/amenities3.jpg';
import { Link } from "react-router-dom";

import Iframe from "react-iframe";
import PageLoader from "../components/PageLoader";

function Home() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
        // page title
        document.title = "Home | Brighthomes"
    }, [])

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])

    const displayAntipoloDetails = () => {
        const bulacanElement = document.getElementById("bulacanMap");
        const antipoloElement = document.getElementById("antipoloMap");
        const bulacanBtn = document.getElementById("btnBulacan");
        const antipoloBtn = document.getElementById("btnAntipolo");

        bulacanElement.style.display = "none";
        antipoloElement.style.display = "block";
        antipoloElement.classList.remove("d-none")
        bulacanBtn.classList.remove('active')
        antipoloBtn.classList.add('active')

        const bulacanDetails = document.getElementById("bulacanDetails");
        const antipoloDetails = document.getElementById("antipoloDetails");
        bulacanDetails.style.display = "none";
        antipoloDetails.style.display = "block";
        antipoloDetails.classList.remove("d-none")
    }

    const displayBulacanDetails = () => {
        const bulacanElement = document.getElementById("bulacanMap");
        const antipoloElement = document.getElementById("antipoloMap");
        bulacanElement.style.display = "block";
        antipoloElement.style.display = "none";

        const bulacanDetails = document.getElementById("bulacanDetails");
        const antipoloDetails = document.getElementById("antipoloDetails");
        bulacanDetails.style.display = "block";
        antipoloDetails.style.display = "none";

        const bulacanBtn = document.getElementById("btnBulacan");
        const antipoloBtn = document.getElementById("btnAntipolo");

        bulacanBtn.classList.add('active')
        antipoloBtn.classList.remove('active')
    }

    return (
        <>
            {
                loading ? <PageLoader /> :
                    <div>
                        {   /* ================ HERO SECTION ================ */}
                        <section id="hero" className="d-flex justify-content-center align-items-center">
                            <div className="container position-relative" data-aos={"zoom-in"} data-aos-delay={"1000"}>
                                <h2>"Kay sarap umuwi sa sariling bahay"</h2>
                                <h1>Bright Homes &<br />Realty Corporation</h1>
                                {/* <a href="explore.html" className="btn-get-started">Explore now</a> */}
                                <Link to="explore" className="btn-get-started">Explore now</Link>
                            </div>
                        </section>
                        <main id="main">

                            {/* Featured Projects Section */}
                            <section id="popular-courses" className="courses">

                                <div className="container" data-aos="fade-up">

                                    <div className="section-title">
                                        <h2>Projects</h2>
                                        <p>Featured Projects</p>
                                    </div>

                                    <div className="row featured-projects mb-5" data-aos="zoom-in" data-aos-delay="100">

                                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch featured-items">
                                            <div className="card">
                                                <img src={Patrizia} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">AVAILABLE</h5>
                                                    <p className="card-text">Alpine County San Roque, Antipolo City</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch featured-items">
                                            <div className="card">
                                                <img src={Zen} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">SOLD</h5>
                                                    <p className="card-text">Bulacan Meadows Caypombo, Sta. Maria, Bulacan</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch featured-items">
                                            <div className="card">
                                                <img src={Eliza} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">SOLD</h5>
                                                    <p className="card-text">El Pueblo Del Rio Caypombo, Sta. Maria, Bulacan</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch featured-items">
                                            <div className="card">
                                                <img src={Kathryn} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">SOLD</h5>
                                                    <p className="card-text">Primeville Residences Caypombo, Sta. Maria, Bulacan</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 pt-3">
                                            <div className="mt-3 learn-more-btn">
                                                <a href="#" className="btn btn-primary">Learn more <i class="bi bi-chevron-right"></i></a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </section>
                            {/* End of Featured projects Section */}

                            {/* Why us Section */}
                            <section id="why-us" className="why-us">
                                <div className="container" data-aos="fade-up">

                                    <div className="section-title">
                                        <h2>Why us?</h2>
                                        <p>Why Bright Homes?</p>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-4 d-flex align-items-stretch">
                                            <div className="content bg-primary">
                                                <h3>Why Choose Bright homes?</h3>
                                                <p>
                                                    Bright homes is the one of the forefronts of residential development for more than a decade. It aims to
                                                    provide affordable housing units inspired by the government's
                                                    initiatives for affordable housing programs. The company offers house and lot packages that could cater
                                                    to families and inidividuals of various
                                                    income level to meet their tastes and needs.
                                                </p>
                                                <div className="text-center">
                                                    <a href="about.html" className="more-btn">Learn More <i class="bx bx-chevron-right"></i></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                            <div className="icon-boxes d-flex flex-column justify-content-center">
                                                <div className="row">
                                                    <div className="col-xl-3 d-flex align-items-stretch">
                                                        <div className="icon-box mt-4 mt-xl-0">
                                                            <i className="bx bx-receipt"></i>
                                                            <h4>Corporis voluptates sit</h4>
                                                            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3 d-flex align-items-stretch">
                                                        <div className="icon-box mt-4 mt-xl-0">
                                                            <i className="bx bx-cube-alt"></i>
                                                            <h4>Ullamco laboris ladore pan</h4>
                                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3 d-flex align-items-stretch">
                                                        <div className="icon-box mt-4 mt-xl-0">
                                                            <i className="bx bx-images"></i>
                                                            <h4>Labore consequatur</h4>
                                                            <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3 d-flex align-items-stretch">
                                                        <div className="icon-box mt-4 mt-xl-0">
                                                            <i class="bx bx-cube-alt"></i>
                                                            <h4>Ullamco laboris ladore pan</h4>
                                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* END of Why us Section */}

                            {/* Trainers Section */}
                            <section id="trainers" className="trainers">
                                <div className="container" data-aos="fade-up">

                                    <div className="section-title">
                                        <h2>Amenities</h2>
                                        <p>Community Amenities</p>
                                    </div>

                                    <div className="row" data-aos="zoom-in" data-aos-delay="100">
                                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                            <div className="member">
                                                <img src={Amenities1} className="img-fluid" alt="..." />
                                                <div className="member-content">
                                                    <h4>Amenities 1</h4>
                                                    <span>Sample description 1</span>
                                                    <p>
                                                        Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut
                                                        aut aut
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                            <div className="member">
                                                <img src={Amenities2} className="img-fluid" alt="..." />
                                                <div className="member-content">
                                                    <h4>Amenities 2</h4>
                                                    <span>Sample description 2</span>
                                                    <p>
                                                        Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum
                                                        temporibus
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                            <div className="member">
                                                <img src={Amenities3} className="img-fluid" alt="..." />
                                                <div className="member-content">
                                                    <h4>Amenities 3</h4>
                                                    <span>Sample description 2</span>
                                                    <p>
                                                        Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* End of Trainers Section */}

                            {/* Project Location Section */}
                            <section id="project-location" className="proj-location">
                                <div className="container" data-aos="fade-up">

                                    <div className="section-title">
                                        <h2>Location</h2>
                                        <p>Project location</p>
                                    </div>

                                    <div className="row" data-aos="zoom-in" data-aos-delay="100" style={{ height: '500px' }}>

                                        <div className="col-lg-7 d-flex align-items-stretch">

                                            {/* Bulacan Map */}
                                            <div className="mapouter bulacan-map" id="bulacanMap" style={{ position: 'relative', textAlign: 'right', height: '100%', width: '100%' }}>
                                                <div className="gmap_canvas" style={{ overflow: 'hidden', background: 'none !important', height: '100%', width: '100%' }}>
                                                    {/* <iframe width="100%" height="100%" id="gmap_canvas"
                                            src="https://maps.google.com/maps?q=bright%20homes%20caypombo&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title="Bulacan map"></iframe> */}

                                                    <Iframe width="100%" height="100%" id="gmap_canvas" frameBorder={0} scrolling="no" title="Bulacan Map" allow="fullscreen" src="https://maps.google.com/maps?q=bright%20homes%20caypombo&t=&z=15&ie=UTF8&iwloc=&output=embed" />
                                                </div>
                                            </div>

                                            {/* Antipolo Map */}
                                            <div className="maprouter antipolo-map d-none" id="antipoloMap" style={{ position: 'relative', textAlign: 'right', height: '100%', width: '100%' }}>
                                                <div class="gmap_canvas" style={{ overflow: 'hidden', background: 'none !important', height: '100%', width: '100%' }}>
                                                    {/* <iframe width="100%" height="100%" id="gmap_canvas"
                                            src="https://maps.google.com/maps?q=alpine%20county%20antipolo&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title="Antipolo map"></iframe> */}

                                                    <Iframe width="100%" height="100%" id="gmap_canvas" frameBorder={0} scrolling="no" title="Antipolo Map" allow="fullscreen" src="https://maps.google.com/maps?q=alpine%20county%20antipolo&t=&z=15&ie=UTF8&iwloc=&output=embed" />
                                                    <a href="https://fmovies-online.net">fmovies</a><br />
                                                    {/* <style>
                                                .mapouter {
                                                    position: relative;
                                                text-align: right;
                                                height: 100%;
                                                width: 100%;
                                                        }
                                            </style> */}
                                                    <a href="https://www.embedgooglemap.net">add google map to my website</a>
                                                    {/* <style>
                                                .gmap_canvas {
                                                    overflow: hidden;
                                                background: none !important;
                                                height: 100%;
                                                width: 100%;
                                                        }
                                            </style> */}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-5">
                                            <div className="btn-group col-lg-12 ms-3" role="group" aria-label="Basic example">
                                                {/* onClick={displayBulacanDetails()} */}
                                                <button type="button" id="btnBulacan" className="btn btn-primary btn-lg btn-bulacan active" onClick={displayBulacanDetails}>
                                                    BULACAN
                                                </button>
                                                {/* onClick={displayAntipoloDetails()} */}
                                                <button type="button" id="btnAntipolo" className="btn btn-primary btn-lg btn-bulacan" onClick={displayAntipoloDetails}>
                                                    ANTIPOLO
                                                </button>
                                            </div>

                                            {/* BULACAN DETAILS */}
                                            <div className="bulacan-section" id="bulacanDetails">
                                                <div className="proj-description col-lg-6" style={{ padding: '30px 30px 0 30px' }}>
                                                    <h1 className="">Projects</h1>
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item">Bulacan Meadows</li>
                                                        <li className="list-group-item">El Pueblo del Rio</li>
                                                        <li className="list-group-item">Primeville Residences</li>
                                                    </ul>
                                                </div>

                                                <div className="proj-description col-lg-12" style={{ padding: '30px' }}>
                                                    <h1 className="">Landmarks</h1>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <ul className="list-group list-group-flush">
                                                                <li className="list-group-item">SM Hypermarket</li>
                                                                <li className="list-group-item">LRT line 7</li>
                                                                <li className="list-group-item">Nena's store</li>
                                                            </ul>
                                                        </div>

                                                        <div className="col-lg-6">
                                                            <ul className="list-group list-group-flush">
                                                                <li className="list-group-item">SOGO hotel</li>
                                                                <li className="list-group-item">BDO</li>
                                                                <li className="list-group-item">Rusty Lopez</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* ANTIPOLO DETAILS */}
                                            <div className="antipolo-section d-none" id="antipoloDetails">
                                                <div className="proj-description col-lg-6" style={{ padding: '30px 30px 0 30px' }}>
                                                    <h1 className="">Projects</h1>
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item">Alpine County</li>
                                                    </ul>
                                                </div>

                                                <div className="proj-description col-lg-12" style={{ padding: '30px' }}>
                                                    <h1 className="">Landmarks</h1>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <ul className="list-group list-group-flush">
                                                                <li className="list-group-item">SM Cherry Antipolo</li>
                                                                <li className="list-group-item">Cloud 9</li>
                                                                <li className="list-group-item">St. Peter</li>
                                                            </ul>
                                                        </div>

                                                        <div className="col-lg-6">
                                                            <ul className="list-group list-group-flush">
                                                                <li className="list-group-item">SOGO hotel</li>
                                                                <li className="list-group-item">BDO</li>
                                                                <li className="list-group-item">Rusty Lopez</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* END OF PROJECT LOCATION SECTION */}
                        </main>
                    </div>
            }

        </>
    )
}

export default Home;
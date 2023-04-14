import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

import ModelHouse2 from '../img/units/model-house2.png';
import { NavLink } from "react-router-dom";
import PageLoader from "../components/PageLoader";

function Explore() {

    useEffect(() => {
        AOS.init();
    }, [])

    const [loading, setLoading] = useState(false)
    // const loader = () => {
    //     setLoading()
    // }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            // }, window.addEventListener('load', setLoading))
        }, 500)
    }, [])

    const [counterOn, setCounterOn] = useState(false);

    return (
        <>
            {
                loading ? <PageLoader /> :
                    <div>
                        <main id='main' data-bs-spy="scroll">
                            <div className='breadcrumbs bg-primary' data-aos="fade-in">
                                <div class="container">
                                    <h2>Explore BHRC</h2>
                                </div>
                            </div>

                            <section id='explore' className='explore'>
                                <div className='container' data-aos="fade-up">

                                    <div className='row'>

                                        <div className='col-lg-12 mb-5 explore-items' data-aos="fade-left" data-aos-delay="100">

                                            <div className="section-title">
                                                <h2>Bright homes projects</h2>
                                                <p>List of Projects</p>
                                            </div>

                                            <div className='row mb-5 position-relative'>

                                                <div className="alpine-county-house col-lg-3">
                                                    <figure className="figure">
                                                        {/* <a href="units/alpine.html">
                                                <img src={ModelHouse2} className="figure-img img-fluid rounded" alt="..." />
                                            </a> */}
                                                        <NavLink to="alphine-county">
                                                            <img src={ModelHouse2} className="figure-img img-fluid rounded" alt="..." />
                                                        </NavLink>
                                                        <figcaption className="figure-caption text-center">
                                                            <h2><strong>ALPINE COUNTY</strong></h2>
                                                        </figcaption>
                                                    </figure>
                                                </div>

                                                <div className="alpine-county-house col-3">
                                                    <figure className="figure position-absolute bottom-0">
                                                        {/* <a href="units/bulacan.html">
                                                <img src={ModelHouse2} className="figure-img img-fluid rounded" alt="..." />
                                            </a> */}
                                                        <NavLink to="bulacan-meadows">
                                                            <img src={ModelHouse2} className="figure-img img-fluid rounded" alt="..." />
                                                        </NavLink>
                                                        <figcaption className="figure-caption text-center">
                                                            <h2><strong>BULACAN MEADOWS</strong></h2>
                                                        </figcaption>
                                                    </figure>
                                                </div>

                                                <div className="alpine-county-house col-lg-3">
                                                    <figure className="figure">
                                                        {/* <a href="units/elPueblo.html">
                                                <img src={ModelHouse2} className="figure-img img-fluid rounded" alt="..." />
                                            </a> */}
                                                        <NavLink to="el-pueblo">
                                                            <img src={ModelHouse2} className="figure-img img-fluid rounded" alt="..." />
                                                        </NavLink>
                                                        <figcaption className="figure-caption text-center">
                                                            <h2><strong>EL PUEBLO DEL RIO</strong></h2>
                                                        </figcaption>
                                                    </figure>
                                                </div>

                                                <div className="alpine-county-house col-3">
                                                    <figure className="figure position-absolute bottom-0">
                                                        {/* <a href="units/primeville.html">
                                                <img src={ModelHouse2} className="figure-img img-fluid rounded" alt="..." />
                                            </a> */}
                                                        <NavLink to="prime-ville">
                                                            <img src={ModelHouse2} className="figure-img img-fluid rounded" alt="..." />
                                                        </NavLink>
                                                        <figcaption className="figure-caption text-center">
                                                            <h2><strong>PRIMEVILLE RESIDENCES</strong></h2>
                                                        </figcaption>
                                                    </figure>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Counts section */}

                            {/* ALPINE COUNTY */}
                            <div className='container'>
                                <div className='row'>
                                    <div className='section-title'>
                                        <p>ALPHINE COUNTY</p>
                                    </div>
                                </div>
                            </div>

                            <section id='counts' className='counts section-bg'>
                                <div className='container'>
                                    <div className='row counters'>

                                        <div className='col-lg-4 col-4 text-center'>
                                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                <span>
                                                    {counterOn && <CountUp start={0} end={52} duration={2} delay={0} className='purecounter' />}
                                                </span>
                                            </ScrollTrigger>
                                            <p>Units sold</p>
                                        </div>

                                        <div className='col-lg-4 col-4 text-center'>
                                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                <span>
                                                    {counterOn && <CountUp start={0} end={99} duration={2} delay={0} className='purecounter' />}
                                                </span>
                                            </ScrollTrigger>
                                            <p>Units Available</p>
                                        </div>

                                        <div className='col-lg-4 col-4 text-center'>
                                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                <span>
                                                    {counterOn && <CountUp start={0} end={142} duration={2} delay={0} className='purecounter' />}
                                                </span>
                                            </ScrollTrigger>
                                            <p>Ready for Occupancy</p>
                                        </div>

                                    </div>
                                </div>
                            </section>

                            {/* BULACAN MEADOWS */}
                            <div className='container'>
                                <div className='row'>
                                    <div className='section-title'>
                                        <p>BULACAN MEADOWS</p>
                                    </div>
                                </div>
                            </div>

                            <section id='counts' className='counts section-bg'>
                                <div className='container'>
                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                        <div className='row counters'>

                                            <div className='col-lg-4 col-4 text-center'>
                                                <span>
                                                    {counterOn && <CountUp start={0} end={29} duration={2} delay={0} className='purecounter' />}
                                                </span>
                                                <p>Units sold</p>
                                            </div>

                                            <div className='col-lg-4 col-4 text-center'>
                                                <span>
                                                    {counterOn && <CountUp start={0} end={100} duration={2} delay={0} className='purecounter' />}
                                                </span>
                                                <p>Units Available</p>
                                            </div>

                                            <div className='col-lg-4 col-4 text-center'>
                                                <span>
                                                    {counterOn && <CountUp start={0} end={97} duration={2} delay={0} className='purecounter' />}
                                                </span>
                                                <p>Ready for Occupancy</p>
                                            </div>
                                        </div>
                                    </ScrollTrigger>
                                </div>
                            </section>

                            {/* EL PUEBLO DEL RIO */}
                            <div className='container'>
                                <div className='row'>
                                    <div className='section-title'>
                                        <p>EL PUEBLO DEL RIO</p>
                                    </div>
                                </div>
                            </div>

                            <section id='counts' className='counts section-bg'>
                                <div className='container'>
                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                        <div className='row counters'>

                                            <div className='col-lg-4 col-4 text-center'>
                                                <span>
                                                    {counterOn && <CountUp start={0} end={32} duration={2} delay={0} className='purecounter' />}

                                                </span>
                                                <p>Units sold</p>
                                            </div>

                                            <div className='col-lg-4 col-4 text-center'>
                                                <span>
                                                    {counterOn && <CountUp start={0} end={80} duration={2} delay={0} className='purecounter' />}
                                                </span>
                                                <p>Units Available</p>
                                            </div>

                                            <div className='col-lg-4 col-4 text-center'>
                                                <span>
                                                    {counterOn && <CountUp start={0} end={117} duration={2} delay={0} className='purecounter' />}
                                                </span>
                                                <p>Ready for Occupancy</p>
                                            </div>
                                        </div>
                                    </ScrollTrigger>
                                </div>
                            </section>

                            {/* PRIMEVILLE RESIDENCES */}
                            <div className='container'>
                                <div className='row'>
                                    <div className='section-title'>
                                        <p>PRIMEVILLE RESIDENCES</p>
                                    </div>
                                </div>
                            </div>

                            <section id='counts' className='counts section-bg'>
                                <div className='container'>
                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                        <div className='row counters'>

                                            <div className='col-lg-4 col-4 text-center'>
                                                <span>
                                                    {counterOn && <CountUp start={0} end={17} duration={2} delay={0} className='purecounter' />}
                                                </span>
                                                <p>Units sold</p>
                                            </div>

                                            <div className='col-lg-4 col-4 text-center'>
                                                <span>
                                                    {counterOn && <CountUp start={0} end={128} duration={2} delay={0} className='purecounter' />}
                                                </span>
                                                <p>Units Available</p>
                                            </div>

                                            <div className='col-lg-4 col-4 text-center'>
                                                <span>
                                                    {counterOn && <CountUp start={0} end={101} duration={2} delay={0} className='purecounter' />}
                                                </span>
                                                <p>Ready for Occupancy</p>
                                            </div>
                                        </div>
                                    </ScrollTrigger>
                                </div>
                            </section>

                        </main>
                    </div>
            }

        </>
    )
}

export default Explore;
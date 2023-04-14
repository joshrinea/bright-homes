import React, { useEffect, useState } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Iframe from "react-iframe";

import AC4 from '../../../img/units/alpine/AC4.png';
import Z6 from '../../../img/units/alpine/z6.jpg';
import Z1 from '../../../img/units/alpine/z1.jpg';
import Z2 from '../../../img/units/alpine/z2.jpg';
import Z3 from '../../../img/units/alpine/z3.jpg';
import Z4 from '../../../img/units/alpine/z4.jpg';
import Z5 from '../../../img/units/alpine/z5.jpg';

import ZenF from '../../../img/units/alpine/zengf.png';
import Zen2nd from '../../../img/units/alpine/zen2nd.png';

import PageLoader from "../../../components/PageLoader";

function Celine() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }, [])

    const [counterOn, setCounterOn] = useState(false);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])

    return (
        <>
            {
                loading ? <PageLoader /> :
                    <div>
                        <main id="main" className="unit-celine">

                            <div className="breadcrumbs bg-primary" data-aos="fade-in">
                                <div className="container">
                                    <h2>Celine</h2>
                                </div>
                            </div>

                            <section id="about" className="about">

                                <div className="container" data-aos="fade-up">

                                    <div className="section-title">
                                        <h2>Alphine County</h2>
                                        <p>Celine Model House</p>
                                    </div>

                                    <div className="col-12 celine-model-house">
                                        <img src={AC4} className="img-fluid" alt="..." />
                                        <div className="row images mt-3 mb-3">
                                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                                <img src={Z6} class="img-fluid" />
                                            </div>
                                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                                <img src={Z1} class="img-fluid" />
                                            </div>
                                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                                <img src={Z2} class="img-fluid" />
                                            </div>
                                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                                <img src={Z3} class="img-fluid" />
                                            </div>
                                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                                <img src={Z4} class="img-fluid" />
                                            </div>
                                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                                <img src={Z5} class="img-fluid" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* COUNTS SECTION */}
                                    <section id="counts" className="counts section-bg">
                                        <div class="container">
                                            <div class="row counters">
                                                <div class="col-lg-3 col-3 text-center">
                                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                        <span>
                                                            {counterOn && <CountUp start={0} end={2} duration={1} delay={0} className='purecounter' />}
                                                        </span>
                                                    </ScrollTrigger>
                                                    <p>Bedroom</p>
                                                </div>
                                                <div class="col-lg-3 col-3 text-center">
                                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                        <span>
                                                            {counterOn && <CountUp start={0} end={4} duration={1} delay={0} className='purecounter' />}
                                                        </span>
                                                    </ScrollTrigger>
                                                    <p>Bathrooms</p>
                                                </div>
                                                <div class="col-lg-3 col-3 text-center">
                                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                        <span>
                                                            {counterOn && <CountUp start={0} end={1} duration={1} delay={0} className='purecounter' />}
                                                        </span>
                                                    </ScrollTrigger>
                                                    <p>Garage</p>
                                                </div>
                                                <div class="col-lg-3 col-3 text-center">
                                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                        <span>
                                                            {counterOn && <CountUp start={0} end={80} duration={1} delay={0} className='purecounter' />}
                                                        </span>
                                                    </ScrollTrigger>
                                                    <p>Floor area (sqm)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    {/* END OF COUNTS SECTION */}

                                    <div className="row mission-vission mt-5">

                                        <div className="col-lg-12 mb-3" data-aos="fade-left" >
                                            <p style={{ color: '#777777' }}>  &emsp;&emsp;
                                                A Classic Swiss inspired home, incorporate lines that
                                                are simple and attractive
                                                with simple colors scheme and minimal ornamentation. The tow-storey house with attic
                                                provides its homeowners a lifestyle that allows them to relax and entertain in comfort and
                                                style.
                                            </p>
                                        </div>

                                        <div className="section-title mb-5">
                                            <h2>Features</h2>
                                            <p>Unit features</p>

                                            <section id="features" className="features">
                                                <div className="container" data-aos="fade-up">

                                                    <div className="row" data-aos="zoom-in" data-aos-delay="100">

                                                        <div className="col-lg-3 col-md-4">
                                                            <div class="icon-box">
                                                                <i class='bx bx-store-alt' style={{ color: '#ffbb2c' }}></i>
                                                                <h3><a href="">Lorem Ipsum</a></h3>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                                            <div class="icon-box">
                                                                <i class='bx bx-bar-chart-square' style={{ color: '#5578ff' }}></i>
                                                                <h3><a href="">Lorem Ipsum</a></h3>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                                            <div class="icon-box">
                                                                <i class='bx bx-calendar' style={{ color: '#e80368' }}></i>
                                                                <h3><a href="">Lorem Ipsum</a></h3>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                                                            <div className="icon-box">
                                                                <i class='bx bx-paint-roll' style={{ color: '#e361ff' }}></i>
                                                                <h3><a href="">Lorem Ipsum</a></h3>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 mt-4">
                                                            <div className="icon-box">
                                                                <i class='bx bx-data' style={{ color: '#47aeff' }}></i>
                                                                <h3><a href="">Nemo Enim</a></h3>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 mt-4">
                                                            <div className="icon-box">
                                                                <i class='bx bx-layer' style={{ color: '#ffa76e' }}></i>
                                                                <h3><a href="">Eiusmod Tempor</a></h3>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-3 col-md-4 mt-4">
                                                            <div class="icon-box">
                                                                <i class='bx bx-receipt' style={{ color: '#11dbcf' }}></i>
                                                                <h3><a href="">Midela Teren</a></h3>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-3 col-md-4 mt-4">
                                                            <div class="icon-box">
                                                                <i class='bx bxs-business' style={{ color: '#4233ff' }}></i>
                                                                <h3><a href="">Pira Neve</a></h3>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </section>

                                        </div>

                                        <div className="section-title mb-3 floor-plan">
                                            <h2>Diagram</h2>
                                            <p>Floor plan</p>

                                            {/* FLOOR PLAN SECTION */}
                                            <section className="pt-0">
                                                <div className="container" data-aos="zoom-in" data-aos-delay="100">
                                                    <div className="row">
                                                        <div className="col-lg-6 text-center">
                                                            <h1>Ground Floor</h1>
                                                            <img src={ZenF} className="img-fluid" />
                                                        </div>

                                                        <div className="col-lg-6 text-center">
                                                            <h1>Second Floor</h1>
                                                            <img src={Zen2nd} className="img-fluid" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>

                                        </div>

                                        <div className="section-title mb-5 virtual-tour">
                                            <h2>Tour section</h2>
                                            <p>360 Virtual tour</p>
                                            <div className="container">
                                                <div className="row">
                                                    {/* <iframe class="virtual-image" height="350px" width="100%" allowfullscreen="true" src="https://momento360.com/e/u/d20915717900489ba95fc00a32f00e06?utm_campaign=embed&utm_source=other&heading=76.21&pitch=5.98&field-of-view=90&size=medium"></iframe> */}

                                                    <Iframe className="virtual-image" height="350px" width="100%" allowFullScreen="true" src="https://momento360.com/e/u/d20915717900489ba95fc00a32f00e06?utm_campaign=embed&utm_source=other&heading=76.21&pitch=5.98&field-of-view=90&size=medium" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="section-title mb-3">
                                            <h2>Location</h2>
                                            <p>Site map</p>

                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-lg-12" style={{ height: '70vh' }}>
                                                        {/* Antipolo map */}
                                                        <div style={{ position: 'relative', textAlign: 'right', height: '100%', width: '100%' }} className="mapouter antipolo-map">
                                                            <div className="gmap_canvas" style={{ overflow: 'hidden', background: 'none !important', height: '100%', width: '100%' }}>
                                                                <Iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=alpine%20county%20antipolo&t=&z=15&ie=UTF8&iwloc=&output=embed" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </section>

                        </main>
                    </div>
            }

        </>
    )
}

export default Celine;
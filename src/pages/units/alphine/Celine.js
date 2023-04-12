import React, { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import AC4 from '../../../img/units/alpine/AC4.png';
import Z6 from '../../../img/units/alpine/z6.jpg';
import Z1 from '../../../img/units/alpine/z1.jpg';
import Z2 from '../../../img/units/alpine/z2.jpg';
import Z3 from '../../../img/units/alpine/z3.jpg';
import Z4 from '../../../img/units/alpine/z4.jpg';
import Z5 from '../../../img/units/alpine/z5.jpg';

function Celine() {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    return (
        <>
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

                        <section id="counts" className="counts section-bg">
                            <div class="container">

                                <div class="row counters">

                                    <div class="col-lg-3 col-3 text-center">
                                        <span data-purecounter-start="0" data-purecounter-end="2" data-purecounter-duration="1"
                                            class="purecounter"></span>
                                        <p>Bedroom</p>
                                    </div>

                                    <div class="col-lg-3 col-3 text-center">
                                        <span data-purecounter-start="0" data-purecounter-end="4" data-purecounter-duration="1"
                                            class="purecounter"></span>
                                        <p>Bathrooms</p>
                                    </div>

                                    <div class="col-lg-3 col-3 text-center">
                                        <span data-purecounter-start="0" data-purecounter-end="1" data-purecounter-duration="1"
                                            class="purecounter"></span>
                                        <p>Garage</p>
                                    </div>

                                    <div class="col-lg-3 col-3 text-center">
                                        <span data-purecounter-start="0" data-purecounter-end="80" data-purecounter-duration="1"
                                            class="purecounter"></span>
                                        <p>Floor area (sqm)</p>
                                    </div>

                                </div>

                            </div>
                        </section>

                    </div>
                </section>

            </main>
        </>
    )
}

export default Celine;
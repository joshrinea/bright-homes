import React, { useEffect, useState } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Pueblo() {

    useEffect(() => {
        AOS.init();
    }, [])

    const [counterOn, setCounterOn] = useState(false);

    return (
        <>
            <main id="main" data-bs-spy="scroll">

                <div className="breadcrumbs bg-primary" data-aos="fade-in">
                    <div className="container">
                        <h2>El Pueblo del Rio</h2>
                    </div>
                </div>

                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">
                        <div className="row mission-vision">
                            <div className="col-lg-12 mb-5" data-aos="fade-left" data-aos-delay="100">

                                <div className="section-title" id="bulacan-meadows">
                                    <h2>Bright homes Projects</h2>
                                    <p>El Pueblo del Rio</p>
                                </div>

                                <div className="row project-items mb-5">

                                    <div className="col-lg-6 mb-5">
                                        <h2>Olivia</h2>
                                        <div className="card" style={{ width: '100%', height: '700px' }}>
                                            <a href="#">
                                                <img src="..." className="card-img-top" style={{ height: '600px' }} />
                                            </a>
                                            <div className="card-body">
                                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                    <p className="card-text">
                                                        <div className="d-flex">

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={38.50} duration={2} delay={0} decimals={2} className="purecounter" />}
                                                                </span> sqm<p><strong>Lot area</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={2} duration={2} delay={0} className="purecounter" />}
                                                                </span>
                                                                <p><strong>Bedrooms</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={1} duration={2} delay={0} className="purecounter" />}
                                                                </span>
                                                                <p><strong>Bathrooms</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={2} duration={2} delay={0} className="purecounter" />}
                                                                </span>
                                                                <p><strong>Floor(s)</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={1} duration={2} delay={0} className="purecounter" />}
                                                                </span> Car(s)
                                                                <p><strong>Garage</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={40.11} duration={2} delay={0} decimals={2} className="purecounter" />}
                                                                </span> sqm
                                                                <p><strong>Floor area</strong></p>
                                                            </div>

                                                        </div>
                                                    </p>
                                                </ScrollTrigger>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mb-5">
                                        <h2>Patrizia</h2>
                                        <div className="card" style={{ width: '100%', height: '700px' }}>
                                            <a href="#">
                                                <img src="..." className="card-img-top" style={{ height: '600px' }} />
                                            </a>
                                            <div className="card-body">
                                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                    <p className="card-text">
                                                        <div className="d-flex">

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={38.50} duration={2} delay={0} decimals={2} className="purecounter" />}
                                                                </span> sqm<p><strong>Lot area</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={2} duration={2} delay={0} className="purecounter" />}
                                                                </span>
                                                                <p><strong>Bedrooms</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={1} duration={2} delay={0} className="purecounter" />}
                                                                </span>
                                                                <p><strong>Bathrooms</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={2} duration={2} delay={0} className="purecounter" />}
                                                                </span>
                                                                <p><strong>Floor(s)</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={1} duration={2} delay={0} className="purecounter" />}
                                                                </span> Car(s)
                                                                <p><strong>Garage</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={42.75} duration={2} delay={0} decimals={2} className="purecounter" />}
                                                                </span> sqm
                                                                <p><strong>Floor area</strong></p>
                                                            </div>

                                                        </div>
                                                    </p>
                                                </ScrollTrigger>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mb-5">
                                        <h2>Elin</h2>
                                        <div className="card" style={{ width: '100%', height: '700px' }}>
                                            <a href="#">
                                                <img src="..." className="card-img-top" style={{ height: '600px' }} />
                                            </a>
                                            <div className="card-body">
                                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                    <p className="card-text">
                                                        <div className="d-flex">

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={96.00} duration={2} delay={0} decimals={2} className="purecounter" />}
                                                                </span> sqm<p><strong>Lot area</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={2} duration={2} delay={0} className="purecounter" />}
                                                                </span>
                                                                <p><strong>Bedrooms</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={2} duration={2} delay={0} className="purecounter" />}
                                                                </span>
                                                                <p><strong>Bathrooms</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={2} duration={2} delay={0} className="purecounter" />}
                                                                </span>
                                                                <p><strong>Floor(s)</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={2} duration={2} delay={0} className="purecounter" />}
                                                                </span> Car(s)
                                                                <p><strong>Garage</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={50.20} duration={2} delay={0} decimals={2} className="purecounter" />}
                                                                </span> sqm
                                                                <p><strong>Floor area</strong></p>
                                                            </div>

                                                        </div>
                                                    </p>
                                                </ScrollTrigger>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mb-5">
                                        <h2>Ysabella Grande</h2>
                                        <div className="card" style={{ width: '100%', height: '700px' }}>
                                            <a href="#">
                                                <img src="..." className="card-img-top" style={{ height: '600px' }} />
                                            </a>
                                            <div className="card-body">
                                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                    <p className="card-text">
                                                        <div className="d-flex">

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={105.00} duration={2} delay={0} decimals={2} className="purecounter" />}
                                                                </span> sqm<p><strong>Lot area</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={3} duration={2} delay={0} className="purecounter" />}
                                                                </span>
                                                                <p><strong>Bedrooms</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={3} duration={2} delay={0} className="purecounter" />}
                                                                </span>
                                                                <p><strong>Bathrooms</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={2} duration={2} delay={0} className="purecounter" />}
                                                                </span> w/ attic
                                                                <p><strong>Floor(s)</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={1} duration={2} delay={0} className="purecounter" />}
                                                                </span> Car(s)
                                                                <p><strong>Garage</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={139.00} duration={2} delay={0} decimals={2} className="purecounter" />}
                                                                </span> sqm
                                                                <p><strong>Floor area</strong></p>
                                                            </div>

                                                        </div>
                                                    </p>
                                                </ScrollTrigger>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mb-5">
                                        <h2>Madeline</h2>
                                        <div className="card" style={{ width: '100%', height: '700px' }}>
                                            <a href="#">
                                                <img src="..." className="card-img-top" style={{ height: '600px' }} />
                                            </a>
                                            <div className="card-body">
                                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                    <p className="card-text">
                                                        <div className="d-flex">

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={81.00} duration={2} delay={0} decimals={2} className="purecounter" />}
                                                                </span> sqm<p><strong>Lot area</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={2} duration={2} delay={0} className="purecounter" />}
                                                                </span>
                                                                <p><strong>Bedrooms</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={2} duration={2} delay={0} className="purecounter" />}
                                                                </span>
                                                                <p><strong>Bathrooms</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={2} duration={2} delay={0} className="purecounter" />}
                                                                </span>
                                                                <p><strong>Floor(s)</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={2} duration={2} delay={0} className="purecounter" />}
                                                                </span> Car(s)
                                                                <p><strong>Garage</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={96.00} duration={2} delay={0} decimals={2} className="purecounter" />}
                                                                </span> sqm
                                                                <p><strong>Floor area</strong></p>
                                                            </div>

                                                        </div>
                                                    </p>
                                                </ScrollTrigger>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mb-5">
                                        <h2>Eliza</h2>
                                        <div className="card" style={{ width: '100%', height: '700px' }}>
                                            <a href="#">
                                                <img src="..." className="card-img-top" style={{ height: '600px' }} />
                                            </a>
                                            <div className="card-body">
                                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                    <p className="card-text">
                                                        <div className="d-flex">

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={44.00} duration={2} delay={0} decimals={2} className="purecounter" />}
                                                                </span> sqm<p><strong>Lot area</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={2} duration={2} delay={0} className="purecounter" />}
                                                                </span>
                                                                <p><strong>Bedrooms</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={2} duration={2} delay={0} className="purecounter" />}
                                                                </span>
                                                                <p><strong>Bathrooms</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={2} duration={2} delay={0} className="purecounter" />}
                                                                </span> w/ attic
                                                                <p><strong>Floor(s)</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={2} duration={2} delay={0} className="purecounter" />}
                                                                </span> Car(s)
                                                                <p><strong>Garage</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={96.00} duration={2} delay={0} decimals={2} className="purecounter" />}
                                                                </span> sqm
                                                                <p><strong>Floor area</strong></p>
                                                            </div>

                                                        </div>
                                                    </p>
                                                </ScrollTrigger>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mb-5">
                                        <h2>Arabella</h2>
                                        <div className="card" style={{ width: '100%', height: '700px' }}>
                                            <a href="#">
                                                <img src="..." className="card-img-top" style={{ height: '600px' }} />
                                            </a>
                                            <div className="card-body">
                                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                    <p className="card-text">
                                                        <div className="d-flex">

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={38.50} duration={2} delay={0} decimals={2} className="purecounter" />}
                                                                </span> sqm<p><strong>Lot area</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={2} duration={2} delay={0} className="purecounter" />}
                                                                </span>
                                                                <p><strong>Bedrooms</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={2} duration={2} delay={0} className="purecounter" />}
                                                                </span>
                                                                <p><strong>Bathrooms</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={2} duration={2} delay={0} className="purecounter" />}
                                                                </span> w/ attic
                                                                <p><strong>Floor(s)</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={2} duration={2} delay={0} className="purecounter" />}
                                                                </span> Car(s)
                                                                <p><strong>Garage</strong></p>
                                                            </div>

                                                            <div className="col-lg-2 col-2 text-center">
                                                                <span>
                                                                    {counterOn && <CountUp start={0} end={76.00} duration={2} delay={0} decimals={2} className="purecounter" />}
                                                                </span> sqm
                                                                <p><strong>Floor area</strong></p>
                                                            </div>

                                                        </div>
                                                    </p>
                                                </ScrollTrigger>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Pueblo
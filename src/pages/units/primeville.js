import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

import Kathryn from '../../img/content_images/PVR/Kathryn - Final.png';
import Kathryn_Modified from '../../img/content_images/PVR/Kathryn Modified - Final.png';
import Princess_Catherine from '../../img/content_images/PVR/Princess Catherine - Final.png';
import Madeline from '../../img/content_images/PVR/Madeline - Final.png';
import Zen from '../../img/content_images/PVR/Zen - Final.png';

import PageLoader from "../../components/PageLoader";

function PrimeVille() {

    useEffect(() => {
        AOS.init({
            duration: 1000
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
                        <main id="main" data-bs-spy="scroll">
                            <div className="breadcrumbs bg-primary" data-aos="fade-in">
                                <div className="container">
                                    <h2>Primeville Residences</h2>
                                </div>
                            </div>

                            <section id="about" className="about">
                                <div className="container" data-aos="fade-up">

                                    <div className="row mission-vission">

                                        <div className="col-lg-12 mb-5" data-aos="fade-left" data-aos-delay="100">
                                            <div className="section-title" id="alpine-county">
                                                <h2>Bright homes projects</h2>
                                                <p>Primeville residences</p>
                                            </div>

                                            <div className="row project-items mb-5">

                                                <div className="col-lg-6 mb-5">
                                                    <h2>Kathryn</h2>

                                                    <div className="card" style={{ width: '100%', height: '700px' }}>
                                                        <a>
                                                            <img src={Kathryn} className="card-img-top" style={{ height: '600px' }} />
                                                        </a>
                                                        <div className="card-body">
                                                            <p className="card-text">
                                                                <div className="d-flex">
                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={38.5} delay={0} duration={1} decimals={2} className='purecounter' />}
                                                                            </span> sqm
                                                                        </ScrollTrigger>
                                                                        <p><strong>Lot area</strong></p>
                                                                    </div>

                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={2} delay={0} duration={1} className="purecounter" />}
                                                                            </span>
                                                                        </ScrollTrigger>
                                                                        <p><strong>Bedrooms</strong></p>
                                                                    </div>

                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={2} delay={0} duration={1} className="purecounter" />}
                                                                            </span>
                                                                        </ScrollTrigger>
                                                                        <p><strong>Bathrooms</strong></p>
                                                                    </div>

                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={2} delay={0} duration={1} className="purecounter" />}
                                                                            </span>
                                                                        </ScrollTrigger>
                                                                        <p><strong>Floor(s)</strong></p>
                                                                    </div>

                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={2} delay={0} duration={1} className="purecounter" />}
                                                                            </span> Car(s)
                                                                        </ScrollTrigger>
                                                                        <p><strong>Garage</strong></p>
                                                                    </div>

                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={76} duration={1} delay={0} decimals={2} className='purecounter' />}
                                                                            </span> sqm
                                                                        </ScrollTrigger>
                                                                        <p><strong>Floor area</strong></p>
                                                                    </div>
                                                                </div>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 mb-5">
                                                    <h2>Kathryn (modified)</h2>
                                                    <div className="card" style={{ width: '100%', height: '700px' }}>
                                                        <a>
                                                            <img src={Kathryn_Modified} className="card-img-top" style={{ height: '600px' }} />
                                                        </a>
                                                        <div className="card-body">
                                                            <div className="card-text">
                                                                <div className="d-flex">

                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={75} duration={1} delay={0} decimals={2} className="purecounter" />}
                                                                            </span> sqm
                                                                        </ScrollTrigger>
                                                                        <p><strong>Lot area</strong></p>
                                                                    </div>
                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={2} duration={1} delay={0} className="purecounter" />}
                                                                            </span>
                                                                        </ScrollTrigger>
                                                                        <p><strong>Bedrooms</strong></p>
                                                                    </div>
                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={2} delay={0} duration={1} className="purecounter" />}
                                                                            </span>
                                                                        </ScrollTrigger>
                                                                        <p><strong>Bathrooms</strong></p>
                                                                    </div>

                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={2} delay={0} duration={1} className="purecounter" />}
                                                                            </span>
                                                                        </ScrollTrigger>
                                                                        <p><strong>Floor(s)</strong></p>
                                                                    </div>

                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={2} delay={0} duration={1} className="purecounter" />}
                                                                            </span> Car(s)
                                                                        </ScrollTrigger>
                                                                        <p><strong>Garage</strong></p>
                                                                    </div>

                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={65} duration={1} delay={0} decimals={2} className='purecounter' />}
                                                                            </span> sqm
                                                                        </ScrollTrigger>
                                                                        <p><strong>Floor area</strong></p>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 mb-5">
                                                    <h2>Princess Catherine</h2>
                                                    <div className="card" style={{ width: '100%', height: '700px' }}>
                                                        <a>
                                                            <img src={Princess_Catherine} className="card-img-top" style={{ height: '600px' }} />
                                                        </a>
                                                        <div className="card-body">
                                                            <div className="card-text">
                                                                <div className="d-flex">

                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={81} duration={1} delay={0} decimals={2} className="purecounter" />}
                                                                            </span> sqm
                                                                        </ScrollTrigger>
                                                                        <p><strong>Lot area</strong></p>
                                                                    </div>
                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={2} duration={1} delay={0} className="purecounter" />}
                                                                            </span>
                                                                        </ScrollTrigger>
                                                                        <p><strong>Bedrooms</strong></p>
                                                                    </div>
                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={2} delay={0} duration={1} className="purecounter" />}
                                                                            </span>
                                                                        </ScrollTrigger>
                                                                        <p><strong>Bathrooms</strong></p>
                                                                    </div>

                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={2} delay={0} duration={1} className="purecounter" />}
                                                                            </span> w/ attic
                                                                        </ScrollTrigger>
                                                                        <p><strong>Floor(s)</strong></p>
                                                                    </div>

                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={2} delay={0} duration={1} className="purecounter" />}
                                                                            </span> Car(s)
                                                                        </ScrollTrigger>
                                                                        <p><strong>Garage</strong></p>
                                                                    </div>

                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={96} duration={1} delay={0} decimals={2} className='purecounter' />}
                                                                            </span> sqm
                                                                        </ScrollTrigger>
                                                                        <p><strong>Floor area</strong></p>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 mb-5">
                                                    <h2>Madeline</h2>
                                                    <div className="card" style={{ width: '100%', height: '700px' }}>
                                                        <a>
                                                            <img src={Madeline} className="card-img-top" style={{ height: '600px' }} />
                                                        </a>
                                                        <div className="card-body">
                                                            <div className="card-text">
                                                                <div className="d-flex">

                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={81} duration={1} delay={0} decimals={2} className="purecounter" />}
                                                                            </span> sqm
                                                                        </ScrollTrigger>
                                                                        <p><strong>Lot area</strong></p>
                                                                    </div>
                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={2} duration={1} delay={0} className="purecounter" />}
                                                                            </span>
                                                                        </ScrollTrigger>
                                                                        <p><strong>Bedrooms</strong></p>
                                                                    </div>
                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={2} delay={0} duration={1} className="purecounter" />}
                                                                            </span>
                                                                        </ScrollTrigger>
                                                                        <p><strong>Bathrooms</strong></p>
                                                                    </div>

                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={2} delay={0} duration={1} className="purecounter" />}
                                                                            </span> w/ attic
                                                                        </ScrollTrigger>
                                                                        <p><strong>Floor(s)</strong></p>
                                                                    </div>

                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={2} delay={0} duration={1} className="purecounter" />}
                                                                            </span> Car(s)
                                                                        </ScrollTrigger>
                                                                        <p><strong>Garage</strong></p>
                                                                    </div>

                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={96} duration={1} delay={0} decimals={2} className='purecounter' />}
                                                                            </span> sqm
                                                                        </ScrollTrigger>
                                                                        <p><strong>Floor area</strong></p>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <h2>Zen</h2>
                                                    <div className="card" style={{ width: '100%', height: '700px' }}>
                                                        <a>
                                                            <img src={Zen} className="card-img-top" style={{ height: '600px' }} />
                                                        </a>
                                                        <div className="card-body">
                                                            <div className="card-text">
                                                                <div className="d-flex">

                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={55} duration={1} delay={0} decimals={2} className="purecounter" />}
                                                                            </span> sqm
                                                                        </ScrollTrigger>
                                                                        <p><strong>Lot area</strong></p>
                                                                    </div>
                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={2} duration={1} delay={0} className="purecounter" />}
                                                                            </span>
                                                                        </ScrollTrigger>
                                                                        <p><strong>Bedrooms</strong></p>
                                                                    </div>
                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={2} delay={0} duration={1} className="purecounter" />}
                                                                            </span>
                                                                        </ScrollTrigger>
                                                                        <p><strong>Bathrooms</strong></p>
                                                                    </div>

                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={2} delay={0} duration={1} className="purecounter" />}
                                                                            </span> w/ attic
                                                                        </ScrollTrigger>
                                                                        <p><strong>Floor(s)</strong></p>
                                                                    </div>

                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={2} delay={0} duration={1} className="purecounter" />}
                                                                            </span> Car(s)
                                                                        </ScrollTrigger>
                                                                        <p><strong>Garage</strong></p>
                                                                    </div>

                                                                    <div className="col-lg-2 col-2 text-center">
                                                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                                                            <span>
                                                                                {counterOn && <CountUp start={0} end={111} duration={1} delay={0} decimals={2} className='purecounter' />}
                                                                            </span> sqm
                                                                        </ScrollTrigger>
                                                                        <p><strong>Floor area</strong></p>
                                                                    </div>

                                                                </div>
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

export default PrimeVille;
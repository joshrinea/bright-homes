import React, { useEffect, useState } from "react";
import Patrizia from "../../img/content/patrizia.jpg";

import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import PageLoader from "../../components/PageLoader";

function Alphine() {

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

        document.title = "Alphine County | Brighthomes";
    }, [])

    return (
        <>
            {
                loading ? <PageLoader /> :
                    <div>
                        <main id="main" data-bs-spy="scroll">

                            <div className="breadcrumbs bg-primary" data-aos="fade-in">
                                <div className="container">
                                    <h2>Alphine County</h2>
                                </div>
                            </div>

                            <section id="about" className="about">
                                <div className="container" data-aos="fade-up">

                                    <div className="row mission-vision">

                                        <div className="col-lg-12 mb-5" data-aos="fade-left" data-aos-delay="100">
                                            <div className="section-title" id="alpine-county">
                                                <h2>Bright homes Projects</h2>
                                                <p>Alphine County</p>
                                            </div>

                                            <div className="row project-items mb-5">

                                                <div className="col-lg-6 mb-5">
                                                    <h2>Celine</h2>
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
                                                                                {counterOn && <CountUp start={0} end={96} duration={2} delay={0} className="purecounter" />}
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
                                                                                {counterOn && <CountUp start={0} end={103} duration={2} delay={0} className="purecounter" />}
                                                                            </span> sqm
                                                                            <p><strong>Floor area</strong></p>
                                                                        </div>

                                                                    </div>
                                                                </p>
                                                            </ScrollTrigger>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 mb-3">
                                                    <h2>Karen</h2>
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

export default Alphine;
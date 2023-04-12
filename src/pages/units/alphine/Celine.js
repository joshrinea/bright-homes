import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

import AC4 from '../../../img/units/alpine/AC4.png';
import Z6 from '../../../img/units/alpine/z6.jpg';

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
                            </div>
                        </div>

                    </div>
                </section>

            </main>
        </>
    )
}

export default Celine;
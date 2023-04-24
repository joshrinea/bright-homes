import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import PageLoader from "../components/PageLoader";

function About() {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
        document.title = "About | Brighthomes"
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

    return (
        <>
            {
                loading ? <PageLoader /> :
                    <div>
                        <main id="main" name="about">

                            <div className="breadcrumbs bg-primary" data-aos="fade-in">
                                <div className="container">
                                    <h2>About us</h2>
                                </div>
                            </div>

                            <section id="about" className="about">
                                <div className="container" data-aos="fade-up">

                                    <div className="row mission-vision">

                                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
                                            <div className="section-title">
                                                <h2>Mission</h2>
                                                <p>Our mission</p>
                                            </div>
                                            <p className="m-para">
                                                To provide affordable and quality homes for various income levels in the society that
                                                supports the government's priority in housing programs for its citizens.
                                            </p>
                                        </div>

                                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
                                            <div className="section-title">
                                                <h2>Vision</h2>
                                                <p>Our vision</p>
                                            </div>
                                            <p className="v-para">
                                                A company that continuously pursues excellence in building quality subdivisions and
                                                housing units for total customer satisfaction.
                                            </p>
                                        </div>

                                        <div className="container">
                                            <h2>Bright Homes & Realty Corporation</h2> <br />
                                            <p>One of the forefronts of residential development for more than a decade. It aims to provide affordable
                                                housing units inspired by the government's initiatives for affordable housing programs. The company offers
                                                house and lot packages that could cater to families and inidividuals of various income level to meet their
                                                tastes and needs. </p><br />
                                            <p>Through the affordable housing programs, Bright Homes wants every families and individuals to enjoy
                                                living a rent-free life and be able to finally say the words <strong>"Kay sarap umuwi sa sariling
                                                    bahay"</strong>.</p><br />
                                            <p>Bright Homes Community offers a lifestyle that is exclusive and comfortable in a location that is
                                                accessible and secure.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* End of About Section */}

                            {/* Affiliates Section */}
                            <section id="affiliates" className="affiliates">
                                <div className="container" data-aos="fade-up">

                                    <div className="section-title">
                                        <h2>Affiliates</h2>
                                        <p>List of our affiliates</p>
                                    </div>

                                    <div className="container">
                                        <div class="row">
                                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                                <img src="https://upload.wikimedia.org/wikipedia/en/6/6b/New_San_Jose_Builders_logo.png" class="img-fluid" />
                                            </div>
                                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                                <img src="https://upload.wikimedia.org/wikipedia/en/6/6b/New_San_Jose_Builders_logo.png" class="img-fluid" />
                                            </div>
                                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                                <img src="https://upload.wikimedia.org/wikipedia/en/6/6b/New_San_Jose_Builders_logo.png" class="img-fluid" />
                                            </div>
                                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                                <img src="https://upload.wikimedia.org/wikipedia/en/6/6b/New_San_Jose_Builders_logo.png" class="img-fluid" />
                                            </div>
                                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                                <img src="https://upload.wikimedia.org/wikipedia/en/6/6b/New_San_Jose_Builders_logo.png" class="img-fluid" />
                                            </div>
                                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                                <img src="https://upload.wikimedia.org/wikipedia/en/6/6b/New_San_Jose_Builders_logo.png" class="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <iframe style={{ maxWidth: '100%', width: '100%', height: '430px' }}
                                    src="https://www.klapty.com/tour/tunnel/nrQ0NypRC7"
                                    frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"
                                    pallowvr="true" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; vr" ></iframe>
                            </section>

                        </main>
                    </div>
            }

        </>
    )
}

export default About;
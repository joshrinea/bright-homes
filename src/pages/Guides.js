import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Guides() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <main id='main'>
                <div className='breadcrumbs bg-primary' data-aos='fade-in' >
                    <div className='container'>
                        <h2>Guides</h2>
                    </div>
                </div>

                <div className='container'>
                    <div className='row'>

                        {/* FOR BUYERS SECTION */}
                        <div className='section-title mt-5'>
                            <h2>Instructions</h2>
                            <p>For Buyers</p>

                            <section id='features' className='features'>
                                <div className='container' data-aos="fade-up">

                                    <div className='row' data-aos="zoom-in" data-aos-delay="100">
                                        <div className='col-lg-4 col-md-4' data-bs-toggle="modal" href="#exampleModalToggle" role='button'>
                                            <div className='icon-box'>
                                                <i class='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                <h3><a href="#">Requirements</a></h3>
                                            </div>
                                        </div>

                                        <div className='col-lg-4 col-md-4 mt-4 mt-md-0' data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                                            <div className='icon-box'>
                                                <i class='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                <h3><a href="#">Price list</a></h3>
                                            </div>
                                        </div>

                                        <div className='col-lg-4 col-md-4 mt-4 mt-md-0'>
                                            <div className='icon-box'>
                                                <i class='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                <h3><a href="https://www.pagibigfund.gov.ph/ac/" target='_blank'>HDMF Housing loan calculator</a></h3>
                                            </div>
                                        </div>

                                        <div className='col-lg-4 col-md-4 mt-4' data-bs-toggle="modal" href="#accreditedBanksModalToggle" role="button">
                                            <div className='icon-box'>
                                                <i class='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                <h3><a href="#accreditedBanksModalToggle">List of accredited banks</a></h3>
                                            </div>
                                        </div>

                                        <div className='col-lg-4 col-md-4 mt-4' href="#download.html" role="button">
                                            <div className='icon-box'>
                                                <i class='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                <h3><a href="download.html">Downloadable forms</a></h3>
                                            </div>
                                        </div>

                                        <div className='col-lg-4 col-md-4 mt-4' data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                                            <div className='icon-box'>
                                                <i class='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                <h3><a href="download.html">Construction bond requirements and guidelines</a></h3>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </section>
                        </div>
                        {/* END FOR BUYERS SECTION */}

                        {/* For Seller Section */}
                        <div className='section-title mt-5'>
                            <h2>Instructions</h2>
                            <p>For Sellers</p>

                            <section id='features' className='features'>
                                <div className='container' data-aos="fade-up">

                                    <div className='row' data-aos="zoom-in" data-aos-delay="100">
                                        <div className='col-lg-4 col-md-4' data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                                            <div className="icon-box">
                                                <i class='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                <h3><a href="">Inventory</a></h3>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-md-4 mt-4 mt-md-0' data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                                            <div className="icon-box">
                                                <i class='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                <h3><a href="">Accreditation form</a></h3>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-md-4 mt-4 mt-md-0' data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                                            <div className="icon-box">
                                                <i class='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                <h3><a href="">Requirements (In-house seller/broker)</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        {/* End of  For Seller Section */}

                        {/* Online payment Section */}
                        <div className='section-title mt-5'>
                            <h2>Instructions</h2>
                            <p>Online payment</p>

                            <section id='features' className='features'>
                                <div className='container' data-aos="fade-up">

                                    <div className='row' data-aos="zoom-in" data-aos-delay="100">
                                        <div className='col-lg-4 col-md-4' data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                                            <div className='icon-box'>
                                                <i class='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                <h3><a href="">Over the counter</a></h3>
                                            </div>
                                        </div>

                                        <div className='col-lg-4 col-md-4 mt-4 mt-md-0' data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                                            <div className='icon-box'>
                                                <i class='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                <h3><a href="">G-CASH</a></h3>
                                            </div>
                                        </div>

                                        <div className='col-lg-4 col-md-4 mt-4 mt-md-0' data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                                            <div className='icon-box'>
                                                <i class='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                <h3><a href="">Others</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        {/* End Online payment Section */}

                    </div>
                </div>
            </main>
        </>
    )
}

export default Guides;
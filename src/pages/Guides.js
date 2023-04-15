import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import img_1 from '../img/Initial_Materials_for_website/1.jpg';
import img_2 from '../img/Initial_Materials_for_website/2.png';
// import img_3 from '../img/Initial_Materials_for_website/3.jpg';
import { SendEmail, SampleHEHEHE } from '../js/sample.js';
import PageLoader from "../components/PageLoader";
import { Alert, Snackbar } from "@mui/material";

function Guides() {
    let img_set = 0;
    const [show, setShow] = useState(false);
    const [img, setImg] = useState(false);
    const [sample_js_1, setSendEmail] = useState(false);
    const [sample_js_2, setSampleJS2] = useState(false);
    function set_image(img_num) {
        img_set = img_num;
    }
    const handleClose = () => setShow(false);
    function handleShow(set_no) {
        set_image(set_no);
        if (img_set == 1) {
            setImg(img_1);
        } else if (img_set == 2) {
            setImg(img_2);
        }
        setShow(true)
    }


    useEffect(() => {
        setSampleJS2(SampleHEHEHE)
        AOS.init();
    }, [])

    // page loader
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])

    // snackbar
    const [snackBar, setSnackBar] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'right',
    });

    const { vertical, horizontal, open } = snackBar;

    const handleSnackBar = (newState) => () => {
        setSnackBar({ open: true, ...newState })
    }

    const closeSnackBar = (event, reason) => {
        setSnackBar({ ...snackBar, open: false })
    }

    return (
        <>
            {
                loading ? <PageLoader /> :
                    <div>
                        <main id='main'>
                            <div className='breadcrumbs bg-primary' data-aos='fade-in' >
                                <div className='container'>
                                    <h2>Guides {sample_js_1},{sample_js_2}</h2>
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
                                                        <div className='icon-box' onClick={() => handleShow(1)}>
                                                            <i class='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                            <h3><a>Requirements</a></h3>
                                                        </div>
                                                    </div>

                                                    <div className='col-lg-4 col-md-4 mt-4 mt-md-0' data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                                                        <div className='icon-box' onClick={() => handleShow(2)}>
                                                            <i className='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                            <h3><a href="#">Price list</a></h3>
                                                        </div>
                                                    </div>

                                                    <div className='col-lg-4 col-md-4 mt-4 mt-md-0'>
                                                        <div className='icon-box'>
                                                            <i className='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                            <h3><a href="https://www.pagibigfund.gov.ph/ac/" target='_blank'>HDMF Housing loan calculator</a></h3>
                                                        </div>
                                                    </div>

                                                    <div className='col-lg-4 col-md-4 mt-4' data-bs-toggle="modal" href="#accreditedBanksModalToggle" role="button">
                                                        <div className='icon-box'>
                                                            <i className='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                            <h3><a href="#accreditedBanksModalToggle">List of accredited banks</a></h3>
                                                        </div>
                                                    </div>

                                                    <div className='col-lg-4 col-md-4 mt-4' href="#download.html" role="button">
                                                        <div className='icon-box'>
                                                            <i className='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                            <h3><a href="download.html">Downloadable forms</a></h3>
                                                        </div>
                                                    </div>

                                                    <div className='col-lg-4 col-md-4 mt-4' data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                                                        <div className='icon-box'>
                                                            <i className='bx bx-file' style={{ color: '#4233ff' }}></i>
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
                                                            <i className='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                            <h3><a href="">Inventory</a></h3>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-4 col-md-4 mt-4 mt-md-0' data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                                                        <div className="icon-box">
                                                            <i className='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                            <h3><a href="">Accreditation form</a></h3>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-4 col-md-4 mt-4 mt-md-0' data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                                                        <div className="icon-box">
                                                            <i className='bx bx-file' style={{ color: '#4233ff' }}></i>
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
                                                            <i className='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                            <h3><a href="">Over the counter</a></h3>
                                                        </div>
                                                    </div>

                                                    <div className='col-lg-4 col-md-4 mt-4 mt-md-0' data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                                                        <div className='icon-box'>
                                                            <i className='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                            <h3><a href="">G-CASH</a></h3>
                                                        </div>
                                                    </div>

                                                    <div className='col-lg-4 col-md-4 mt-4 mt-md-0' data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                                                        <div className='icon-box'>
                                                            <i className='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                            <h3><a href="">Others</a></h3>
                                                        </div>
                                                    </div>

                                                    {/* snackbar */}

                                                    <Button variant="outlined" className="mt-5" onClick={handleSnackBar({ vertical: 'top', horizontal: 'right' })}>
                                                        SnackBar success
                                                    </Button>

                                                    <Button variant="outlined" className="mt-5" onClick={handleSnackBar({ vertical: 'top', horizontal: 'right' })}>
                                                        SnackBar danger
                                                    </Button>



                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    {/* End Online payment Section */}

                                </div>
                            </div>
                        </main>
                    </div>
            }
            {/* modal */}
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal show={show} onClick={handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Requirements</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Woohoo, you're reading this text in a modal! */}
                        <div className="container">
                            <img src={img} className="img-fluid" alt="..." />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    )
}

export default Guides;
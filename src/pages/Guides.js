import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from 'react-bootstrap/Button';
import PageLoader from "../components/PageLoader";
import { ModalData, sellersData, OnlinePayment } from "../components/ModalData";
import MyModal from "../components/MyModal";

function Guides() {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
        document.title = "Guides | Brighthomes"
    }, [])

    // page loader
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])

    // passing modal data
    const [modal, setModal] = useState(false);
    const [tempData, setTempdata] = useState([])

    const getData = (id, img1, img2, img3, img4, title, desc, size, hasFile) => {
        let tempData = [id, img1, img2, img3, img4, title, desc, size, hasFile];

        setTempdata(item => [1, ...tempData]);

        return setModal(true)
    }


    return (
        <>
            {
                loading ? <PageLoader /> :
                    <div>
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
                                                    {
                                                        ModalData.forBuyersData.map((item, index) => {
                                                            return (
                                                                <div className='col-lg-4 col-md-4 mt-2' data-bs-toggle="modal" href="#exampleModalToggle" role='button' key={index}>
                                                                    {/* <div className='icon-box' onClick={() => handleShow(1)}>
                                                                        <i class='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                                        <h3><a>Requirements</a></h3>
                                                                        <h3><a>{item.title}</a></h3>
                                                                    </div> */}
                                                                    <div className="icon-box" onClick={() => getData(item.id, item.imgSrc, item.imgSrc2, item.imgSrc3, item.imgSrc4, item.title, item.desc, item.size, item.hasFile)}>
                                                                        <i class='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                                        <h3><a>{item.title}</a></h3>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
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
                                                    {
                                                        sellersData.forSellersData.map((item, index) => {
                                                            return (
                                                                <div className='col-lg-4 col-md-4' data-bs-toggle="modal" href="#exampleModalToggle" role="button" key={index}>
                                                                    <div className="icon-box" onClick={() => getData(item.id, item.imgSrc, item.imgSrc2, item.imgSrc3, item.imgSrc4, item.title, item.desc, item.size, item.hasFile)}>
                                                                        <i className='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                                        <h3><a>{item.title}</a></h3>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }

                                                    {/* <div className='col-lg-4 col-md-4 mt-4 mt-md-0' data-bs-toggle="modal" href="#exampleModalToggle" role="button">
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
                                                    </div> */}
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
                                                    {
                                                        OnlinePayment.forOnlinePayment.map((item, index) => {
                                                            return (
                                                                <div className='col-lg-4 col-md-4' data-bs-toggle="modal" href="#exampleModalToggle" role="button" key={index}>
                                                                    <div className="icon-box" onClick={() => getData(item.id, item.imgSrc, item.imgSrc2, item.imgSrc3, item.imgSrc4, item.title, item.desc, item.size, item.hasFile)}>
                                                                        <i className='bx bx-file' style={{ color: '#4233ff' }}></i>
                                                                        <h3><a>{item.title}</a></h3>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                    {/* <div className='col-lg-4 col-md-4' data-bs-toggle="modal" href="#exampleModalToggle" role="button">
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
                                                    </div> */}

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
            {/* <div className="modal show" style={{ display: 'block', position: 'initial' }} >
                <Modal show={show} onClick={handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Requirements</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <img src={img} className="img-fluid" alt="..." />
                        </div>
                        {
                            console.log(ModalData.cardData)
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div> */}

            {
                modal === true ? <MyModal id={tempData[1]} img1={tempData[2]} img2={tempData[3]} img3={tempData[4]} img4={tempData[5]} title={tempData[6]} desc={tempData[7]} size={tempData[8]} hide={() => setModal(false)} hasFile={tempData[9]} /> : ''
            }

        </>
    )
}

export default Guides;
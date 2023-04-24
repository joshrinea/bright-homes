import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const responsiveCarousel = {
    // superLargeDesktop: {
    //     breakpoint: { max: 4000, min: 3000 },
    //     items: 5
    // },
    // desktop: {
    //     breakpoint: { max: 3000, min: 1024 },
    //     items: 3
    // },
    // tablet: {
    //     breakpoint: { max: 1024, min: 464 },
    //     items: 2
    // },
    // mobile: {
    //     breakpoint: { max: 464, min: 0 },
    //     items: 1
    // }

    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 2
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default class MyModal extends Component {

    render() {

        let modalStyle = {
            display: 'block',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }

        {
            if (this.props.hasFile == null) {
                return (
                    <div className="modal show fade" style={modalStyle}>
                        <div className="modal-dialog modal-dialog-centered modal-sm">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{this.props.title}</h5>
                                    <button type="button" className="btn-close" onClick={this.props.hide}></button>
                                </div>
                                <div className="modal-body" >

                                    <div>

                                        {/* <Carousel responsive={responsiveCarousel} infinite={true}>

                                            <div className="carouselItem">
                                                <img src={this.props.img1} className="carouselImg" />
                                            </div>
                                            <div className="carouselItem">
                                                <img src={this.props.img2} className="carouselImg" />
                                            </div>
                                            <div className="carouselItem">
                                                <img src={this.props.img3} className="carouselImg" />
                                            </div>
                                            <div className="carouselItem">
                                                <img src={this.props.img4} className="carouselImg" />
                                            </div>

                                        </Carousel> */}

                                        <div className="container-fluid">
                                            <div className="row">
                                                <div class="col-6 col-sm-6 p-2" >
                                                    <img src={this.props.img1} className="img-fluid" />
                                                </div>
                                                <div class="col-6 col-sm-6 p-2" >
                                                    <img src={this.props.img2} className="img-fluid" />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div class="col-6 col-sm-6 p-2" >
                                                    <img src={this.props.img3} className="img-fluid" />
                                                </div>
                                                <div class="col-6 col-sm-6 p-2" >
                                                    <img src={this.props.img4} className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div className="modal show fade" style={modalStyle}>
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{this.props.title}</h5>
                                    <button type="button" className="btn-close" onClick={this.props.hide}></button>
                                </div>
                                <div className="modal-body">

                                    <div className="section-title">
                                        <h2>Instructions</h2>
                                        <p>{this.props.title}</p>
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <a href={this.props.hasFile} download={this.props.hasFile}>
                                            <button className="btn-download">Download file <i class='bx bxs-download'></i></button>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }




        }

        // return (

        //     // <div className="modal show fade" style={{ display: 'block', position: 'initial' }} >
        //     //     <Modal  size="lg">
        //     //         <Modal.Header closeButton>
        //     //             <Modal.Title>title</Modal.Title>
        //     //         </Modal.Header>
        //     //         <Modal.Body>

        //     //         </Modal.Body>
        //     //         <Modal.Footer>
        //     //             <Button variant="secondary" >
        //     //                 Close
        //     //             </Button>
        //     //         </Modal.Footer>
        //     //     </Modal>
        //     // </div>


        // )
    }
}
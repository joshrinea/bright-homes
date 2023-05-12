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
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
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
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }

        let carouselItemStyle = {
            width: '100%',
            height: '100%',
        }

        let carouselImageStyle = {
            width: '100%',
            height: '100%',
        }

        {
            if (this.props.hasFile == null) {

                const images = this.props.images;

                return (
                    <>
                        <div className="modal show fade" style={modalStyle}>
                            <div className="modal-dialog modal-dialog-centered modal-xl">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">{this.props.title}</h5>
                                        <button type="button" className="btn-close" onClick={this.props.hide}></button>
                                    </div>
                                    <div className="modal-body" >
                                        <Carousel responsive={responsiveCarousel} infinite={true}>
                                            {
                                                images.map((image, index) => {
                                                    return (
                                                        <div style={carouselItemStyle} key={index}>
                                                            <img src={image} style={carouselImageStyle} />
                                                        </div>
                                                    )
                                                })
                                            }


                                            {/* <div className="carouselItem">
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
                                                </div> */}

                                        </Carousel>

                                        {/* <div className="container-fluid">
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
                                            </div> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
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

                                    {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <a href={this.props.hasFile} download={this.props.hasFile}>
                                            <button className="btn-download">{this.props.title} <i class='bx bxs-download'></i></button>
                                        </a>
                                    </div> */}
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-10">
                                                {this.props.title}
                                            </div>
                                            <div className="col-2">
                                                <a href={this.props.hasFile} download={this.props.hasFile}>
                                                    <button className="btn-download">Download <i class='bx bxs-download'></i></button>
                                                </a>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-10">
                                                {this.props.title}
                                            </div>
                                            <div className="col-2">
                                                <a href={this.props.hasFile} download={this.props.hasFile}>
                                                    <button className="btn-download">Download <i class='bx bxs-download'></i></button>
                                                </a>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-10">
                                                {this.props.title}
                                            </div>
                                            <div className="col-2">
                                                <a href={this.props.hasFile} download={this.props.hasFile}>
                                                    <button className="btn-download">Download <i class='bx bxs-download'></i></button>
                                                </a>
                                            </div>
                                        </div>
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
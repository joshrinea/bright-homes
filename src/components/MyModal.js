import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";
import Guides from "../pages/Guides";

function imageModal() {
    return (
        <div className="modal-body">

            <div className="box" style={{ width: '100%' }}>
                <img src={this.props.img1} className="img-fluid" style={{ width: '100%' }} />
                <img src={this.props.img2} className="img-fluid" style={{ width: '100%' }} />
                <img src={this.props.img3} className="img-fluid" style={{ width: '100%' }} />
                <img src={this.props.img4} className="img-fluid" style={{ width: '100%' }} />
            </div>

        </div>
    )
}

function fileModal() {
    return (
        <div className="modal-body">

            <div className="box" style={{ width: '100%' }}>
                <h1>This is file modal</h1>
            </div>

        </div>
    )
}


export default class MyModal extends Component {

    render() {

        let modalStyle = {
            display: 'block',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }

        if (this.props.file === 1) {
            return (
                <div className="modal show fade" style={modalStyle}>
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{this.props.title}</h5>
                                <button type="button" className="btn-close" onClick={this.props.hide}></button>
                            </div>
                            <div className="modal-body">

                                <h1>This is file modal</h1>

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

                                <div className="box" style={{ width: '100%' }}>
                                    <img src={this.props.img1} className="img-fluid" style={{ width: '100%' }} />
                                    <img src={this.props.img2} className="img-fluid" style={{ width: '100%' }} />
                                    <img src={this.props.img3} className="img-fluid" style={{ width: '100%' }} />
                                    <img src={this.props.img4} className="img-fluid" style={{ width: '100%' }} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )
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
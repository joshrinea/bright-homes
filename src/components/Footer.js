import React from "react";
import ScrollToTop from "react-scroll-to-top";

function Footer() {
    
    return (
        <>
            <footer id="footer">
                <ScrollToTop smooth top="500" color="white" width="20" height="20" className="back-to-top"/>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>Head Office</h3>
                                <p>
                                    7th Floor, President Tower <br />
                                    No. 81 Timog Scout Ybardolaza St. <br />
                                    Brgy. South Triangle, Quezon City <br />

                                    <strong>Phone:</strong>
                                    <ul>
                                        <li><p>+63-2 920 0598</p></li>
                                        <li><p>+63-2 426 1342</p></li>
                                        <li><p>+63-2 928 7223</p></li>
                                    </ul>

                                    <strong>Email:</strong>
                                    <ul>
                                        <li><p>sales@brighthomesrealty.com</p></li>
                                        <li><p>custservice@brighthomesrealty.com</p></li>
                                    </ul>
                                </p>
                                <br />

                                <h3>Site Office</h3>
                                <p>
                                    2nd Floor El Paseo Commercial Bldg. <br />
                                    El Pueblo Del Rio Subdivision,<br />
                                    Sta. Maria, Bulacan<br></br><br></br>
                                </p>
                                
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Usefull Links</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="about.html">About us</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="explore.html">Explore BHRC</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="guides.html">Guides</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="download.html">Download</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-2 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Services I</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Services II</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Services III</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Services IV</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Services V</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-5 col-md-6 footer-newsletter">
                                <h4>Inquire Now</h4>
                                <div class="row mb-3">
                                    <div class="col-sm-7">
                                        <input type="text" class="form-control" />
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-sm-12">
                                        <input type="text" class="form-control" placeholder="Full name" aria-label="First name" />
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-sm-7">
                                        <input type="text" class="form-control" placeholder="Email" />
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Mobile" />
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-sm-12">
                                        <input type="text" class="form-control" placeholder="Address" aria-label="Address" />
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-sm-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                            <label for="floatingTextarea">Comments</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="d-grid gap-2 col-4">
                                        <button class="btn btn-primary" type="button">SUBMIT</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container d-md-flex py-4">

                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            &copy; Copyright <strong><span>BHRC</span></strong>. All Rights Reserved
                        </div>
                    </div>

                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                    </div>

                </div>

            </footer>
        </>
    )
}

export default Footer;
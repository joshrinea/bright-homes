import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import ScrollToTop from "react-scroll-to-top";
import { SendEmail } from '../js/inquiry.js';
import { Formik, Field, Form, getIn, ErrorMessage } from 'formik';
import { Alert, Snackbar } from "@mui/material";
import * as Yup from 'yup';

function Footer() {
    const [loading, setLoading] = React.useState(false);
    function validateForm(value) {
        let error;
        if (!value) {
          error = 'Required field';
        } 
        // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        //   error = 'Invalid email address';
        // }
        return error;
    }
    function getStyles(errors, fieldName) {
        if (getIn(errors, fieldName)) {
          return {
            border: '1px solid red'
          }
        }
      }
    const mobileNumberValidation = Yup.object().shape({
        mobile: Yup.string()
            .min(11, 'Invalid mobile number!'),
    });
    // snackbar
    const [snackBar, setSnackBar] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'right',
    });
    const { vertical, horizontal, open } = snackBar;
    let [snackbarData, setSnackbarStatus] = useState({});
    let snackBarJson = {};
    function closeSnackBar() {
        setSnackBar({ ...snackBar, open: false })
    }
    function handleSnackBar(newState) {
        setSnackBar({ open: true, ...newState })
    }
    async function doCreate(data) {

        // await setSendEmail(SendEmail(data));
        setLoading(true);
        const status = await SendEmail(data);
        if (status.message == 'Success') {
            snackBarJson = { "snackbarSeverity": "success", "snackbarText": "Email sent succesfully" }
            setSnackbarStatus(snackbarData => ({ ...snackbarData, ...snackBarJson }))
            handleSnackBar({ vertical: 'top', horizontal: 'right' })
        } else {
            snackBarJson = { "snackbarSeverity": "error", "snackbarText": "Something went wrong" }
            setSnackbarStatus(snackbarData => ({ ...snackbarData, ...snackBarJson }))
            handleSnackBar({ vertical: 'top', horizontal: 'right' })
        }
        setLoading(false);
    }
    useEffect(() => {
        return () => {
            setLoading(false);
        };
    }, []);
    return (
        <>
            <footer id="footer">
                <ScrollToTop smooth top="500" color="white" width="20" height="20" className="back-to-top" />
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
                                <Formik
                                    initialValues={{ full_name: "", email: "", mobile: "", address: "", comment: "" }}
                                    validationSchema={mobileNumberValidation}
                                    validate={(values) => {
                                        const errors = {};

                                        if (!values.full_name){errors.full_name = 'Required*';} 
                                        if (!values.email) {errors.email = 'Required*';}else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){errors.email = 'Invalid email address';}
                                        if (!values.mobile) {errors.mobile = 'Required*';}
                                        if (!values.address) {errors.address = 'Required*';}
                                            
                                        return errors;

                                    }}
                                    onSubmit={async (values) => {
                                        await new Promise((resolve) => setTimeout(resolve, 500));
                                        doCreate(values, null, 2);
                                    }}
                                >
                                    {({ errors }) => (
                                        <Form>
                                            <h4>Inquire Now</h4>
                                            {/* <div class="row mb-3">
                                            <div class="col-sm-7">
                                                <input type="text" class="form-control" />
                                            </div>
                                            <div class="col">
                                                <input type="text" class="form-control" />
                                            </div>
                                        </div> */}

                                            <div class="row mb-3">
                                                <div class="col-sm-12">
                                                    <Field style={getStyles(errors,'full_name')} type="text" id="full_name" name="full_name" className="form-control" placeholder="Full name" aria-label="First name" />
                                                    <ErrorMessage name='full_name' style="color:red;" />
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <div class="col-sm-7">
                                                    <Field style={getStyles(errors,'email')} type="email" id="email" name="email" className="form-control" placeholder="Email" />
                                                    <ErrorMessage name='email' style="color:red;" />
                                                </div>
                                                <div class="col">
                                                    <Field type="number" style={getStyles(errors,'mobile')} id="mobile" name="mobile" className="form-control" placeholder="Mobile" />
                                                    <ErrorMessage name='mobile' style="color:red;" />
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <div class="col-sm-12">
                                                    <Field type="text" id="address" style={getStyles(errors,'address')} name="address" className="form-control" placeholder="Address" aria-label="Address" />
                                                    <ErrorMessage name='address' style="color:red;" />
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <div class="col-sm-12">
                                                    <Field rows="3" component="textarea" className="form-control" type="text" placeholder="Leave a comment here" id="comment" name="comment" />
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <div class="d-grid gap-2 col-4">
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Box sx={{ m: 1, position: 'relative' }}>
                                                            <Button variant="contained" class="btn btn-primary" type="submit" disabled={loading}>SUBMIT</Button>
                                                            {loading && (
                                                                <CircularProgress
                                                                    size={24}
                                                                    sx={{
                                                                        position: 'absolute',
                                                                        top: '50%',
                                                                        left: '50%',
                                                                        marginTop: '-12px',
                                                                        marginLeft: '-12px',
                                                                    }}
                                                                />
                                                            )}
                                                        </Box>
                                                    </Box>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
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
            <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={3000} onClose={closeSnackBar} key={vertical + horizontal}>
                <Alert className="snackBar" onClose={closeSnackBar} severity={snackbarData.snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarData.snackbarText}
                </Alert>
            </Snackbar>
        </>
    )
}

export default Footer;
import React, { useEffect, useState } from "react";
import PageLoader from "./PageLoader";
import { Link } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css'

function ErrorPage() {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])
    
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])

    return (
        <>
            {
                loading ? <PageLoader /> :
                    <div>
                        <section id="hero" className="d-flex justify-content-center align-items-center">
                            <div className="container position-relative" >
                                <h2>Seems like the page you are looking for doesn`t exist anymore</h2>
                                <h1>Error - 404</h1>
                                {/* <a href="explore.html" className="btn-get-started">Explore now</a> */}
                                <Link to="explore" className="btn-get-started">Back to Homepage</Link>
                            </div>
                        </section>
                    </div>
            }

        </>
    )
}

export default ErrorPage;
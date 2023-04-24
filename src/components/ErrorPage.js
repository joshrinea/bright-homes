import React, { useEffect, useState } from "react";
import PageLoader from "./PageLoader";
import { Link } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css'

function ErrorPage() {
    
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)

        document.title = "404 Not found"
    }, [])

    return (
        <>
            {
                loading ? <PageLoader /> :
                    <div>
                        <section id="hero" className="d-flex justify-content-center align-items-center">
                            <div className="container position-relative"  style={{ textAlign: 'center' }}>
                                {/* <h2>Seems like the page you are looking for doesn`t exist anymore</h2> */}
                                <h1>Coming soon...</h1>
                                {/* <a href="explore.html" className="btn-get-started">Explore now</a> */}
                                <Link to="/" className="btn-get-started">Back to Homepage</Link>
                            </div>
                        </section>
                    </div>
            }

        </>
    )
}

export default ErrorPage;
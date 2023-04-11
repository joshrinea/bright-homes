import React, { useState } from "react";

function PageLoader(){

    const [loader, setLoader] = useState(true);
    const preloader = document.getElementById("preloader");

    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove()
        });
    }

    return(
        <>
            <div id="preloader"></div>
        </>
    )
}

export default PageLoader;
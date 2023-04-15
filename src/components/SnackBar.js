import React from "react";
import Snackbar from "@mui/material";

function SnackBar() {
    return (
        <>
            <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={3000} onClose={closeSnackBar} key={vertical + horizontal}>
                <Alert className="snackBar" onClose={closeSnackBar} severity="success" sx={{ width: '100%' }}>
                    Email sent successfully
                </Alert>
            </Snackbar>
        </>
    )
}

export default SnackBar;
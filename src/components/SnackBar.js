import React, { useState } from "react";
import Snackbar, { Button } from "@mui/material";

function SnackBar() {

    // const [state, setState] = useState({
    //     open: false,
    //     vertical: 'top',
    //     horizontal: 'right',
    // });

    // const { vertical, horizontal, open } = state;

    // const handleClick = (newstate) => () => {
    //     setState({ open: true, ...newstate });
    // };

    // const handleClose = () => {
    //     setState({ ...state, open: false });
    // };

    // const buttons = (
    //     <>
    //         <Button onClick={handleClick({
    //             vertical: 'top',
    //             horizontal: 'right',
    //         })}
    //         >
    //             Email sent
    //         </Button>

    //         <Button onClick={handleClick({
    //             vertical: 'top',
    //             horizontal: 'left',
    //         })}
    //         >
    //             Email sent
    //         </Button>
    //     </>
    // )

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
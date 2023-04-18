import React from "react";
const url = process.env.REACT_APP_NOT_SECRET_CODE

async function SendEmail(data) {
    const form_data = new FormData();
    for (var key in data) {
        form_data.append(key, data[key])
    }
    try {
        const response = await fetch(`${url}inquiry/send_email`, {
            method: 'POST',
            body: form_data,
            headers: {
                'Accept': 'application/json',
            }
        })
        
        const res = await response.json();
        if (!response.ok) {
            throw { response, res }
        } else {
            return res
        }
    } catch (error) {
        // const errorStatus = error.response.status
        return error

    } 
    // finally {
    //     return res
    // }
}

function SampleHEHEHE() {
    return "This is sample";
}

export { SendEmail, SampleHEHEHE }
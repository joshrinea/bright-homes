import React from "react";
const url = process.env.REACT_APP_NOT_SECRET_CODE
var res = {}
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
        res = await response.ok
        if (!response.ok) {
            throw { response, res }
        } else {
            console.log(res.message)
            return res
        }
    } catch (error) {
        const errorStatus = error.response.status
        return res

    } finally {
        return res
    }
}

function SampleHEHEHE() {
    return "This is sample";
}

export { SendEmail, SampleHEHEHE }
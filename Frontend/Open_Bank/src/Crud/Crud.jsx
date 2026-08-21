import React from "react";
import axios from 'axios';

function Crud() {

    function createAccount() {
        const res = axios.post('http://localhost:3000/create-account', {
            "UserName": "neelanka142",
            "fullname": "neelakanta",
            "CustomerID": 234,
            "Password": "Iloverashmika",
            "confirmPassword": "Iloverashmika",
            "country": "India",
            "mobileNumber": "385834683"
        })
        dataCreate(res.data);
    }
    return (

        <>

            Create

            <button onClick={createAccount}>Create Account </button>


            <input type="text" />Username

            <input type="password" /> password
        </>
    )
}

export default Crud;
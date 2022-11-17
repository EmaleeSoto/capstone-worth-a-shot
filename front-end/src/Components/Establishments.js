import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Establishments = () => {
const [ preference, setPreference ] = useState("")
const [ search, setSearch ] = useState("")

const handlePreference = (event) => {
    let input = event.target.value

    setPreference(input)
}

useEffect(() => {
    const API = `[https://api.yelp.com/v3/businesses/search?categories=${preference}&location=NYC]`
    
}, [])


const handleSearch = () => {
    
}

    return (
        <div>
            <h1> Hi! </h1>
        </div>
    )
}

export default Establishments
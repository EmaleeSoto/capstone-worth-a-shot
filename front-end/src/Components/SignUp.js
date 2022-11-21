import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp () {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        dateOfBirth: "",
        zip_code: 0,
    });

    const handleTextChange = (event) => {
        setUser({ ...user, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };
}
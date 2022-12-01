import axios from "axios"
import {useState, useEffect} from "react"
import {Navigate, useNavigate, useParams} from "react-router-dom"
const API = process.env.REACT_APP_API_URL

function EditUser({ user }) {
    const { id } = useParams()
    const navigate = useNavigate()
    const [userEdit, setUserEdit] = useState({
        name: "",
        age: 0,
        gender: "",
        zip_code: "",
        personality: "",
        flavors: "",
        atmosphere: "",
    })

    const handleTextChange = (event) => {
        setUserEdit({...userEdit, [event.target.id]: event.target.value})
    }

    useEffect(() => {
        axios.get(`${API}/users/${user.id}`)
        .then((response) => {
            setUserEdit(response.data.payload)
        })
        .catch((err) => {
            console.log(err)
        })
    })

    const updateUserInfo = (editedUser) => {
        axios.put(`${API}/users/${user.id}`, editedUser)
        .then(() => {
            navigate(`/user/landing`)
        })
        .catch((c) => {
            console.warn("catch", c)
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setUserEdit(userEdit, user.id)
    }
}
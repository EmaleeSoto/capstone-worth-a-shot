import React from "react"
import {useEffect, useState} from "react"
import {useParams, Link, useNavigate} from 'react-router-dom'
import axios from "axios"
const API = process.env.REACT_APP_API_URL

const ShowDrink = () => {
    const [drink, setDrink] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()

useEffect(() => {
    axios.get(`${API}/alcohols/${id}`)
    .then((response) => {
        setDrink(response.data.payload)
    })
    .catch((error) => {
        console.log(error)
    })
}, [id, navigate, API])

const deleteDrink = () => {
    axios.delete(`${API}/alcohols/${id}`)
    .then(() => {
        navigate(`/alcohols`)
    })
    .catch((c) => console.error("catch", c))
}

const handleDelete = () => {
    deleteDrink()
}

console.log("This is the individual drink:", drink)

const {name, ingredients, proof, description, category, flavor} = drink

    return (
        <div>
        <h3>{name}</h3>
        <h3>
          {category}
          &nbsp;&nbsp;
        </h3>
        <article>
          <div>
            <h3>Proof: {proof}</h3>
            <h3>Flavor: {flavor}</h3>
            <h3>Ingredients: {ingredients}</h3>
            <h4>{description}</h4>
          </div>
        </article>
  
        <br />
        <button href="/alcohols">
          <Link to={"/alcohols"}>Back</Link>
        </button>
        <br />
        <br></br>
        <button id={drink.id} onClick={handleDelete}>
          Delete Entry
        </button>
      </div>
    )
}

export default ShowDrink
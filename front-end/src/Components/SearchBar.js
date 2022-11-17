import React from "react";
import { useState } from "react";


function SearchBar(props) {
const [ input, setInput ] = useState("")


const handleOnChange = (event) => {
    setInput(event.target.value)
  };
console.log(input)


    return (
        <div>
            <input
            type='text'
            className="search-field"
            value={input}
            onChange={handleOnChange}
            placeholder='Search...'
            />
            <button onClick={() => props.handleSearch(input)}>Submit</button>
        </div>
    )
}

export default SearchBar
import React from "react";
import {Link} from "react-router-dom"
const LandingPageSignedIn = () => {
    return (
        <div>
            <h1>Hi {"User"}, what are your plans tonight?</h1>
            <break></break>
            <Link to="/places">Find Clubs</Link>
            <br></br>
            <Link to="/beverages">Find Drinks</Link>
        </div>
    )
}

export default LandingPageSignedIn